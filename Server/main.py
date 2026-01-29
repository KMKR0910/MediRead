from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from ocr import read_prescription
from database import save_prescription

app = FastAPI(title="MediRead API")

# Allow React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/scan")
async def scan_prescription(file: UploadFile = File(...)):
    text, medicines = read_prescription(file)
    save_prescription(text, medicines)

    return {
        "raw_text": text,
        "medicines": medicines
    }

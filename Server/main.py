from fastapi import FastAPI,File,UploadFile
from fastapi.middleware.cors import CORSMiddleware
from ocr import read_prscription
from database import save_to_db




app = FastAPI(title ="MediRead API")

app.add_middleware(
    CORSMiddleware,
    allo_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/scan")
async def scan(file:UploadFile =File(...)):
    text, mediicines = read_prscription(file)
    save_to_db(text, mediicines)
    return {"raw_text": text,"medicines":medicines}

from fastapi import FastAPI, UploadFile, File
from ocr import extract_text

app = FastAPI()

@app.post("/upload")
async def upload_prescription(file: UploadFile = File(...)):
    contents = await file.read()
    text = extract_text(contents)
    
    return {
        "extracted_text": text
    }
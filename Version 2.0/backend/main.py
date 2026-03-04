from fastapi import FastAPI, UploadFile, File
from ocr import extract_text
from ner_model import extract_medicine_entities



app = FastAPI()

@app.post("/upload")
async def upload_prescription(file: UploadFile = File(...)):
    contents = await file.read()
    text = extract_text(contents)
    
    return {
        "extracted_text": text
    }

@app.post("/analyze")
async def analyze_prescription(file: UploadFile = File(...)):
    contents = await file.read()
    text = extract_text(contents)
    medicines = extract_medicine_entities(text)

    return {
        "text": text,
        "medicines": medicines
    }
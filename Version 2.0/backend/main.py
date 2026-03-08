from fastapi import FastAPI, UploadFile, File
from ocr import extract_text
from ner_model import extract_medical_entities


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
    medicines = extract_medical_entities(text)

    return {
        "raw_text": text,
        "structred_data": medicines
    }
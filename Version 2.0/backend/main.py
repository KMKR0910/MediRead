from fastapi import FastAPI, UploadFile, File
from ocr import extract_text
from ner_model import extract_medical_entities
from database import prescriptions
from bson import ObjectId  


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
    entities = extract_medical_entities(text)


    data = {
        "raw_text": text,
        "structured_data": entities
    }


    result = prescriptions.insert_one(data)
    data["_id"] =str(result.inserted_id)

    return data

@app.get("/prescriptions")
def get_prescriptions():

    results = []

    for item in prescriptions.find():
        item["_id"]=str(item["_id"])
        results.append(item)

    return results
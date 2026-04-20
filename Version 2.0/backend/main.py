from fastapi import FastAPI, UploadFile, File
from ocr import extract_text
from ner_model import extract_medical_entities
from database import prescriptions
from bson import ObjectId  
from fastapi.middleware.cors import CORSMiddleware
from textblob import TextBlob


app = FastAPI()

origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


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
    corrected_text = str(TextBlob(text).correct())
    entities = extract_medical_entities(corrected_text)


    data = {
        "raw_text": text,
        "corrected_text": corrected_text,
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
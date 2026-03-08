from email.mime import text
from html import entities
import os
from pymongo import MongoClient
from dotenv import load_dotenv
from database import collection

load_dotenv()

MONGO_URI = os.getenv("MONGO_URI", "mongodb://localhost:27017")
DB_NAME = os.getenv("DB_NAME", "mediread")

client = MongoClient(MONGO_URI)
db = client[DB_NAME]
prescriptions_collection = db["prescriptions"]

collection.insert_one({
    "text": text,
    "entities": entities
})
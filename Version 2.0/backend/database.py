from pymongo import MongoClient
from collections import text ,medicines

client = MongoClient("mongodb://localhost:27017/")
db = client["mediread"]
collection = db["prescriptions"]

collection.insert_one({
    "text": text,
    "medicines": medicines
})
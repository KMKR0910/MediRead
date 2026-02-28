from pymongo import MongoClient

client = MongoClient("mongodb://localhost:27017")

db = client.mediread

collection = db.prescriptions

def save_prescriptions(text,medicines):
   collection.insert_one({
      "raw_text":text,
      "medicines":medicines
   
   })


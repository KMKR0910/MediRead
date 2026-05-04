from pymongo import MongoClient


client = MongoClient('mongodb://mediread_user:1234@localhost:27017/?authSource=mediread_db')

db = client["mediread_db"]
prescriptions = db["prescriptions"]


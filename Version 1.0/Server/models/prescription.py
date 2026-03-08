from pydantic import BaseModel
from typing import Optional
from datetime import date

class PrescriptionResponse(BaseModel):
   id:str
   filename:str
   dosage:str
   frequncy:str
   duration:str
   full_text:Optional[str]=None
   created_at=datetime

class PrescriptionInDB(PrescriptionResponse):
   pass

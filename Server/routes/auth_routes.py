from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session


router = APIRouter()

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

@router.post("/register")
def register(username: str, password:str, db: Session = Depends(get_db)):

     hashed_password =pwd_context.hash(password)

     user = user(username=username, password=hashed_password)
     db.add(user)
     db.commit()

     return {"message" : "User created"}




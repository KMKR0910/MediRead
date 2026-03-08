"""from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.user import User
from app.utils.jwt_handler import create_access_token
from passlib.context import CryptContext

router = APIRouter()

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

@router.post("/register")
def register(username: str, password:str, db: Session = Depends(get_db)):

     hashed_password =pwd_context.hash(password)

     user = user(username=username, password=hashed_password)
     db.add(user)
     db.commit()

     return {"message" : "User created"}

@router.post("/login")
def login(username:str, password:str, db:Session = Depends(get_db)):
     
     user = db.query(User).filter(User.username == username).first()

     if not user:
          return {"error" :"Invalid credentilas" }
     if not pwd_context.verify(password,user.password):
          return {"error":"Invalid password"}
     
     token = create_access_token({"sub":user.username})

     return {"acces_token":token}


"""
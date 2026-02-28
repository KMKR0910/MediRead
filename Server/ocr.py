import cv2
import numpy as np
import pytesseract
import re


pytesseract.pytesseract.tesseract_cmd = r"C:\Program Files\Tesseract-OCR\tesseract.exe"



def read_prscription(file):
   image_bytes = file.file.read()

   np_img = np.frombuffer(image_bytes, np.uint8)

   img = cv2.imdecode(np_img,cv2.IMREAD_COLOR)

   gray = cv2.cvtColor(img,cv2.COLOR_BGR2GRAY)

   text = pytesseract.image_to_string(gray)

   medicines = re.findall(r"[A-Za-z]+\s\d+mg",text)

   return text,medicines
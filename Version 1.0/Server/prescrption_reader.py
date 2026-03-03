import pytesseract
from PIL import Image
import spacy
import re

class PrescriptionReder:
   def __init__(self,model_path="en_ner_bc5cdr_md"):
      self.nlp =spacy.load(model_path)

   def extract_text(self,image_path):# Extract text from image using OCR(tesseract)

      image =Image.open(image_path)
      text = pytesseract.image_to_string(image)
      return text
   
   def parse_entities(self,text):
      doc=self.nlp(text)
      entities={"MEDINE":[], "DOSAGE":[], "FREQUENCY":[],"DURATION":[]}
      for ent  in doc.ents:
         if ent.label in entities:
            entities[ent.label].append(ent.text)
      return entities
   
   def extract_from_image(self, image_path):# ocr to structured output
      text=self.extract_text(image_path)
      entities=self.parse_entities(text)

      result={
         "medicine": entities["MEDICINE"][0]if entities["MEDICINE"]else "",
         "dosage":entities["DOSAGE"][0] if entities["DOSAGE"]else "",
         "frequency": entities["FREQUENCY"][0] if entities["FREQUENCY"] else "",
         "duration": entities["DURATION"][0] if entities["DURATION"] else "",
         "full_text": text
      } 
      return result


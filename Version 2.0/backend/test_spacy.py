

import spacy 

nlp = spacy.load("en_core_web_sm")

text= "Take Paracetamol 500mg twice daily for 5 days."

doc =nlp(text)

for ent in doc.ents:
   print(ent.text,ent.label_)
import spacy
nlp = spacy.load("en_ner_bc5cdr_md")
doc = nlp("The patient was prescribed ibuprofen for headache.")
for ent in doc.ents:
    print(ent.text, ent.label_)
# Expected output: ibuprofen CHEMICAL, headache DISEASE
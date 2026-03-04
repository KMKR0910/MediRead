import spacy

nlp = spacy.load("en_core_web_sm")

def extract_medicine_entities(text):
    doc = nlp(text)

    medicines = []
    for ent in doc.ents:
        if ent.label_ in ["ORG", "PRODUCT"]:
            medicines.append(ent.text)

    return medicines
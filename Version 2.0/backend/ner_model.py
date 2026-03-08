import re

def extract_medical_entities(text):
    drugs = []
    dosages =[]
    frequencies =[]

    dosage_pattern = r'\b\d+\s?(mg|ml|g|tablets?)\b'
    dosages = re.findall(dosage_pattern,text,re.IGNORECASE)


    frequency_keywords = [
        "once_daily"
        "twice daily"
        "three time daily"
        "after meals"
        "before meals"
        "daily"
    ]

    for keyowrd in frequency_keywords:
        if keyowrd.lower() in text.lower():
            frequencies.append(keyowrd)

    medicine_suffixes = ["ol","cin","ine","ide","ate"]

    words = text.split()
    for word in words:
        for suffix in medicine_suffixes:
         if word.lower().endswith(suffix) :
            drugs.append(word)

    return{
        "drugs": drugs,
        "dosages":dosages,
        "frequencies":frequencies
    }




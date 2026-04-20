import re

# load drug list
with open("dataset/drug_list.txt") as f:
    drug_list = [line.strip() for line in f]


def extract_medical_entities(text):

    text_lower = text.lower()

    drugs = []
    dosages = []
    frequencies = []

    # Drug detection
    for drug in drug_list:
        if drug in text_lower:
            drugs.append(drug)

    # Dosage pattern
    dosage_pattern = r'\b\d+\s?(mg|ml|g)\b'
    dosages = re.findall(dosage_pattern, text_lower)

    # Frequency keywords
    frequency_words = [
        "once daily",
        "twice daily",
        "three times daily",
        "after meals",
        "before meals",
        "daily"
    ]

    for word in frequency_words:
        if word in text_lower:
            frequencies.append(word)

    return {
        "drugs": drugs,
        "dosages": dosages,
        "frequencies": frequencies
    }
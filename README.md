#  MediRead – AI Prescription Reader

> An AI-powered web application that extracts and structures medical information from prescription images using OCR and NLP — helping users instantly understand their prescriptions.

![React](https://img.shields.io/badge/Frontend-React-61DAFB?style=flat-square&logo=react)
![TailwindCSS](https://img.shields.io/badge/Styling-Tailwind%20CSS-06B6D4?style=flat-square&logo=tailwindcss)
![Python](https://img.shields.io/badge/Backend-Python-3776AB?style=flat-square&logo=python)
![FastAPI](https://img.shields.io/badge/API-FastAPI-009688?style=flat-square&logo=fastapi)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248?style=flat-square&logo=mongodb)
![EasyOCR](https://img.shields.io/badge/OCR-EasyOCR-FF6F00?style=flat-square)

---

##  Overview

MediRead automates the reading of medical prescriptions by combining OCR and NLP. Users simply upload a prescription image and the system identifies medicines, dosage, and frequency — making prescriptions accessible and easy to understand for everyone.

---

##  Features

-  Upload prescription images (photo or scan)
-  Extract and preprocess text using EasyOCR with OpenCV image enhancement
-  Auto-correct extracted text using TextBlob spell correction
-  Identify drug names, dosage, and frequency using NLP pattern matching
-  Store and retrieve full prescription history via MongoDB
-  Full-stack REST API integration (FastAPI + React)

---

##  Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React, Tailwind CSS |
| Backend | Python, FastAPI |
| Database | MongoDB |
| OCR Engine | EasyOCR + OpenCV (image preprocessing) |
| NLP | TextBlob (spell correction), Regex pattern matching, Drug list lookup |

---

##  How It Works

```
 Upload Prescription Image
        ↓
  OpenCV preprocesses image
    (grayscale → blur → adaptive threshold)
        ↓
 EasyOCR extracts raw text
        ↓
  TextBlob corrects spelling errors
        ↓
 NLP identifies:
     Drug names  (matched against drug list)
      Dosage      (regex: e.g. 500mg, 20ml)
     Frequency   (e.g. twice daily, once daily)
        ↓
  Structured data saved to MongoDB
        ↓
 User views clean prescription summary & history
```


##  Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/mediread.git
cd mediread
```

### 2. Backend Setup

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```



### 3. Frontend Setup

```bash
cd frontend
npm install
npm start
```



---

## 📡 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/analyze` | Upload image → extract & store prescription data |
| `GET` | `/prescriptions` | Retrieve all saved prescriptions |

---

##  Requirements

```
fastapi
uvicorn[standard]
python-multipart
pymongo
textblob
easyocr
opencv-python-headless
numpy
pillow
```

## 📸 Screenshots


![UI](Version%202.0/ui/mediraed%202.png)


---

##  Future Improvements

- [ ] Improve OCR accuracy for handwritten prescriptions
- [ ] Add user authentication (JWT / OAuth)
- [ ] Mobile app version (React Native)
- [ ] Train a custom NER model for better drug/dosage detection

---


 OCR Accuracy & Limitations

MediRead currently performs best with clear printed prescription images (e.g., digital prescriptions or high-quality scans).

Due to the complexity of real-world medical data, OCR accuracy may decrease for:

- Handwritten prescriptions
- Low-resolution or blurred images
- Complex layouts or unusual fonts

To improve reliability, the system applies:

- Image preprocessing using OpenCV
- Spell correction using TextBlob

This project is designed as a prototype AI system, focusing on system architecture and integration rather than production-level OCR accuracy.

---
 Author

Kasun Rashmika


---

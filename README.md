# 🧠 MediRead – AI Prescription Reader

> An AI-powered web application that extracts and structures medical information from prescription images using OCR and NLP — helping users instantly understand their prescriptions.

![React](https://img.shields.io/badge/Frontend-React-61DAFB?style=flat-square&logo=react)
![TailwindCSS](https://img.shields.io/badge/Styling-Tailwind%20CSS-06B6D4?style=flat-square&logo=tailwindcss)
![Python](https://img.shields.io/badge/Backend-Python-3776AB?style=flat-square&logo=python)
![FastAPI](https://img.shields.io/badge/API-FastAPI-009688?style=flat-square&logo=fastapi)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248?style=flat-square&logo=mongodb)
![Tesseract](https://img.shields.io/badge/OCR-Tesseract-4285F4?style=flat-square)

---

## 📌 Overview

MediRead automates the reading of medical prescriptions by combining OCR and NLP. Users simply upload a prescription image and the system identifies medicines, dosage, and frequency — making prescriptions accessible and easy to understand for everyone.

---

## ✨ Features

- 📄 Upload prescription images (photo or scan)
- 🔍 Extract text automatically using Tesseract OCR
- 🧠 Identify drug names, dosage, and frequency via NLP
- 🗂️ Store and retrieve full prescription history
- 🌐 Full-stack REST API integration (FastAPI + React)

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React, Tailwind CSS |
| Backend | Python, FastAPI |
| Database | MongoDB |
| OCR Engine | Tesseract OCR |
| AI / NLP | NLP Processing Techniques |

---

## 🔄 How It Works

```
📸 Upload Image
      ↓
🔍 Tesseract OCR extracts raw text
      ↓
🧠 NLP identifies drug names, dosage & frequency
      ↓
🗄️ Structured data saved to MongoDB
      ↓
📋 User views clean prescription summary & history
```

---

## 📂 Project Structure

```
MediRead/
│
├── frontend/          # React + Tailwind CSS UI
├── backend/           # FastAPI REST API
├── models/            # NLP / processing logic
├── utils/             # OCR processing helpers
└── README.md
```


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
> API will be available at `http://localhost:8000`

### 3. Frontend Setup
```bash
cd frontend
npm install
npm start
```
> App will be available at `http://localhost:3000`

---



## 🔮 Future Improvements

- [ ] Improve OCR accuracy for handwritten prescriptions
- [ ] Add user authentication (JWT / OAuth)
- [ ] Mobile app version (React Native)
- [ ] Cloud storage integration (AWS S3 / Firebase)
- [ ] Multi-language prescription support

---


## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

import { useState } from "react";
import "./App.css";

function App() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a prescription image first!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("http://localhost:8000/scan", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setResult(data.raw_text || "No text found");
    } catch (err) {
      console.error(err);
      alert("Error connecting to backend");
    }
  };

  return (
    <div className="App">
      <header>
        <h1>MediRead Prescription Reader</h1>
        <p>Upload prescription images and get extracted medicines</p>
      </header>

      <main>
        <input type="file" onChange={handleFileChange} accept="image/*" />
        <button onClick={handleUpload}>Scan Prescription</button>

        {result && (
          <div className="result">
            <h2>Extracted Text:</h2>
            <pre>{result}</pre>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;

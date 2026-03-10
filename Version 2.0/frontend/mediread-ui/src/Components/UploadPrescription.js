import React, { useState } from "react";

function UploadPrescription() {

  const [result, setResult] = useState(null);

  const handleUpload = async (event) => {

    const file = event.target.files[0];

    const formData = new FormData();
    formData.append("file", file);

  const response = await fetch("http://127.0.0.1:8000/analyze", {
    method: "POST",
    body: formData
  });

  //  const response = await fetch("https://localhost:8244/mediread/1.0.0/analyze", 
  //     { method: "POST", headers: { "Authorization": "Bearer xxxxxxx" }, body: formData });

    const data = await response.json();
      console.log("API RESPONSE:", data);

    setResult(data);
  };

  return (
    <div>

      <h2>Upload Prescription</h2>

      <input type="file" onChange={handleUpload} />

      {result && (
        <div>

          <h3>Extracted Text</h3>
          <p>{result.raw_text}</p>

          <h3>Structured Data</h3>

          <p><b>Drugs:</b> {result?.structured_data?.drugs?.join(", ")}</p>
        <p><b>Dosage:</b> {result?.structured_data?.dosages?.join(", ")}</p>
        <p><b>Frequency:</b> {result?.structured_data?.frequencies?.join(", ")}</p>
        </div>
      )}

    </div>
  );
}

export default UploadPrescription;
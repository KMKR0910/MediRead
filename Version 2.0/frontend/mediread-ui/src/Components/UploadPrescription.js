import React, { useState } from "react";

function UploadPrescription() {

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async (event) => {

    const file = event.target.files[0];

    const formData = new FormData();
    formData.append("file", file);

    setLoading(true);

  const response = await fetch("http://127.0.0.1:8000/analyze", {
    method: "POST",
    body: formData
  });

  //  const response = await fetch("https://localhost:8244/mediread/1.0.0/analyze", 
  //     { method: "POST", headers: { "Authorization": "Bearer xxxxxxx" }, body: formData });

    const data = await response.json();
      console.log("API RESPONSE:", data);

    setResult(data);
    setLoading(false);
  };

   return (

    <div className="bg-white p-6 rounded-xl shadow-md mb-6">

      <h2 className="text-xl font-semibold mb-4">
        Upload Prescription
      </h2>

      <input
        type="file"
        onChange={handleUpload}
        className="border p-2 rounded w-full"
      />

      {loading && (
        <p className="text-blue-500 mt-3">Analyzing prescription...</p>
      )}

      {result && (

        <div className="mt-5">

          <h3 className="font-semibold">Extracted Text</h3>
          <p className="bg-gray-100 p-3 rounded mt-2">
            {result.raw_text}
          </p>

          <h3 className="font-semibold mt-4">Detected Data</h3>

          <div className="grid grid-cols-3 gap-4 mt-2">

            <div className="bg-blue-100 p-3 rounded">
              <b>Drugs</b>
              <p>{result.structured_data.drugs.join(", ")}</p>
            </div>

            <div className="bg-green-100 p-3 rounded">
              <b>Dosage</b>
              <p>{result.structured_data.dosages.join(", ")}</p>
            </div>

            <div className="bg-yellow-100 p-3 rounded">
              <b>Frequency</b>
              <p>{result.structured_data.frequencies.join(", ")}</p>
            </div>

          </div>

        </div>

      )}

    </div>

  );
}

export default UploadPrescription;




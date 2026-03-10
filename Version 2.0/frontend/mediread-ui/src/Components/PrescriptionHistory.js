import React, { useEffect, useState } from "react";

function PrescriptionHistory() {

  const [data, setData] = useState([]);

  useEffect(() => {

    fetch("http://127.0.0.1:8000/prescriptions")
      .then(res => res.json())
      .then(data => setData(data));

  }, []);


//   useEffect(() => {

//   fetch("https://localhost:8244/mediread/1.0.0/prescriptions", {
//     headers: {
//       Authorization: "Bearer xxxxxxx"
//     }
//   })
//     .then(res => res.json())
//     .then(data => setData(data));

// }, []);
  

  return (

    <div className="bg-white p-6 rounded-xl shadow-md">

      <h2 className="text-xl font-semibold mb-4">
        Prescription History
      </h2>

      {data.length === 0 && (
        <p>No prescriptions uploaded yet.</p>
      )}

      {data.map((item, index) => (

        <div
          key={index}
          className="border p-4 rounded mb-3 bg-gray-50"
        >

          <p className="text-sm text-gray-600">
            {item.raw_text}
          </p>

          <div className="flex gap-4 mt-2 text-sm">

            <span className="text-blue-600">
              Drugs: {item.structured_data.drugs.join(", ")}
            </span>

            <span className="text-green-600">
              Dosage: {item.structured_data.dosages.join(", ")}
            </span>

            <span className="text-yellow-600">
              Frequency: {item.structured_data.frequencies.join(", ")}
            </span>

          </div>

        </div>

      ))}

    </div>

  );
}

export default PrescriptionHistory;




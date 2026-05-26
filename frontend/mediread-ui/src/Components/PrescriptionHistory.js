import React, { useEffect, useState } from "react";

function PrescriptionHistory() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

useEffect(() => {
  fetch("http://127.0.0.1:8000/prescriptions")
    .then((res) => {
      if (!res.ok) throw new Error(`Server error: ${res.status}`);
      return res.json();
    })
    .then((json) => {
      // 🔥 SORT NEWEST FIRST USING _id
      const sorted = json.sort((a, b) =>
        b._id.localeCompare(a._id)
      );

      setData(sorted);
    })
    .catch((err) => setError(err.message))
    .finally(() => setLoading(false));
}, []);

  if (loading)
    return (
      <p className="text-center text-gray-500 mt-6">
        Loading history…
      </p>
    );

  if (error)
    return (
      <p className="text-center text-red-500 mt-6">
        Error: {error}
      </p>
    );

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">
        Prescription History
      </h2>

      {data.length === 0 && (
        <p className="text-gray-500">
          No prescriptions uploaded yet.
        </p>
      )}

      {data.map((item, index) => {
        const sd = item.structured_data || {};

        return (
          <div
            key={index}
            className="border p-4 rounded mb-5 bg-gray-50"
          >
            {/* Raw text */}
            <h3 className="font-semibold">Extracted Text</h3>
            <p className="bg-gray-100 p-3 rounded mt-2 text-sm whitespace-pre-wrap">
              {item.raw_text}
            </p>

            {/* Structured Data */}
            <h3 className="font-semibold mt-4">
              Detected Data
            </h3>

            <div className="grid grid-cols-3 gap-4 mt-3">
              
              <div className="bg-blue-100 p-3 rounded">
                <b>💊 Drugs</b>
                {sd.drugs?.length ? (
                  sd.drugs.map((drug, i) => (
                    <p key={i}>{drug}</p>
                  ))
                ) : (
                  <p className="text-gray-500">None</p>
                )}
              </div>

              <div className="bg-green-100 p-3 rounded">
                <b>⚖️ Dosage</b>
                {sd.dosages?.length ? (
                  sd.dosages.map((dose, i) => (
                    <p key={i}>{dose}</p>
                  ))
                ) : (
                  <p className="text-gray-500">None</p>
                )}
              </div>

              <div className="bg-yellow-100 p-3 rounded">
                <b>🔁 Frequency</b>
                {sd.frequencies?.length ? (
                  sd.frequencies.map((freq, i) => (
                    <p key={i}>{freq}</p>
                  ))
                ) : (
                  <p className="text-gray-500">None</p>
                )}
              </div>

            </div>

            {/* Optional fields */}
            {(sd.duration?.length > 0 || sd.instructions?.length > 0) && (
              <div className="grid grid-cols-2 gap-4 mt-3">

                {sd.duration?.length > 0 && (
                  <div className="bg-purple-100 p-3 rounded">
                    <b>📅 Duration</b>
                    {sd.duration.map((d, i) => (
                      <p key={i}>{d}</p>
                    ))}
                  </div>
                )}

                {sd.instructions?.length > 0 && (
                  <div className="bg-red-100 p-3 rounded">
                    <b>⚠️ Instructions</b>
                    {sd.instructions.map((ins, i) => (
                      <p key={i}>{ins}</p>
                    ))}
                  </div>
                )}

              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default PrescriptionHistory;
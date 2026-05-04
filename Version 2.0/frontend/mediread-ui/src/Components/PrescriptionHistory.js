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
      .then((json) => setData(json))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center text-gray-500 mt-6">Loading history…</p>;
  if (error)   return <p className="text-center text-red-500 mt-6">Error: {error}</p>;

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Prescription History</h2>

      {data.length === 0 && (
        <p className="text-gray-500">No prescriptions uploaded yet.</p>
      )}

      {data.map((item, index) => {
        const sd = item.structured_data || {};
        return (
          <div key={index} className="border p-4 rounded mb-3 bg-gray-50">
            {/* Raw OCR text */}
            <p className="text-sm text-gray-600 mb-2 whitespace-pre-wrap">
              {item.raw_text}
            </p>

            <div className="flex flex-wrap gap-3 mt-2 text-sm">
              <span className="text-blue-600">
                <b>💊 Drugs:</b>{" "}
                {sd.drugs?.length ? sd.drugs.join(", ") : <i>none</i>}
              </span>

              <span className="text-green-600">
                <b>⚖️ Dosage:</b>{" "}
                {sd.dosages?.length ? sd.dosages.join(", ") : <i>none</i>}
              </span>

              <span className="text-yellow-600">
                <b>🔁 Frequency:</b>{" "}
                {sd.frequencies?.length ? sd.frequencies.join(", ") : <i>none</i>}
              </span>

              {sd.duration?.length > 0 && (
                <span className="text-purple-600">
                  <b>📅 Duration:</b> {sd.duration.join(", ")}
                </span>
              )}

              {sd.instructions?.length > 0 && (
                <span className="text-red-500">
                  <b>⚠️ Instructions:</b> {sd.instructions.join(", ")}
                </span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PrescriptionHistory;

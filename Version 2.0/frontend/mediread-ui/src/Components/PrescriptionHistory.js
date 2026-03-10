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

    <div>

      <h2>Prescription History</h2>

      {data.map((item, index) => (

        <div key={index} style={{border:"1px solid gray",margin:"10px",padding:"10px"}}>

          <p><b>Text:</b> {item.raw_text}</p>

          <p><b>Drugs:</b> {item.structured_data.drugs.join(", ")}</p>

          <p><b>Dosages:</b> {item.structured_data.dosages.join(", ")}</p>

          <p><b>Frequency:</b> {item.structured_data.frequencies.join(", ")}</p>

        </div>

      ))}

    </div>

  );
}

export default PrescriptionHistory;
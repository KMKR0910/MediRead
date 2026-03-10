import React from "react";
import UploadPrescription from "./Components/UploadPrescription";
import PrescriptionHistory from "./Components/PrescriptionHistory";

function App() {

  return (

    <div style={{padding:"30px"}}>

      <h1>MediRead – AI Prescription Reader</h1>

      <UploadPrescription />

      <hr />

      <PrescriptionHistory />

    </div>

  );
}

export default App;
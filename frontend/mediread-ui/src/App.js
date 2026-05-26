import UploadPrescription from "./Components/UploadPrescription";
import PrescriptionHistory from "./Components/PrescriptionHistory";

function App() {

  return (

    <div className="min-h-screen bg-gray-100">

      <header className="bg-blue-600 text-white p-4 shadow-md">
        <h1 className="text-2xl font-bold text-center">
          MediRead – AI Prescription Reader
        </h1>
      </header>

      <div className="max-w-4xl mx-auto p-6">

        <UploadPrescription />

        <PrescriptionHistory />

      </div>

    </div>

  );
}

export default App;
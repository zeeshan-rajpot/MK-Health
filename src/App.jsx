import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-tagsinput/react-tagsinput.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Index";
import Provider from "./Pages/Provider";
import Patient from "./Pages/Patient";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignuP/SignUp";
import Forget from "./Pages/Forget.jsx/Forget";
import ConfrimPassword from "./Pages/Forget.jsx/ConfrimPassword";

// 
import LabTest from "./Pages/Patient/Lab Test";
import LabRequest from "./Pages/Patient/Lab Test/LabRequest";
import Condition from "./Pages/Patient/Condition-Disease";
import Prescription from "./Pages/Patient/Prescription";
import RequestPrescription from "./Pages/Patient/Prescription/Request Prescription";
import ConditionForm from "./Pages/Patient/Condition-Disease/ConditionForm";

// import LabRequest from "./Pages/Lab Test/LabRequest";

function App() {
  return (
    <>
      <BrowserRouter  >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Provider" element={<Provider />} />
          <Route path="/Patient" element={<Patient />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Forget" element={<Forget />} />
          <Route path="/ConfrimPassword" element={<ConfrimPassword />} />
          <Route path="/LabTest" element={<LabTest />} />
          <Route path="/Prescription" element={<Prescription />} />
          <Route path="/Condition" element={<Condition />} />
          <Route path="/LabRequest" element={<LabRequest />} />
          <Route path="/RequestPrescription" element={<RequestPrescription />} />
          <Route path="/ConditionForm" element={<ConditionForm />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

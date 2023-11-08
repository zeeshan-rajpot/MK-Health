import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-tagsinput/react-tagsinput.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Index";
import ScrollToTop from "./ScrollToTop";
import Provider from "./Pages/Provider";
import Patient from "./Pages/Patient";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignuP/SignUp";
import CreatemainAccount from "./Pages/SignuP/CreatemainAccount";
import Forget from "./Pages/Forget.jsx/Forget";
import ConfrimPassword from "./Pages/Forget.jsx/ConfrimPassword";
import LabTest from "./Pages/Patient/Lab Test";
import LabRequest from "./Pages/Patient/Lab Test/LabRequest";
import Condition from "./Pages/Patient/Condition-Disease";
import Prescription from "./Pages/Patient/Prescription";
import RequestPrescription from "./Pages/Patient/Prescription/Request Prescription";
import ConditionForm from "./Pages/Patient/Condition-Disease/ConditionForm";
import MyCharts from "./Pages/Patient/MyCharts";
import Payment from "./Pages/Payment";
import RequestedPrescription from "./Pages/Patient/MyCharts/RequestedPrescription/INDEX.JSX";
import RxRequest from "./Pages/Provider/NewRxRequests";
import PaitentDetail from "./Pages/Provider/NewRxRequests/PaitentDetail";

import RequestedRxForm from "./Pages/Provider/NewRxRequests/RequestedRxForm";
import ReviewPrescribePage from "./Pages/Provider/NewRxRequests/ReviewPrescribePage";
import ProviderChart from "./Pages/Provider/My Chart";
import Medication from "./Pages/Patient/medication/Medication";
import MedicationFormPage from "./Pages/Patient/medication/MedicationForm/MedicationFormPage";

// import LabRequest from "./Pages/Lab Test/LabRequest";

function App() {
  return (
    <>
      <BrowserRouter  >
      <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Provider" element={<Provider />} />
          <Route path="/Patient" element={<Patient />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/CreatemainAccount" element={<CreatemainAccount />} />
          
          <Route path="/Forget" element={<Forget />} />
          <Route path="/ConfrimPassword/:otp/:email" element={<ConfrimPassword />} />
          <Route path="/LabTest" element={<LabTest />} />
          <Route path="/Prescription" element={<Prescription />} />
          <Route path="/Condition" element={<Condition />} />
          <Route path="/medication" element={<Medication />} />
          <Route path="/MedicationFormPage/:medicationName" element={<MedicationFormPage />} />
          
          <Route path="/LabRequest" element={<LabRequest />} />
          <Route path="/RequestPrescription/:medicationName" element={<RequestPrescription />} />
          <Route path="/ConditionForm/:Common" element={<ConditionForm />} />
          <Route path="/myCharts" element={<MyCharts />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/RequestedPrescription" element={<RequestedPrescription />} />
          <Route path="/RxRequest" element={<RxRequest />} />
          <Route path="/PaitentDetail" element={<PaitentDetail />} />
          <Route path="/RequestedRxForm" element={<RequestedRxForm />} />
          <Route path="/ReviewPrescribePage" element={<ReviewPrescribePage />} />
          <Route path="/ProviderChart" element={<ProviderChart />} />
          

          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import React from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { baseurl } from '../../const';
import { useNavigate } from 'react-router-dom';

const SelectOption = ({ formData }) => {
  console.log('Form Data in SelectOption:', formData);
  const navigate = useNavigate();
  const sendDataToApi = async (type) => {
    try {
      const { name, email, password } = formData;
      const response = await axios.post(`https://hkhealth.azurewebsites.net/api/auth/signup`, {
        name,
        email,
         password,
        type: type
      });

      // console.log('API Response:', response.data);

      toast.success(`${response.data.message}`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      setTimeout(() => {
        localStorage.setItem('token', response.data.token); // Save the token to local storage
        navigate(type === 'doctor' ? '/CreatemainAccount' : '/login'); // Navigate based on the account type
      }, 3000);
    } catch (error) {
      // console.error('Error:', error.response.data.message);
      toast.error(` ${error.response.data.message}`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <>
      <div className='text-center pb-5'>
        <p className='mt-5'><b>Choose Account Type </b></p>

        <button
          className='py-3  text-light border-0 rounded-5 w-50 shadow my-4'
          style={{ backgroundColor: '#FAB915' }}
          onClick={() => sendDataToApi('doctor')} // Set type to 'doctor'
        >
          Health Care Provider
        </button>
        <p className='mb-0' style={{ fontSize: '12px' }}>OR</p>
        <button
          className='py-3  border-0 rounded-5 w-50 shadow my-4'
          style={{ backgroundColor: '#fff' }}
          onClick={() => sendDataToApi('patient')} // Set type to 'patient'
        >
          Patient
        </button>
      </div>
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>


    </>
  );
}

export default SelectOption;

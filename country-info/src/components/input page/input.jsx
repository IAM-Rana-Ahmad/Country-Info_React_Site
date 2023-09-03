import React, { useState } from 'react';
import './input.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const Input = ({ setFetchedData }) => {
  const [country, setCountry] = useState('');
  const navigate = useNavigate();
  

  const handleCountryChange = (e) => {
    const updatedCountry = e.target.value; 
    setCountry(updatedCountry); 
    console.log(updatedCountry); 
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://restcountries.com/v3.1/name/${country}`);
      console.log(response.data); 
      setFetchedData(response.data);
      navigate('/table');
    } catch (error) {
      console.error('Error while fetching data:', error);
    }
  };

  return (
    <>
      <h1 className="text-center web-Name mt-5">
        EXPLORE <span className="text-warning mx-2">NATIONS</span>
      </h1>

      <div className="container p-3 mt-md-5 pt-md-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-6 bg-light p-3 shadow-lg rounded">
            <p className="text-center fs-2 title">Country Info</p>
            <p className="text-center fs-5 text-secondary title-heading">
              Search Any Country you want
            </p>
            <div className="px-4 mt-5">
              <form action="">
                <div className="mb-3">
                  <label htmlFor="countryInput" className="form-label">
                    Country Name:
                  </label>
                  <input
                    type="text"
                    id="countryInput"
                    className="form-control p-3 text-secondary"
                    onChange={handleCountryChange} 
                    aria-describedby="emailHelp"
                    placeholder="Country Name..."
                  />
                </div>
              </form>
            </div>
            <div className="d-flex justify-content-end mx-4">
              <button className="fa fs-4 next-btn fa-angle-double-right btn text-white btn-lg" onClick={fetchData}></button>
            </div>

            <p className="text-center mt-5 fs-5 text-secondary">
              Thanks For Visiting
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Input;




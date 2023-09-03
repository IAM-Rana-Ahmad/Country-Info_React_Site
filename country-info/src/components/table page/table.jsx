import React, { useState } from 'react';
import Navbar from '../navbar/navbar';
import './table.css';
import Card from '../card page/card';


const Table = ({ fetchedData }) => {
    const [selectedCountry, setSelectedCountry] = useState(null);

    const handleViewMore = (country) => {
        console.log('Selected Country:', country); 
        setSelectedCountry(country);
        
      };
    return (
        <>
            <Navbar />

            <div>
                <h1 className='text-center display-3 mt-5 fw-bold text-decoration-underline information'>INFORMATION</h1>
            </div>

            <div className="container">

                
                <div className="row d-flex justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
                    
                    <div className="col-md-10">
                        <p className='fs-4 text-danger'>Basic Info:</p>
                        <table className="table table-hover table-responsive table-sm">
                            <thead>
                                <tr>
                                    <th scope="col" className='fs-4'>#</th>
                                    <th scope="col" className='fs-4'>Common Name</th>
                                    <th scope="col" className='fs-4'>Official Name</th>
                                    <th scope="col" className='fs-4'>Region</th>
                                    <th scope="col" className='fs-4'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {fetchedData ? (

                                    fetchedData.map((item, index) => (
                                        <tr key={index}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{item.name.common}</td>
                                            <td>{item.name.official}</td>
                                            <td>
                                                {
                                                    item.region
                                                }
                                            </td>
                                            <td><button className='btn' onClick={() => handleViewMore(item)}>View More</button></td>
                                        </tr>
                                    ))
                                ) : (

                                    <tr>
                                        <td colSpan="5">Data not available. Please fetch data.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {selectedCountry && (
               <div className="container">
                 <div className="row mt-3 d-flex justify-content-center">
                    <div className="col-md-10">
                        <p className='fs-4 text-danger'>Detail Info:</p>
                        <Card country={selectedCountry} />
                    </div>
                </div>
               </div>
            )}
        </>
    );
};

export default Table;





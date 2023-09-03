import React from 'react';
import "./card.css"

const Card = ({ country }) => {

 

    return (
        <>
            <div className="card mb-3 card-bg rounded shadow-lg" style={{ maxWidth: '1000px' }}>
                <div className='d-flex justify-content-end'>
                    <button  className='btn'><p><i className="bi text-dark fs-4 bi-x-lg"></i></p></button>
                </div>
                <div className="row g-0">
                    <div className="col-md-6 px-md-5 pt-md-5">
                        <img src={country.flags.png} className="img-fluid rounded-start" alt="Country Flag" />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <h5 className="card-title fs-2 web-Name">{country.name.common}</h5>
                            <p className="card-text fs-5 mt-5">Official Name: {country.name.official}</p>
                            <p className='fs-5'>Capital: {country.capital}</p>
                            <p className='fs-5'> Region: {country.region}</p>
                            <p className='fs-5'>Sub Region: {country.subregion}</p>
                            <p className='fs-5'>Population: {country.population}</p>
                            <p className='fs-5'>Area: {country.area}</p>

                            <div className=''>
                                <p className='fs-5'>Borders:</p>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">{country.borders[0]}</li>
                                    <li className="list-group-item">{country.borders[1]}</li>
                                    <li className="list-group-item">{country.borders[2]}</li>
                                    <li className="list-group-item">{country.borders[3]}</li>
                                    <li className="list-group-item">{country.borders[4]}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;





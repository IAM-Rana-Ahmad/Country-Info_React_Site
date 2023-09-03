import React, { useEffect } from 'react';
import axios from 'axios';

const Api = () => {
    const countryName = "China";

    useEffect(() => {
        axios.get(`https://restcountries.com/v3.1/name/${countryName}`)
            .then((res) => {
                console.log(res.data);
            })
            .catch((error) => {
                console.error("Error fetching country data:", error);
            });
    }, []); 

    return (
        <div>
            
        </div>
    );
}

export default Api;


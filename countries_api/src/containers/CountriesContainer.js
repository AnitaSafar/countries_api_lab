import React, { useEffect, useState } from "react";
import CountriesList from "../components/CountriesList";
import TotalPopulation from "../components/TotalPopulation";


const CountriesContainer = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);

    useEffect(() => {
        getCountries();
    }, [])

    const onCountryClick = function(country){
        setSelectedCountry(country);
    }

    const getCountries = function() {
        fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(countries => setCountries(countries))
    }
    

    return(
        <>
        <CountriesList onCoutryClick={onCountryClick} countries={countries}/>
        {/* {selectedCountry ?<CountryDetail country={selectedCountry}/> : null} */}
        {/* <TotalPopulation countries={countries}/> */}
        </>
    );
};

export default CountriesContainer;
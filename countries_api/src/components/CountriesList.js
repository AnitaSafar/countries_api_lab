import React from "react";
import ListItem from "./ListItem";

const CountriesList = ({countries}) => {

    const countriesItems = countries.map((country, index) => {
        return <ListItem country={country} key={index}/>
    });

    return(
        <div>
            <ul>
                {countriesItems}
            </ul>
        </div>
    )
}

export default CountriesList;
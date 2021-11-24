import React from "react";

const ListItem = ({country}) => {
    const handleClick = function() {
        // console.log(`Clicked on ${country}`)
    }

    return(
    <>
    <li onClick={handleClick}>{country.name.official}</li>
    <li>{country.population}</li>
    </>
    )

};

export default ListItem;
import React from 'react';

const CountryFlag = props => (
        <img className="countryLogo" src={props.country.flag} alt="country" title={props.country.name}/>
);

export default CountryFlag;
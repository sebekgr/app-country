import React from 'react';
import {Link} from 'react-router-dom';
import CountryFlag from './flag.component';


const CountryFLagList = props => (
    <div className="flagList">
        {props.countries.map(country => {
            return (
                <div className="singleCountry" key={country.numericCode}>
                    <Link to={`/country/${country.numericCode}`}>
                        <CountryFlag country={country} />
                    </Link>
                    <p className="countryName">{country.name}</p>
                    <button className="deleteBtn" onClick={props.deleteCountry.bind(null, country.numericCode)}>DELETE</button>
                </div>
            );
        })}
    </div>
);

export default CountryFLagList;

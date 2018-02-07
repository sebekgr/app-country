import React from 'react';

const CountryDetails = (props) => {
    return(
    <div className="detailsFlagBox">
        <div className="flagImgBox">
            <img className="flagImg" src={props.country.flag} alt={props.country.name}/>
        </div>
        <div className="flagInfoBox">
            <ul className="infoList">
                <li className="infoDetail">
                    <label className="label">Name</label>
                    <span>{props.country.name}</span>
                </li>
                <li className="infoDetail">
                    <label className="label">Region</label>
                    <span>{props.country.region}</span>
                </li>
                <li className="infoDetail">
                    <label className="label">Native Name</label>
                    <span>{props.country.nativeName}</span>
                </li>
                <li className="infoDetail">
                    <label className="label">Currencies</label>
                    <span>{props.country.currencies[0].name}</span>
                </li>
            </ul>
        </div>

    </div>
    );
};

export default CountryDetails;
import React from 'react';

const CountryDetails = (props) => {

    

    return(
    <div className="detailsFlagBox">
        <img className="flagImg" src={props.country.flag} alt={props.country.name}/>
        <div className="flagInfoBox">
            <ul className="infoList">
                <li className="infoDetail">
                    <div className="infoWrapper">
                        <label className="label">Name</label>
                        <span>{props.country.name}</span>
                    </div>
                </li>
                <li className="infoDetail">
                    <div className="infoWrapper">
                        <label className="label">Region</label>
                        <span>{props.country.region}</span>
                    </div>
                </li>
                <li className="infoDetail">
                    <div className="infoWrapper">
                        <label className="label">Capital</label>
                        <span>{props.country.capital}</span>
                    </div>
                </li>
                <li className="infoDetail">
                    <div className="infoWrapper">
                        <label className="label">Subregion</label>
                        <span>{props.country.subregion}</span>
                    </div>
                </li>
                <li className="infoDetail">
                    <div className="infoWrapper">
                        <label className="label">latitude / longitude</label>
                        <span>{props.country.latlng[0]} / {props.country.latlng[1]}</span>
                    </div>
                </li>
                <li className="infoDetail">
                    <div className="infoWrapper">
                        <label className="label">Population</label>
                        <span>{props.country.population}</span>
                    </div>
                </li>
                <li className="infoDetail">
                    <div className="infoWrapper">
                        <label className="label">Calling code</label>
                        <span>+ {props.country.callingCodes}</span>
                    </div>
                </li>
                <li className="infoDetail">
                    <div className="infoWrapper">
                        <label className="label">Timezone</label>
                        <span>{props.country.timezones.join(" / ")}</span>
                    </div>
                </li>
                <li className="infoDetail">
                    <div className="infoWrapper">
                        <label className="label">Borders with </label>
                        <span>{props.country.borders.join(" / ")}</span>
                    </div>
                </li>
                <li className="infoDetail">
                <label className="label">Currencies</label>
                    <ul className="subInfoList">
                        <li className="subInfoDetail">
                            <div className="infoWrapper">
                                <label className="label">Code</label>
                                <span>{props.country.currencies[0].code}</span>
                            </div>
                        </li>
                        <li className="subInfoDetail">
                            <div className="infoWrapper">
                                <label className="label">Name</label>
                                <span>{props.country.currencies[0].name}</span>
                            </div>
                        </li>
                        <li className="subInfoDetail">
                            <div className="infoWrapper">
                                <label className="label">Symbol</label>
                                <span>{props.country.currencies[0].symbol}</span>
                            </div>
                        </li>
                    </ul>
                </li>
                <li className="infoDetail">
                <label className="label">Languages</label>
                    <ul className="subInfoList">
                        <li className="subInfoDetail">
                            <div className="infoWrapper">
                                <label className="label">Name</label>
                                <span>{props.country.languages[0].name}</span>
                            </div>
                        </li>
                        <li className="subInfoDetail">
                            <div className="infoWrapper">
                                <label className="label">Native name</label>
                                <span>{props.country.languages[0].nativeName}</span>
                            </div>
                        </li>
                    </ul>
                </li>

            </ul>
        </div>

    </div>
    );
};

export default CountryDetails;
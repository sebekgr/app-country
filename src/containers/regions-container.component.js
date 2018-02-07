import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setRegion, deleteCountry} from '../actions/actions-countries';
import CountryFlagList from '../presentational/flag-list.component';

class RegionsContainer extends Component {


    chooseRegion(e) {
        this.props.dispatch(setRegion(e.target.value));
    }

    deleteCountry(numericCode) {
        this.props.dispatch(deleteCountry(numericCode));
    }

    componentDidMount() {
        this.props.dispatch(setRegion('Asia'));
    }

    render() {
        return(
                    [<div className="selectBox"><select className="selectRegionInput" key={1} onChange={e => this.chooseRegion(e)}>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Africa">Africa</option>
                        <option value="Oceania">Oceania</option>
                        <option value="Americas">Americas</option>
                        <option value="Polar">Polar</option>
                    </select></div>,
                    <CountryFlagList key={2} countries={this.props.visibleCountries} deleteCountry={this.deleteCountry.bind(this)} />]
        );
    }
}

const mapStateToProps = store => {
    return {
        visibleCountries: store.countriesReducer.visibleCountries
    };
};

export default connect(mapStateToProps)(RegionsContainer);
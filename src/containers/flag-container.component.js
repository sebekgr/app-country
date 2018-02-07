import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getCountries, searchCountries, deleteCountry} from '../actions/actions-countries';
import CountryFLagList from '../presentational/flag-list.component';


class CountryFlagContainer extends Component {

    componentDidMount() {
        this.props.dispatch(getCountries());
        this.props.dispatch(searchCountries(''));
    }

    search(e) {
        this.props.dispatch(searchCountries(e.target.value));
    }

    deleteCountry(numericCode) {
        this.props.dispatch(deleteCountry(numericCode));
    }

    render() {
        return (
            <div className="countryFlagContainer">
                <div className="searchBox">
                    <input type="text" className="searchInput" onChange={this.search.bind(this)} placeholder="Search..."/>
                </div>
                <CountryFLagList countries={this.props.visibleCountries} deleteCountry={this.deleteCountry.bind(this)}/>
            </div>
        );
    }
}

const mapStateToProps = store => {
    return {
        countries: store.countriesReducer.countries,
        visibleCountries: store.countriesReducer.visibleCountries
    };
};

export default connect(mapStateToProps)(CountryFlagContainer);
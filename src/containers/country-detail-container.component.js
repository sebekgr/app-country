import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getCountry} from '../actions/actions-countries';
import CountryDetails from '../presentational/country-details.component';

class CountryDetailsContainer extends Component {

    componentDidMount() {
        this.props.dispatch(getCountry(this.props.match.params.numericCode));
    }

    render() {
        if (!this.props.selectedCountry.name) return <p>Loading ...</p>
        return (
            <CountryDetails country={this.props.selectedCountry} />
        );
    }
}

const mapStateToProps = store => {
    return {
        selectedCountry: store.countriesReducer.selectedCountry
    };
};

export default connect(mapStateToProps)(CountryDetailsContainer);
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getCountries, searchCountries, deleteCountry, getPagination, setCurrentPage, setPerPage} from '../actions/actions-countries';
import CountryFLagList from '../presentational/flag-list.component';
import Pagination from './pagination-container';


class CountryFlagContainer extends Component {

    componentDidMount() {

        this.props.dispatch(getCountries());
        this.props.dispatch(getPagination());
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
                <Pagination />
                <CountryFLagList countries={this.props.paginationData} deleteCountry={this.deleteCountry.bind(this)}/>
            </div>
        );
    }
}

const mapStateToProps = store => {
    return {
        visibleCountries: store.countriesReducer.visibleCountries,
        paginationData: store.countriesReducer.paginationData,
        perPage: store.countriesReducer.perPage,
        currentPage: store.countriesReducer.currentPage
    };
};

export default connect(mapStateToProps)(CountryFlagContainer);
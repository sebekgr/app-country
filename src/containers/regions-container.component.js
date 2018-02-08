import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setRegion, deleteCountry, getPagination,setCurrentPage, setPerPage} from '../actions/actions-countries';
import CountryFlagList from '../presentational/flag-list.component';
import Pagination from './pagination-container';

class RegionsContainer extends Component {


    chooseRegion(e) {
        this.props.dispatch(setRegion(e.target.value));
        this.props.dispatch(setCurrentPage(Number("1")));
        this.props.dispatch(setPerPage(Number("10")));
        this.props.dispatch(getPagination());
    }

    deleteCountry(numericCode) {
        this.props.dispatch(deleteCountry(numericCode));
    }

    componentDidMount() {
        this.props.dispatch(setRegion('Asia'));
        this.props.dispatch(setCurrentPage(Number("1")));
        this.props.dispatch(setPerPage(Number("10")));
        this.props.dispatch(getPagination());
    }

    render() {
        return(<div>
                    <div className="selectBox"><select className="selectRegionInput" onChange={e => this.chooseRegion(e)}>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Africa">Africa</option>
                        <option value="Oceania">Oceania</option>
                        <option value="Americas">Americas</option>
                        <option value="Polar">Polar</option>
                    </select>
                    </div>
                    <Pagination />
                    <CountryFlagList countries={this.props.paginationData} deleteCountry={this.deleteCountry.bind(this)} />
                </div>
        );
    }
}

const mapStateToProps = store => {
    return {
        visibleCountries: store.countriesReducer.visibleCountries,
        paginationData: store.countriesReducer.paginationData
    };
};

export default connect(mapStateToProps)(RegionsContainer);
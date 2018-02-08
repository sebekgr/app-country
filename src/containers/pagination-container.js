import React, { Component } from 'react';
import {setPerPage, setCurrentPage, getPagination} from '../actions/actions-countries';
import { connect } from 'react-redux';


class Pagination extends Component {

    perPage(nr) {
        this.props.dispatch(setCurrentPage(Number("1")));
        this.props.dispatch(setPerPage(Number(nr)));
        this.props.dispatch(getPagination());
    }

    getCurrentPage(nr) {
        this.props.dispatch(setCurrentPage(Number(nr)));
        this.props.dispatch(getPagination());
    }

    render() {
        const {perPage, visibleCountries} = this.props;

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(visibleCountries.length / perPage); i++) {
        pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (

                <button className={this.props.currentPage === number ? 'paginationBtn active' : 'paginationBtn'} key={number} id={number} onClick={() => this.getCurrentPage(number)} >
                {number}
                </button>
            );
        });

     return(
         <div className="paginationBox">
               {renderPageNumbers}
               <div className="perPageBox">
               Per page: {this.props.perPage} &nbsp;
                    <button id="10" className={this.props.perPage === 10 ? 'paginationBtn active' : 'paginationBtn'} onClick={() => this.perPage("10")} > 10 </button>
                    <button id="20" className={this.props.perPage === 20 ? 'paginationBtn active' : 'paginationBtn'} onClick={() => this.perPage("20")} > 20 </button>
                    <button id="30" className={this.props.perPage === 30 ? 'paginationBtn active' : 'paginationBtn'} onClick={() => this.perPage("30")} > 30 </button>
                </div>
         </div>
     );
 }
 
}

const mapStateToProps = store => {
    return {
        perPage: store.countriesReducer.perPage,
        currentPage: store.countriesReducer.currentPage,
        visibleCountries: store.countriesReducer.visibleCountries,
    }
}

export default connect(mapStateToProps)(Pagination);
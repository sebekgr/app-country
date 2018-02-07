import {GET_COUNTRIES, GET_COUNTRY, SEARCH_COUNTRIES, DELETE_COUNTRY, SET_REGION} from '../actions/actions-countries';
import countriesData from '../data/countries.json';

const initialState = {
    countries: countriesData,
    selectedCountry: {},
    visibleCountries: []
};

const countriesReducer = (state = initialState, action) => {

    switch(action.type) {

        case GET_COUNTRIES:
            return Object.assign({}, state, {countries: state.countries})

        case GET_COUNTRY:
            const selectedCountry = state.countries.find(country => country.numericCode === action.numericCode);
            return Object.assign({}, state, {selectedCountry});

        case SEARCH_COUNTRIES:
            const foundCountries = state.countries.filter(country => country.name.toLowerCase().includes(action.searchText.toLowerCase()));
            return Object.assign({}, state, {visibleCountries: foundCountries});

        case DELETE_COUNTRY:
            const notDeletedCountries = state.countries.filter(country => country.numericCode !== action.numericCode);
            const notDeletedVisibleCountries = state.visibleCountries.filter(country => country.numericCode !== action.numericCode);
            return Object.assign({}, state, {countries: notDeletedCountries, visibleCountries: notDeletedVisibleCountries});
        
        case SET_REGION:
            const regionCountries = state.countries.filter(country => country.region === action.name);
            return Object.assign({}, state, {visibleCountries: regionCountries});

        default:
         return state;
    }


}

export default countriesReducer;
import {GET_PAGINATION, GET_COUNTRIES, GET_COUNTRY, SEARCH_COUNTRIES, DELETE_COUNTRY, SET_REGION, SET_PER_PAGE, SET_CURRENT_PAGE} from '../actions/actions-countries';
import countriesData from '../data/countries.json';

const initialState = {
    countries: countriesData,
    selectedCountry: {},
    visibleCountries: [],
    paginationData: [],
    perPage: 10,
    currentPage: 1
};

const countriesReducer = (state = initialState, action) => {

    switch(action.type) {

        case GET_COUNTRIES:
            return Object.assign({}, state, {visibleCountries: state.countries});

        case GET_PAGINATION:
            const { currentPage, perPage,  visibleCountries} = state;
            const num = (currentPage - 1) * perPage;
            const forDisplay = visibleCountries.slice(num, num + perPage);
            console.log(forDisplay);
            return Object.assign({}, state, {paginationData: forDisplay});

        case SET_PER_PAGE:
            return Object.assign({}, state, {perPage: action.nr});

        case SET_CURRENT_PAGE:
            return Object.assign({}, state, {currentPage: action.nr})

        case GET_COUNTRY:
            const selectedCountry = state.countries.find(country => country.numericCode === action.numericCode);
            return Object.assign({}, state, {selectedCountry});

        case SEARCH_COUNTRIES:
            const foundCountries = state.countries.filter(country => country.name.toLowerCase().includes(action.searchText.toLowerCase()));
            return Object.assign({}, state, {paginationData: foundCountries});

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
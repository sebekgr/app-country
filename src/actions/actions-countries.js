export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_COUNTRY = 'GET_COUNTRY';
export const DELETE_COUNTRY = 'DELETE_COUNTRY';
export const SEARCH_COUNTRIES = 'SEARCH_COUNTRIES';
export const SET_REGION = 'SET_REGION';


export function getCountries() {
    return {
        type: GET_COUNTRIES
    }
}

export function deleteCountry(numericCode) {
    return {
        type: DELETE_COUNTRY,
        numericCode
    }
}

export function getCountry(numericCode) {
    return {
        type: GET_COUNTRY,
        numericCode
    }
}

export function searchCountries(searchText) {
    return {
        type: SEARCH_COUNTRIES,
        searchText
    }
}

export function setRegion(name) {
    return {
        type: SET_REGION,
        name
    }
}



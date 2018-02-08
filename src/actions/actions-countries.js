export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_COUNTRY = 'GET_COUNTRY';
export const DELETE_COUNTRY = 'DELETE_COUNTRY';
export const SEARCH_COUNTRIES = 'SEARCH_COUNTRIES';
export const SET_REGION = 'SET_REGION';
export const SET_PER_PAGE = 'SET_PER_PAGE';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const GET_PAGINATION = 'GET_PAGINATION';


export function setPerPage(nr) {
    return {
        type: SET_PER_PAGE,
        nr
    }
}

export function setCurrentPage(nr) {
    return {
        type: SET_CURRENT_PAGE,
        nr
    }
}

export function getPagination() {
    return {
        type: GET_PAGINATION
    }
}


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



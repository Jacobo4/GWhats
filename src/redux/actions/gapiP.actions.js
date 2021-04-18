import axios from 'axios';

export const gapiUser = () => {

    return async (dispatch) => {
        dispatch(gapiRequest());
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                // response.data is the users
                const users = response.data
                dispatch(gapiSuccess(users))
            })
            .catch(error => {
                // error.message is the error message
                dispatch(gapiFailure(error.message))
            })
    }
}


export const gapiRequest = () => {
    return {
        type: 'GAPI_BASIC_INFO_REQUEST',
    }
}

export const gapiSuccess = gapiInfo => {
    return {
        type: 'GAPI_BASIC_INFO_SUCCESS',
        payload: gapiInfo
    }
}

export const gapiFailure = error => {
    return {
        type: 'GAPI_BASIC_INFO_FAILURE',
        payload: error,
    }
}
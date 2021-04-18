const initialState = {
    loading: false,
    user: [],
    error: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case 'GAPI_BASIC_INFO_REQUEST':
            return {...state, loading: true};

        case 'GAPI_BASIC_INFO_SUCCESS':
            return {...state, loading: false, user: action.payload, error: ''};

        case 'GAPI_BASIC_INFO_FAILURE':
            return {...state, loading: false, user: [], error: action.payload};
        default:
            return state;
    }

}

export default reducer;
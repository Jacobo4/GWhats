const initialState = {
    subjects: [],
    loading: null,
    error: ''
};

const reducer = (state = initialState, {type, payload}) => {
    switch (type) {

        case 'GET_SUBJECTS_REQUEST':
            return {...state, loading: true};
        case 'GET_SUBJECTS_SUCCESS':
            return {...state, loading: false, subjects: [...state.subjects,payload]};
        case 'GET_SUBJECTS_FAILURE':
            return {...state, loading: false, error: payload};
        default:
            return state;
    }

}

export default reducer;
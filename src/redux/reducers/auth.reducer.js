const initialState = {
    isSignedIn: null,
};

const reducer = (state = initialState, {type, payload}) => {
    switch (type) {

        case 'SIGN_IN':
            return {...state, isSignedIn: true };

        case 'SIGN_OUT':
            return {...state, isSignedIn: false };

        default:
            return state;
    }

}

export default reducer;
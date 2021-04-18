const INITIAL_STATE = {
    isSignedIn: null
};

const reducer = (state = INITIAL_STATE, {type}) => {
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
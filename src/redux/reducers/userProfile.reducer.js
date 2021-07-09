const initialState = {
    fullName: null,
    name: null,
    lastName: null,
    image: null,
    email: null,
};

const reducer = (state = initialState, {type, ...profile}) => {
    switch (type) {

        case 'GET_USER_PROFILE':
            return {
                ...state,
                fullName: profile.fullName,
                name: profile.name,
                lastName: profile.lastName,
                image: profile.image,
                email: profile.email,
            };

        default:
            return state;
    }

}

export default reducer;
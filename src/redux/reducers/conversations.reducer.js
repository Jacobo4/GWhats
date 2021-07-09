const initialState = {
    current: {
        messages: [],
        contactName: ""
    },
};

const reducer = (state = initialState, {type, payload}) => {
    switch (type) {

        case 'SET_CURRENT_CONVERSATION':
            return {
                current: {...state.current, messages: payload.messages}
            };

        case 'SET_CURRENT_CONTACT':
            return {
                current: {...state.current, contactName: payload.contactName}
            };


        default:
            return state;
    }

}

export default reducer;
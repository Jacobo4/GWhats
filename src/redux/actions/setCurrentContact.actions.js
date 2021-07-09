export const setCurrentContact = (contactName) => {
    return {
        type: 'SET_CURRENT_CONTACT',
        payload: {
            contactName: contactName,
        }
    }
}
export const setCurrentConversation = (messages) => {
    return {
        type: 'SET_CURRENT_CONVERSATION',
        payload: {
            messages: messages,
        }
    }
}
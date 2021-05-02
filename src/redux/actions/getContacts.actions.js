export const getContacts = () => {

    return async (dispatch) => {
        dispatch(getContactsRequest());

        const messagesResult = await window.gapi.client.gmail.users.messages.list({
            'userId': 'me'
        }).then(r => r)//Machetazo porque ni idea porque no dejar hacer el catch directamente
            .catch(err => dispatch(getContactsFailure(err)));

        const messages = messagesResult.result.messages;

        const messagesDetails = await Promise.all(
            messages.map(async message => {
                const messageResult = await window.gapi.client.gmail.users.messages.get({
                    'userId': 'me',
                    'id': message.id
                }).then(r => r)//Machetazo porque ni idea porque no dejar hacer el catch directamente
                    .catch(err => dispatch(getContactsFailure(err)));

                return messageResult.result;
            })
        );

        const contacts = messagesDetails.map(messagesDetails => {
            const contact = messagesDetails.payload.headers.filter(header => header.name === "From")[0].value;

            console.log(contact)
            return {
                name: contact.includes('<') ? contact.substr(0, contact.indexOf('<')) : contact,
                email: contact.includes('<') ? contact.substring(contact.indexOf('<') + 1, contact.indexOf('>')) : contact,
            };
        });

        dispatch(getContactsSuccess(contacts));

    }
}


export const getContactsRequest = () => {
    return {
        type: 'GET_CONTACTS_REQUEST',
    }
}

export const getContactsSuccess = messages => {
    return {
        type: 'GET_CONTACTS_SUCCESS',
        payload: messages
    }
}

export const getContactsFailure = error => {
    return {
        type: 'GET_CONTACTS_FAILURE',
        payload: error,
    }
}
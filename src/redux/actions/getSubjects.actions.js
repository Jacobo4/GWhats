import parseMessage from 'gmail-api-parse-message';

export const getSubjects = (email) => {

    return async (dispatch, getState) => {

        dispatch(getSubjectsRequest());

        //Get all the messages from inbox (only message ids and some other info)
        const threadsResults = await window.gapi.client.gmail.users.threads.list({
            'userId': 'me',
            // 'q': `in:anywhere !in:chats from:(${email}))`
            'q': `in:anywhere !in:chats from:(${email}))`
            }).then(r => r)//Machetazo porque ni idea porque no dejar hacer el catch directamente
            .catch(err => dispatch(getSubjectsFailure(err)));

        const threads = threadsResults.result.threads;
        // const threadsSnippet = threads.map(subject => subject.snippet);

        // With each message id, make we look for their details (message,from who, date, etc.)
        const threadsDetails = await Promise.all(
            threads.map(async subject => {
                const subjectResult = await window.gapi.client.gmail.users.threads.get({
                    'userId': 'me',
                    'id': subject.id
                }).then(r => r)//Machetazo porque ni idea porque no dejar hacer el catch directamente
                    .catch(err => dispatch(getSubjectsFailure(err)));
                // return parseMessage(subjectResult.result);
                return subjectResult.result;
            })
        );

        //With every message, we parse the messages
        let threadMessages = threadsDetails.map(threadDetail => {
            const threadMessages = threadDetail.messages;
            return threadMessages.map(message => parseMessage(message));
        });

        dispatch(getSubjectsSuccess({email: email, data: threadMessages}));

    }
}


export const getSubjectsRequest = () => {
    return {
        type: 'GET_SUBJECTS_REQUEST',
    }
}

export const getSubjectsSuccess = messages => {
    return {
        type: 'GET_SUBJECTS_SUCCESS',
        payload: messages
    }
}

export const getSubjectsFailure = error => {
    return {
        type: 'GET_SUBJECTS_FAILURE',
        payload: error,
    }
}
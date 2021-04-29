export const getUserProfile = () => {

    const user = window.gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile();

    return {
        type: 'GET_USER_PROFILE',
        payload: "From auth instance (login) gets the user basic details",
        fullName: user.getName(),
        name: user.getGivenName(),
        lastName: user.getFamilyName(),
        image: user.getImageUrl(),
        email: user.getEmail(),
    }
}

// export const getUserProfile = () => {
//
//     return async (dispatch) => {
//         dispatch(getUserProfileRequest());
//
//         window.gapi.client.gmail.users.labels.list({
//             'userId': 'me'
//         }).then(function (response) {
//             var labels = response.result.labels;
//             dispatch(getUserProfileSuccess(labels))
//
//         }).catch((error) => {
//             dispatch(error)
//         });
//     }
// }
//
//
// export const getUserProfileRequest = () => {
//     return {
//         type: 'GET_USER_PROFILE_REQUEST',
//     }
// }
//
// export const getUserProfileSuccess = gapiInfo => {
//     return {
//         type: 'GET_USER_PROFILE_SUCCESS',
//         payload: gapiInfo
//     }
// }
//
// export const getUserProfileFailure = error => {
//     return {
//         type: 'GET_USER_PROFILE_FAILURE',
//         payload: error,
//     }
// }
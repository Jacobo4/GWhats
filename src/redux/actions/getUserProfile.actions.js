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

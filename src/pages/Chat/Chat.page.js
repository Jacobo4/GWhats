import React, {Component} from "react";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/actions/getUserProfile.actions";


class ChatPage extends Component {
    componentDidMount() {
        this.props.fetchUserProfile();
    }

    render() {

        // const users = this.props.userData.map(user =>{
        //     return <li key={user.id}>{user.name}</li>
        // })
        return (
            <div>
                {/*`${this.props.userData}`*/}
            </div>
        );

    }
}

    const mapStateToProps = state => {
    return {
        userProfile: state.user.profile
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUserProfile: () => dispatch(getUserProfile())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChatPage)

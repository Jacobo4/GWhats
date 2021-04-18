import React, {Component} from "react";
import {connect} from "react-redux";
import {gapiUser} from "../../redux/actions/gapiP.actions";


class ChatPage extends Component {
    componentDidMount() {
        this.props.fetchUsers();
    }


    render() {
        const users = this.props.userData.map(user =>{
            return <li key={user.id}>{user.name}</li>
        })
        return (
            <div>
                {users}
            </div>
        );

    }
}

    const mapStateToProps = state => {
    return {
        userData: state.gapiP.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(gapiUser())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChatPage)

import React, {Component} from "react";
import {connect} from "react-redux";
import {getSubjects} from "../../redux/actions/getSubjects.actions";
import './ContactItem.scss';
import defaultThumnail from '../../assets/images/defaultUser.svg';

class ContactItem extends Component {

    showSubjects = () =>{
        this.props.fetchSubjects(this.props.email);
    }

    render() {
        const {name, email, thumbnail = defaultThumnail} = this.props;

        return (
            <li className="ContactItem"  onClick={this.showSubjects}>
                <img src={thumbnail} className="ContactItem__thumbnail" alt={name + " thumbnail"}/>
                <div className="ContactItem-info">
                    <h5 className="ContactItem__name">{name}</h5>
                    <h6 className="ContactItem__email">{email}</h6>
                </div>
            </li>
        );
    }
}

const mapStateToProps = state => {
    return {
        userSubjects: state.subjects,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchSubjects: (email) => dispatch(getSubjects(email)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactItem)


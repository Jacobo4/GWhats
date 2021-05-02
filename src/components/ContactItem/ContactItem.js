import {Component} from "react";
import './ContactItem.scss';
import React from "react";
import defaultThumnail from '../../assets/images/defaultUser.svg';

class ContactItem extends Component {
    render() {
        const {name, email, thumbnail = defaultThumnail} = this.props;

        return (
            <li className="ContactItem">
                <img src={thumbnail} className="ContactItem__thumbnail" alt={name + " thumbnail"}/>
                <div className="ContactItem-info">
                    <h5 className="ContactItem__name">{name}</h5>
                    <h6 className="ContactItem__email">{email}</h6>
                </div>
            </li>
        );
    }
}


export default ContactItem;


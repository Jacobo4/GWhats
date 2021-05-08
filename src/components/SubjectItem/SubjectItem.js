import {Component} from "react";
import './SubjectItem.scss';
import React from "react";

class SubjectItem extends Component {

    render() {
        const {name, messagePreview} = this.props;
        return (
            <li className="SubjectItem">
                <h5 className="SubjectItem__name">{name}</h5>
                <h6 className="SubjectItem__messagePreview">{messagePreview}</h6>
            </li>
        );
    }
}


export default SubjectItem;


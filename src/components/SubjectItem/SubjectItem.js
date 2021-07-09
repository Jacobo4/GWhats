import React, {Component} from "react";
import {connect} from "react-redux";
import './SubjectItem.scss';
import {setCurrentConversation} from "../../redux/actions/setCurrentConversation.actions";

class SubjectItem extends Component {

    showCurrentConversation = (messages) => {
        this.props.setCurrentConversation(messages);
    }

    render() {
        const {showCurrentConversation} = this;
        const {name, messagePreview, messages} = this.props;

        return (
            <li className="SubjectItem" onClick={() => showCurrentConversation(messages)}>
                <h5 className="SubjectItem__name">{name}</h5>
                <h6 className="SubjectItem__messagePreview">{messagePreview}</h6>
            </li>
        );
    }
}


const mapDispatchToProps = dispatch => {
    return {
        setCurrentConversation: (messages) => dispatch(setCurrentConversation(messages)),
    }
}

export default connect(
    null,
    mapDispatchToProps
)(SubjectItem);

// export default SubjectItem;


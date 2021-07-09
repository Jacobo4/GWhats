import React, {Component} from "react";
import './MessageItem.scss';
import {ReactComponent as MessageArrow} from "../../assets/images/messageArrow.svg";
import DOMPurify from "dompurify";


class MessageItem extends Component {
    
    render() {
        const {body,date,from} = this.props;

        return (

            <li className={`MessageItem MessageItem--${from === "me"? "fromMe": "fromThem"}`}  onClick={this.showSubjects}>
                <div className={`MessageItem__arrow MessageItem__arrow--${from === "me"? "right": "left"}`}>
                    <MessageArrow/>
                </div>
               <div className="MessageItem__body" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(body)}}/>
               <div className="MessageItem__date">{date}</div>
            </li>
        );
    }
}

export default MessageItem;


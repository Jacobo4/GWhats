import React, {Component} from "react";
import './Loader.scss';

class Loader extends Component {
    render() {
        const {show = true} = this.props;
        if (show) {
            return (<div className="spinner">
                <svg className="spinner-wrapper" width="65px" height="65px"
                     viewBox="0 0 52 52">
                    <circle className="path" cx="26px" cy="26px" r="20px" fill="none" strokeWidth="4px"/>
                </svg>
            </div>);
        } else {
            return (<div></div>);
        }

    }
}


export default Loader;

import {Component} from "react";
import './Header.css';
import React from "react";
import GoogleAuth from "../../Components/Aux/GoogleAuth";

class Header extends Component {

    render() {
        return (
            <div>
                <GoogleAuth/>
            </div>
        );
    }
}


export default Header;


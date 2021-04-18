import {Component} from "react";
import './Header.layout.css';
import React from "react";
import GoogleAuth from "../../components/Aux/GoogleAuth";

class Header extends Component {

    render() {
        return (
            <header>
                <h1>Gwhats</h1>
                <GoogleAuth/>
            </header>
        );
    }
}


export default Header;


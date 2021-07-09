import {Component} from "react";
import './Header.layout.scss';
import React from "react";
import GoogleAuth from "../../components/Auxiliar/GoogleAuthBtn";

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


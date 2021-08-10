import {Component} from "react";
import './Footer.layout.scss';
import React from "react";

class Footer extends Component {

    render() {
        return (
            <footer>

                    <div className="index">
                        <div className="index-nav">
                            <div className="index__title">GWhats</div>
                            <ul>
                                <li><a href="/">Why</a></li>
                                <li><a href="/">Features</a></li>
                                <li><a href="/">Let's start</a></li>
                            </ul>
                        </div>
                        {/*<div className="index-about">*/}
                        {/*    <div className="index__title">About Us</div>*/}

                        {/*</div>*/}
                        <div className="index-download">
                            <div className="index__title">Download</div>
                            <ul>
                                <li>

                                    <a href="https://github.com/Jacobo4/GWhats">Git Hub</a>
                                </li>
                            </ul>
                        </div>
                        <div className="contact-us">
                            <div className="index__title">Contact Us</div>
                            <ul>
                                <li><a href="https://portfolio-e14da.web.app/">Porfolio</a></li>
                            </ul>

                        </div>
                    </div>
                    <div className="license">
                       <p> 2021 © GWhats</p>
                    </div>
                </footer>
        );
    }
}


export default Footer;


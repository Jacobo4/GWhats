import React, {Component} from "react";
import './Home.scss';

import GoogleAuth from "../../components/Aux/GoogleAuthBtn";
import gmailIcon from "../../assets/images/gmail-icon.svg";
import whatsappIcon from "../../assets/images/whatsapp-icon.svg";


class HomePage extends Component {
    render() {
        return (
            <div className="Home">
                <div className="hero">
                    <div className="hero-title-wrapper">
                        <h1 className="hero__title">Un buen título</h1>

                        <p className="hero__description">Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                            1500s, when an unknown printer took a galley of type and scrambled it to make a type
                            specimen book.</p>

                        <GoogleAuth className="hero__cta" styleColor="blue"/>
                    </div>
                    <div className="hero-images-wrapper">
                        <div className="hero__images">
                            <img className="hero__image" src={gmailIcon} alt=""/>
                            <img className="hero__image" src={whatsappIcon} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}

export default HomePage;
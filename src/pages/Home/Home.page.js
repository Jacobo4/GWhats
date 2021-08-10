import React, {Component} from "react";
import './Home.scss';

import Footer from "../../layouts/Footer/Footer.layout";


import gmailIcon from "../../assets/images/gmail-icon.svg";
import whatsappIcon from "../../assets/images/whatsapp-icon.svg";
import bannerHero from "../../assets/images/hero-banner.png";


class HomePage extends Component {
    render() {
        return (
            <div className="Home">
                <section>
                    <div className="hero">

                        <div className="hero-title-wrapper">
                            <h1 className="hero__title">Welcome</h1>

                            <div className="hero__description">
                                <p>Con WhatsApp, la mensajería y las llamadas son rápidas, simples, seguras y
                                    gratuitas*,
                                    disponibles en teléfonos alrededor del mundo.</p>
                                {/*<GoogleAuth className="hero__cta" styleColor="blue"/>*/}
                            </div>

                        </div>

                        <div className="hero-images-wrapper">

                            <div className="hero__images">
                                <img className="hero__image" src={bannerHero} alt=""/>
                                <img className="hero__image" src={gmailIcon} alt=""/>
                                <img className="hero__image" src={whatsappIcon} alt=""/>
                            </div>
                        </div>


                    </div>
                </section>


                <Footer/>


            </div>
        );

    }
}

export default HomePage;
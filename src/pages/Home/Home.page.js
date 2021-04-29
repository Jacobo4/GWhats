import React, {Component} from "react";
import './Home.scss';

import GoogleAuth from "../../components/Aux/GoogleAuthBtn";
import gmailIcon from "../../assets/images/gmail-icon.svg";
import whatsappIcon from "../../assets/images/whatsapp-icon.svg";


class HomePage extends Component {
    render() {
        return (
            <div className={"Home"}>
                <div className={"hero"}>
                    <div className={"hero-title-wrapper"}>
                        <h1 className={"hero__title"}>Una iniciativa contra
                            la desinformación</h1>

                        <p className={"hero__description"}>Truever es un proyecto independiente que busca transformar la forma en que consumimos
                            contenido en la red. Verificamos el contenido que consumes de forma automática haciendo uso
                            de inteligencia artificial y evaluaciones de fact checkers.</p>

                        <GoogleAuth className={"hero__cta"} styleColor={"red"}/>
                    </div>
                    <div className={"hero-images-wrapper"}>
                        <div className={"hero__images"}>
                            <img className={"hero__image"} src={gmailIcon} alt=""/>
                            <img className={"hero__image"} src={whatsappIcon} alt=""/>
                        </div>
                    </div>

                </div>
            </div>
        );

    }
}

export default HomePage;
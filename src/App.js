/* global gapi */
import React, {Component} from "react";
import Home from "./pages/Home/Home";

const apiConfig = {
    apiKey: "AIzaSyCXgkVD9sXXaUzjs4UAGYlHlKEtTWjLqYg",
    clientId: "21821511021-f1vhta3cvkl8lhlep5k8i9anqg2i37eq.apps.googleusercontent.com",
    scope: "https://www.googleapis.com/auth/gmail.readonly",
    discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest"]
};

export default class App extends Component {
    state = {
        gapiLoaded: false
    };

    componentDidMount() {
        const script = document.createElement("script");
        script.src = "https://apis.google.com/js/client.js";

        script.onload = () => {
            window.gapi.load("client:auth2", () => {
                gapi.client.init(apiConfig).then(() => {
                    this.setState({
                        gapiLoaded: true
                    });
                });
            });
        };

        document.body.appendChild(script);
    }


    render() {
        const {gapiLoaded} = this.state;
        if (gapiLoaded) {
            return (
                <div>
                    <Home/>
                </div>
            );

        } else {
            return (
                <div>Cargando ...
                </div>);
        }

    }
}



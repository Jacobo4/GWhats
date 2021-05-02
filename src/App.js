import React, {Component} from "react";
import {connect} from "react-redux";
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import Home from "./pages/Home/Home.page";
import Header from "./layouts/Header/Header.layout";
import Chat from "./pages/Chat/Chat.page";
import {signIn, signOut} from "./redux/actions/auth.actions";
import 'normalize.css';
import './styles/index.css';


const apiConfig = {
    apiKey: "AIzaSyCXgkVD9sXXaUzjs4UAGYlHlKEtTWjLqYg",
    clientId: "21821511021-f1vhta3cvkl8lhlep5k8i9anqg2i37eq.apps.googleusercontent.com",
    scope: "https://www.googleapis.com/auth/gmail.readonly",
    discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest"]
};


class App extends Component {

    componentDidMount() {
        const gapi = window.gapi;

        gapi.load("client:auth2", async () => {
            await gapi.client.init(apiConfig);
            // create auth variable
            const gapiAuth = gapi.auth2.getAuthInstance();
            // update state so that component will re-render
            this.onAuthChange(gapiAuth.isSignedIn.get());
            // listen for changes to authentication status
            gapiAuth.isSignedIn.listen(this.onAuthChange);
        });
    }

    // triggered when authentication status changes
    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn();
        } else {
            this.props.signOut();
        }
    };

    render() {
        const {isSignedIn} = this.props;

        return (
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route exact path="/" render={() => (isSignedIn ? <Chat/> : <Home/>)}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/chat" render={() => (isSignedIn ? <Chat/> : <Redirect to="/home"/>)}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => {
    return {isSignedIn: state.auth.isSignedIn};
}

export default connect(mapStateToProps, {signIn, signOut})(App);



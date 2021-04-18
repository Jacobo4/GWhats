import React, {Component} from "react";
import Home from "./pages/Home/Home.page";
import Chat from "./pages/Chat/Chat.page";
import Header from "./layouts/Header/Header.layout";
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';

import {connect} from "react-redux";


class App extends Component {

    render() {
        const {isSignedIn} = this.props;

        return (
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route path="/" render={() => (isSignedIn ? <Chat/> : <Home/>)}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/chat" render={() => (isSignedIn ? <Chat/> : <Redirect to="/home" />)}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => {
    return {isSignedIn: state.auth.isSignedIn};
}

export default connect(mapStateToProps)(App);



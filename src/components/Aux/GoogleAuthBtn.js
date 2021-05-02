import React, { Component } from "react";
import { connect } from "react-redux";
import {signIn, signOut} from "../../redux/actions/auth.actions";
import './GoogleAuth.scss';

class GoogleAuthBtn extends Component {

  onSignIn = () => {
    const gapiAuth = window.gapi.auth2.getAuthInstance();
    gapiAuth.signIn();
  };

  onSignOut = () => {
    const gapiAuth = window.gapi.auth2.getAuthInstance();
    gapiAuth.signOut();
  };

  // helper function
  renderAuthButton() {
    const styleColor = this.props.styleColor;
    const {isSignedIn} = this.props;
    let className = "GoogleAuthBtn GoogleAuthBtn--signIn";

    switch(styleColor){
      case 'blue':
        className += " GoogleAuthBtn--color-blue";
        break;
      default:
    }

    if (isSignedIn === null) {
      return null;
    } else{
      return (
        <button onClick={isSignedIn? this.onSignOut: this.onSignIn} className={className}>
          {isSignedIn ? "Cerrar sesión": "Ingresa!"}
        </button>
      );
    }
  }

  render() {
    return (
        this.renderAuthButton()
    );
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuthBtn);
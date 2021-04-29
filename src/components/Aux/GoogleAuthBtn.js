import React, { Component } from "react";
import './GoogleAuth.scss';
import { connect } from "react-redux";
import {signIn, signOut} from "../../redux/actions/auth.actions";

const apiConfig = {
    apiKey: "AIzaSyCXgkVD9sXXaUzjs4UAGYlHlKEtTWjLqYg",
    clientId: "21821511021-f1vhta3cvkl8lhlep5k8i9anqg2i37eq.apps.googleusercontent.com",
    scope: "https://www.googleapis.com/auth/gmail.readonly",
    discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest"]
};

class GoogleAuthBtn extends Component {

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init(apiConfig)
        .then(() => {
          // create auth variable
          this.gapiAuth = window.gapi.auth2.getAuthInstance();
          // update state so that component will re-render
          this.onAuthChange(this.gapiAuth.isSignedIn.get());
          // listen for changes to authentication status
          this.gapiAuth.isSignedIn.listen(this.onAuthChange);
        });

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

  // manually trigger GAPI auth change
  onSignIn = () => {
    this.gapiAuth.signIn();
  };

  onSignOut = () => {
    this.gapiAuth.signOut();
  };

  // helper function
  renderAuthButton() {
    const styleColor = this.props.styleColor;
    const {isSignedIn} = this.props;
    let classNameSignIn = "GoogleAuthBtn GoogleAuthBtn--signIn";
    let classNameSignOut = "GoogleAuthBtn GoogleAuthBtn--signOut";


    switch(styleColor){
      case 'red':
        classNameSignIn += " GoogleAuthBtn--color-red";
        classNameSignOut += " GoogleAuthBtn--color-whiteRed";
        break;
      default:
    }

    if (isSignedIn === null) {
      return null;
    } else{
      return (
        <button onClick={isSignedIn? this.onSignOut: this.onSignIn} className={isSignedIn? classNameSignOut: classNameSignIn}>
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
import React, { Component } from "react";
import './GoogleAuth.css';
import { connect } from "react-redux";
import {signIn, signOut} from "../../redux/actions/auth.actions";

const apiConfig = {
    apiKey: "AIzaSyCXgkVD9sXXaUzjs4UAGYlHlKEtTWjLqYg",
    clientId: "21821511021-f1vhta3cvkl8lhlep5k8i9anqg2i37eq.apps.googleusercontent.com",
    scope: "https://www.googleapis.com/auth/gmail.readonly",
    discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest"]
};

class GoogleAuth extends Component {

  componentDidMount() {
    window.gapi.load("auth2", () => {
      window.gapi.auth2
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
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOut} className="GoogleAuth-btn GoogleAuth-btn--signOut">
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignIn} className="GoogleAuth-btn GoogleAuth-btn--signIn">
          Sign In
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

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
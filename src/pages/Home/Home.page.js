import React, {Component} from "react";
import {connect} from "react-redux";

class HomePage extends Component {
    render() {
        const {isSignedIn} = this.props;
        return (
            <div>
                <h1>Home</h1>
                <p> Is logged in: {isSignedIn ? "si": "no"}</p>
            </div>
        );

    }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
}
export default connect(mapStateToProps)(HomePage);
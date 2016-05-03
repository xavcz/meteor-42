import React from 'react';

import { Meteor } from 'meteor/meteor';

export class UserLogin extends React.Component {
  constructor() {
    super();
    this.login = this.login.bind(this);
  }

  login() {
    Meteor.loginWithFacebook();
  }

  render() {
    return (
      <div>
        <h2>Play with Meteor!</h2>
        <button id="facebook-login" className="btn btn-primary" onClick={ this.login }>Login with Facebook</button>
      </div>
    );
  }
}
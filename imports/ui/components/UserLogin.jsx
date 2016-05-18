import React from 'react';
import MobileDetect from 'mobile-detect';

import { Meteor } from 'meteor/meteor';

export class UserLogin extends React.Component {
  constructor() {
    super();
    this.login = this.login.bind(this);
  }

  login() {
    const md = new MobileDetect();
    const options = md.mobile() ? { loginStyle: 'redirect' } : { loginStyle: 'popup' };
    Meteor.loginWithFacebook(options);
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
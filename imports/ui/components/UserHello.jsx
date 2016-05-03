import React from 'react';

import { Meteor } from 'meteor/meteor';

export class UserHello extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    debugger
    Meteor.logout();
  }

  render() {
    return (
      <div>
        <h2>Hello { this.props.name } !</h2>
        <button id="logout" className="btn btn-primary" onClick={ this.logout }>Logout</button>
      </div>
    );
  }
}
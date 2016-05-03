import React from 'react';
import { composeWithTracker } from 'react-komposer';

import { Meteor } from 'meteor/meteor';

import { UserPage } from '../pages/UserPage.jsx';

const userComposer = (props, onData) => {
  if (Meteor.subscribe('users.current').ready()) {
    const currentUser = Meteor.user();
    onData(null, { currentUser });
  }
};

export default composeWithTracker(userComposer)(UserPage);
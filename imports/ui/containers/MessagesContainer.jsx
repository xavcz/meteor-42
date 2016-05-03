import React from 'react';
import { composeWithTracker } from 'react-komposer';

import Messages from '/imports/api/messages/messages';

import { MessagesList } from '../pages/MessagesList.jsx';

const messageComposer = (props, onData) => {
  if (Meteor.subscribe('messages.recents').ready()) {
    const messages = Messages.find({}, { limit: 10, sort: { createdAt: -1 } });
    onData(null, { messages });
  }
};

export default composeWithTracker(messageComposer)(MessagesList);
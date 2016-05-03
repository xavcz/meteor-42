import React from 'react';

import { MessageItem } from '../components/MessageItem.jsx';

export const MessagesList = ({ messages }) => {
  return (
    <div>
      { messages
          ? messages.map(message => <MessageItem key={ message._id } { ...message } />)
          : <p>No message yet!</p> }
    </div>
  );
};
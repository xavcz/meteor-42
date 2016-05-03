import React from 'react';

export const MessageItem = ({ author, text }) => {
  return (
    <p>{ author }: { text }</p>
  );
};
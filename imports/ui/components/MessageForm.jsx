import React from 'react';

import { add } from '/imports/api/messages/methods';

export class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit(event) {
    event.preventDefault();
    add.call({ text: event.target.message.value });
    event.target.reset();
  }

  render() {
    return (
      <div style={ { marginTop: '10px' } }>
        <form onSubmit={ this.submit }>
          <div><input id="message" className="string optional" type="text" size="50" name="message" maxlength="42" /></div>
          <div><input className="btn btn-primary" name="commit" type="submit" value="Send message" /></div>
        </form>
      </div>
    );
  }
}
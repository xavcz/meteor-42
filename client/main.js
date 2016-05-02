import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import Messages  from '/imports/api/messages/messages';
import { add } from '/imports/api/messages/methods';

import './main.html';

Template.hello.onCreated(function () {
  this.autorun(() => {
    this.subscribe('messages.recents');
    if (Meteor.userId()) {
      this.subscribe('users.current');
    }
  });
});

Template.hello.helpers({
  messages() {
    return Messages.find({}, { limit: 10, sort: { createdAt: -1 } });
  },
});

Template.info.events({
  'click #facebook-login'(event, instance) {
    Meteor.loginWithFacebook({});
  },

  'click #logout'(event, instance) {
    Meteor.logout();
  },

  'submit form'(event, instance) {
    event.preventDefault();
    add.call({ text: event.target.message.value });
    event.target.reset();
  },
});
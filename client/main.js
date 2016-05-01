import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

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
    Meteor.call('messages.add', event.target.message.value);
    event.target.reset();
  },
});
import { Meteor } from 'meteor/meteor';
import Messages from '../messages';

Meteor.publish('messages.recents', function () {
  return Messages.find({}, { limit: 10, sort: { createdAt: -1 } });
});
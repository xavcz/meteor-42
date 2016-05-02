import { Meteor } from 'meteor/meteor';
import Users from '../users';

Meteor.publish('users.current', function() {
  return Users.find({ _id: this.userId }, { fields: { 'services.facebook.first_name': 1 } });
});

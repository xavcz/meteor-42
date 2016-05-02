import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { LoggedInMixin } from 'meteor/tunifight:loggedin-mixin';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import Messages from './messages';
import Users from '/imports/api/users/users';

export const add = new ValidatedMethod({
  name: 'messages.add',
  mixins : [LoggedInMixin],
  checkLoggedInError: { error: 'notLogged' },
  validate: new SimpleSchema({ text: { type: String } }).validator(),
  run({ text }) {
    const currentUser = Users.findOne(this.userId);
    Messages.insert({
      author: currentUser.services.facebook.first_name,
      createdAt: new Date(),
      text,
    });
  },
});
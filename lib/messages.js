Messages = new Mongo.Collection('messages');

Meteor.methods({
  'messages.add'(text) {
    const currentUser = Meteor.user();
    Messages.insert({
      author: currentUser.services.facebook.first_name,
      createdAt: new Date(),
      text,
    });
  },
});
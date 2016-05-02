import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const Messages = new Mongo.Collection('messages');

const schema = new SimpleSchema({
  author: { type: String },
  createdAt: { type: Date },
  text: { type: String },
});

Messages.attachSchema(schema);

export default Messages;
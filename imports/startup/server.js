import { Meteor } from 'meteor/meteor';
import { ServiceConfiguration } from 'meteor/service-configuration';

import '/imports/api/messages/messages';
import '/imports/api/messages/methods';
import '/imports/api/messages/server/publications';

import '/imports/api/users/users';
import '/imports/api/users/server/publications';

Meteor.startup(() => {
  ServiceConfiguration.configurations.upsert(
    { service: "facebook" },
    { $set: { appId: Meteor.settings.facebook.appId, secret: Meteor.settings.facebook.secret } }
  );
});
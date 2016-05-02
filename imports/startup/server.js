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
    { $set: { appId: "537498086420290", secret: "039da82517a4581fdfd74b659f3ba1c8" } }
  );
});
import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  ServiceConfiguration.configurations.upsert(
    { service: "facebook" },
    { $set: { appId: "537498086420290", secret: "039da82517a4581fdfd74b659f3ba1c8" } }
  );
});

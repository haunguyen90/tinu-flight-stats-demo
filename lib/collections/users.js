/**
 * Created by haunguyen on 5/1/17.
 */
import SimpleSchema from 'simpl-schema';

const User = function (doc) {
  _.extend(this, doc);
};

_.extend(User.prototype, {
  test() {
    return this;
  },
});

Meteor.users._transform = function (user) {
  return new User(user);
};

//* **************************************************
// Schema definition
const Schema = {};

Schema.UserProfile = new SimpleSchema({
  settings: {
    type: Object,
    optional: true,
  },
  'settings.global': {
    type: Object,
    optional: true,
  },
});

Schema.User = new SimpleSchema({
  emails: {
    type: Array,
    optional: true,
  },
  'emails.$': {
    type: Object,
  },
  'emails.$.address': {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
  },
  'emails.$.verified': {
    type: Boolean,
  },
  createdAt: {
    type: Date,
  },
  fname: {
    type: String,
    optional: true,
  },
  initials: {
    type: String,
    optional: true,
  },
  lname: {
    type: String,
    optional: true,
  },
  status: {
    type: Object,
    optional: true,
    blackbox: true,
  },
  profile: {
    type: Schema.UserProfile,
    optional: true,
  },
  services: {
    type: Object,
    optional: true,
    blackbox: true,
  },
});

Meteor.users.attachSchema(Schema.User);

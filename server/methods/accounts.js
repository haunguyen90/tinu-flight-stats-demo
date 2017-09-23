import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export default function () {
  Meteor.methods({
    accountsCreateUser(userData) {
      check(userData, Object);

      const { email } = userData;

      if (!email) throw new Meteor.Error(403, 'Email is required.');
      const existedEmail = Meteor.users.findOne({ 'emails.$.address': email });

      if (existedEmail) throw new Meteor.Error(403, 'Email already exists.');
      const userId = Accounts.createUser(userData);

      return userId;
    },
  });
}

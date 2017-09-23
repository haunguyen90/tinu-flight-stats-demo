import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { HTTP } from 'meteor/http';

const APP_ID = '26900b7d';
const APP_KEY = 'fe75f6d4c5256582260c3877abeb21ac';
const ENDPOINT = 'https://api.flightstats.com/flex/schedules/rest/v1/json/flight';

// curl -v  -X GET "https://api.flightstats.com/flex/schedules/rest/v1/json/flight/AA/100/departing/2017/12/12?appId=26900b7d&appKey=fe75f6d4c5256582260c3877abeb21ac"

export default function () {
  Meteor.methods({
    searchFlightServer(flightDate, flightNumber) {
      check(flightDate, String);
      check(flightNumber, String);

      this.unblock();

      if (flightNumber.length < 3 || flightNumber.length > 6) {
        throw new Meteor.Error(400, 'Flight number should be 3-6 characters.');
      }

      const flightDateObject = new Date(flightDate);
      const carrier = flightNumber.substring(0, 2);
      const flightId = flightNumber.substring(2, 6);
      const year = flightDateObject.getFullYear();
      const month = flightDateObject.getMonth() + 1;
      const day = flightDateObject.getDate();

      const URL = `${ENDPOINT}/${carrier}/${flightId}/departing/${year}/${month}/${day}`;
      console.log(URL);

      try {
        const result = HTTP.call('GET', URL, {
          params: {
            appId: APP_ID,
            appKey: APP_KEY,
          },
        });
        console.log(result);
        return result;
      } catch (e) {
        return e;
      }
    },
  });
}

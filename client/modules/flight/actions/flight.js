export default {
  clearErrors({ LocalState }) {
    LocalState.set('FLIGHT_ERROR', null);
  },

  searchFlight({ Meteor, LocalState }, flightDate, flightNumber, callback) {
    Meteor.call('searchFlightServer', flightDate, flightNumber, (err, result) => {
      if (err) {
        LocalState.set('FLIGHT_ERROR', err);
      } else {
        if (result.statusCode === 200) {
          callback(true);
          if (result.data && result.data.scheduledFlights) {
            LocalState.set('SCHEDULED_FLIGHTS', result.data.scheduledFlights);
          }
          if (result.data && result.data.appendix) {
            if (result.data.appendix.airlines) {
              LocalState.set('AIRLINES', result.data.appendix.airlines);
            }

            if (result.data.appendix.airports) {
              LocalState.set('AIRPORT', result.data.appendix.airports);
            }

            if (result.data.appendix.equipments) {
              LocalState.set('EQUIPMENTS', result.data.appendix.equipments);
            }
          }
        } else {
          // TODO Handle error request
        }
      }
    })
  },
};

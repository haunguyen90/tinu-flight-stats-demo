import moment from 'moment';
import { sortBy } from 'underscore';
import { useDeps, composeAll, composeWithTracker } from 'mantra-core';
import FlightPage from '../components/FlightPage';
import FlightDataExample from '../../../configs/exampleData';

export const composer = ({ context, clearErrors }, onData) => {
  const { LocalState } = context();
  const error = LocalState.get('FLIGHT_ERROR');
  const airlines = LocalState.get('AIRLINES') || FlightDataExample.airlines;
  const airports = LocalState.get('AIRPORT') || FlightDataExample.airports;
  const equipments = LocalState.get('EQUIPMENTS') || FlightDataExample.equipments;
  let scheduledFlights = LocalState.get('SCHEDULED_FLIGHTS') || FlightDataExample.scheduledFlights;

  if (scheduledFlights) {
    scheduledFlights.map((item) => {
      item.departureTime = moment(item.departureTime);
      item.arrivalTime = moment(item.arrivalTime);
      return item;
    })
    scheduledFlights = sortBy(scheduledFlights, 'departureTime');
  }

  onData(null, { error, scheduledFlights, airlines, airports, equipments });

  return clearErrors;
};

export const depsMapper = (context, actions) => ({
  clearErrors: actions.flight.clearErrors,
  context: () => context,
  searchFlight: actions.flight.searchFlight,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper),
)(FlightPage);

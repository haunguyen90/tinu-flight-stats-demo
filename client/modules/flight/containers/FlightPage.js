import { useDeps, composeAll, composeWithTracker } from 'mantra-core';
import FlightPage from '../components/FlightPage';

export const composer = ({ context, clearErrors }, onData) => {
  const { LocalState } = context();
  const error = LocalState.get('FLIGHT_ERROR');
  const scheduledFlights = LocalState.get('SCHEDULED_FLIGHTS');
  const airlines = LocalState.get('AIRLINES');
  const airports = LocalState.get('AIRPORT');
  const equipments = LocalState.get('EQUIPMENTS');

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

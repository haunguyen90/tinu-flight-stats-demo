import React from 'react';
import PropTypes from 'prop-types';
import { SingleDatePicker } from 'react-dates';
import moment from 'moment';

import 'react-dates/lib/css/_datepicker.css';

import { isInclusivelyAfterDay } from '/client/lib';
import FlightItem from './FlightItem';

class FlightPage extends React.Component {
  static defaultProps = {
    scheduledFlights: [{"carrierFsCode":"LH","flightNumber":"419","departureAirportFsCode":"IAD","arrivalAirportFsCode":"FRA","stops":0,"arrivalTerminal":"1","departureTime":"2017-12-12T18:05:00.000","arrivalTime":"2017-12-13T07:50:00.000","flightEquipmentIataCode":"74H","isCodeshare":false,"isWetlease":false,"serviceType":"J","serviceClasses":["F","J","Y"],"trafficRestrictions":[],"codeshares":[{"carrierFsCode":"UA","flightNumber":"8826","serviceType":"J","serviceClasses":["F","J","Y"],"trafficRestrictions":[],"referenceCode":1722616},{"carrierFsCode":"AI","flightNumber":"8644","serviceType":"J","serviceClasses":["J","Y"],"trafficRestrictions":["Q"],"referenceCode":1722629},{"carrierFsCode":"TG","flightNumber":"7711","serviceType":"J","serviceClasses":["F","J","Y"],"trafficRestrictions":["G"],"referenceCode":1722686},{"carrierFsCode":"AC","flightNumber":"9450","serviceType":"J","serviceClasses":["F","J","Y"],"trafficRestrictions":["G"],"referenceCode":1722718}],"referenceCode":"256-1722645--"}],
    airlines: [{"fs":"AC","iata":"AC","icao":"ACA","name":"Air Canada","phoneNumber":"1-888-422-7533","active":true},{"fs":"AI","iata":"AI","icao":"AIC","name":"Air India","phoneNumber":"1-800-223-7776","active":true},{"fs":"UA","iata":"UA","icao":"UAL","name":"United Airlines","phoneNumber":"1-800-864-8331","active":true},{"fs":"TG","iata":"TG","icao":"THA","name":"Thai Airways International","phoneNumber":"800-426-5204","active":true},{"fs":"LH","iata":"LH","icao":"DLH","name":"Lufthansa","phoneNumber":"800 645-3880","active":true}],
    airports: [{"fs":"IAD","iata":"IAD","icao":"KIAD","faa":"IAD","name":"Washington Dulles International Airport","street1":"1 Saarinen Circle","city":"Dulles","cityCode":"WAS","stateCode":"VA","postalCode":"20166","countryCode":"US","countryName":"United States","regionName":"North America","timeZoneRegionName":"America/New_York","weatherZone":"DCZ001","localTime":"2017-09-23T17:33:53.169","utcOffsetHours":-4,"latitude":38.95315,"longitude":-77.447735,"elevationFeet":313,"classification":1,"active":true},{"fs":"FRA","iata":"FRA","icao":"EDDF","name":"Frankfurt Airport","city":"Frankfurt","cityCode":"FRA","countryCode":"DE","countryName":"Germany","regionName":"Europe","timeZoneRegionName":"Europe/Berlin","localTime":"2017-09-23T23:33:53.169","utcOffsetHours":2,"latitude":50.048952,"longitude":8.573678,"elevationFeet":381,"classification":1,"active":true}],
  }

  constructor(props) {
    super(props);

    this.state = {
      flightDate: moment(),
      focused: false,
      flightNumber: '',
    }
  }

  onSearchFlight = () => {
    const { searchFlight } = this.props;
    const { flightDate, flightNumber } = this.state;

    searchFlight(flightDate.format('DD MMM YYYY'), flightNumber);
  }

  onFlightNumberChange = (event) => {
    event.preventDefault();

    let value = event.currentTarget.value;
    if (value.length > 2) {
      value = value.replace(/^.{2}(.*)/, (match, p1) => {
        const newString = match.replace(p1, '');
        const flight = parseInt(p1);
        return newString + flight;
      });
    }
    this.setState(() => ({ flightNumber: value.toUpperCase() }));
  }

  render() {
    return (
      <div className="main-page main-page--flight">
        <div className="search-flight-bar">
          <div className="zigvy-form-group zigvy-form-group--inline">
            <label htmlFor="flight-date" className="zigvy-form-group__label">
              Flight Date:
            </label>

            <div className="zigvy-form-group__input-datepicker">
              <SingleDatePicker
                id="flight-date"
                displayFormat="DD MMM YYYY"
                isOutsideRange={day => !isInclusivelyAfterDay(day, moment()) || isInclusivelyAfterDay(day, moment().add(12, 'month'))}
                date={this.state.flightDate}
                onDateChange={date => this.setState({ flightDate: date })}
                focused={this.state.focused}
                onFocusChange={({ focused }) => this.setState({ focused })}
              />
            </div>
          </div>

          <div className="zigvy-form-group zigvy-form-group--inline">
            <label htmlFor="flight-number" className="zigvy-form-group__label">
              Flight Number:
            </label>
            <input
              type="text"
              id="flight-number"
              className="zigvy-form-group__input"
              minLength={3}
              maxLength={6}
              onChange={this.onFlightNumberChange}
              value={this.state.flightNumber}
            />
          </div>

          <div className="zigvy-form-group zigvy-form-group--inline">
            <button
              className="btn btn-primary"
              onClick={this.onSearchFlight}
            >Search Flight</button>
          </div>
        </div>

        <div className="result-section">
          {this.props.scheduledFlights.map((flightData, index) => (
            <FlightItem
              key={index}
              flightData={flightData}
              airlines={this.props.airlines}
              airports={this.props.airports}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default FlightPage;

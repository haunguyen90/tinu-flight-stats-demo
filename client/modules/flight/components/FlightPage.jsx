import React from 'react';
import PropTypes from 'prop-types';
import { SingleDatePicker } from 'react-dates';
import moment from 'moment';

import 'react-dates/lib/css/_datepicker.css';

import { isInclusivelyAfterDay } from '/client/lib';
import FlightItem from './FlightItem';

class FlightPage extends React.Component {
  static defaultProps = {
    "scheduledFlights": [
      {
        "carrierFsCode": "AA",
        "flightNumber": "2160",
        "departureAirportFsCode": "BOS",
        "arrivalAirportFsCode": "DCA",
        "stops": 0,
        "departureTerminal": "B",
        "arrivalTerminal": "C",
        "departureTime": "2017-09-25T09:00:00.000",
        "arrivalTime": "2017-09-25T10:37:00.000",
        "flightEquipmentIataCode": "319",
        "isCodeshare": false,
        "isWetlease": false,
        "serviceType": "J",
        "serviceClasses": [
          "R",
          "J",
          "Y"
        ],
        "trafficRestrictions": [],
        "codeshares": [],
        "referenceCode": "256-581836--"
      },
      {
        "carrierFsCode": "AA",
        "flightNumber": "2160",
        "departureAirportFsCode": "DCA",
        "arrivalAirportFsCode": "BOS",
        "stops": 0,
        "departureTerminal": "C",
        "arrivalTerminal": "B",
        "departureTime": "2017-09-25T06:30:00.000",
        "arrivalTime": "2017-09-25T07:54:00.000",
        "flightEquipmentIataCode": "319",
        "isCodeshare": false,
        "isWetlease": false,
        "serviceType": "J",
        "serviceClasses": [
          "R",
          "J",
          "Y"
        ],
        "trafficRestrictions": [],
        "codeshares": [],
        "referenceCode": "256-1001242--"
      }
    ],
    "airlines": [
      {
        "fs": "AA",
        "iata": "AA",
        "icao": "AAL",
        "name": "American Airlines",
        "phoneNumber": "08457-567-567",
        "active": true
      }
    ],
    "airports": [
      {
        "fs": "DCA",
        "iata": "DCA",
        "icao": "KDCA",
        "faa": "DCA",
        "name": "Ronald Reagan National Airport",
        "street1": "1 Aviation Circle",
        "street2": "",
        "city": "Washington",
        "cityCode": "WAS",
        "stateCode": "DC",
        "postalCode": "20001-6000",
        "countryCode": "US",
        "countryName": "United States",
        "regionName": "North America",
        "timeZoneRegionName": "America/New_York",
        "weatherZone": "DCZ001",
        "localTime": "2017-09-24T03:17:41.148",
        "utcOffsetHours": -4,
        "latitude": 38.853434,
        "longitude": -77.043457,
        "elevationFeet": 15,
        "classification": 1,
        "active": true
      },
      {
        "fs": "BOS",
        "iata": "BOS",
        "icao": "KBOS",
        "faa": "BOS",
        "name": "Logan International Airport",
        "street1": "One Harborside Drive",
        "street2": "",
        "city": "Boston",
        "cityCode": "BOS",
        "stateCode": "MA",
        "postalCode": "02128-2909",
        "countryCode": "US",
        "countryName": "United States",
        "regionName": "North America",
        "timeZoneRegionName": "America/New_York",
        "weatherZone": "MAZ015",
        "localTime": "2017-09-24T03:17:41.148",
        "utcOffsetHours": -4,
        "latitude": 42.36646,
        "longitude": -71.020176,
        "elevationFeet": 19,
        "classification": 1,
        "active": true
      }
    ],
    "equipments": [
      {
        "iata": "319",
        "name": "Airbus A319",
        "turboProp": false,
        "jet": true,
        "widebody": false,
        "regional": false
      }
    ]
  }

  constructor(props) {
    super(props);

    this.state = {
      flightDate: moment(),
      focused: false,
      flightNumber: '',
      flighSelected: [],
    }
    this.handleSelected = this.handleSelected.bind(this);
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

  handleSelected = (flightNumber) => {
    const { flighSelected } = this.state;
    if (flighSelected.indexOf(flightNumber) !== -1) {
      flighSelected.splice(flighSelected.indexOf(flightNumber), 1);
    } else {
      flighSelected.push(flightNumber);
    }
    this.setState({ flighSelected });
    this.checkAll.checked = false;
  }
  selectAll = (e) => {
    let { flighSelected } = this.state;
    if (e.target.checked) {
      const { scheduledFlights } = this.props;
      flighSelected = scheduledFlights.map(item => (item.referenceCode));
    } else {
      flighSelected = [];
    }
    this.setState({ flighSelected });
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
        <div className="summary-section">
          <label htmlFor="checkbox" className="summary-section__check-all">
            <input type="checkbox" ref={el => (this.checkAll = el)} onChange={this.selectAll} />
            All
          </label>
          <span className="summary-section__divide">
            |
          </span>
          <span className="summary-section__count">
            <label htmlFor="selected">Selected: {this.state.flighSelected.length}</label>
          </span>
        </div>
        <div className="result-section">
          {this.props.scheduledFlights.map((flightData, index) => {
            return (
              <FlightItem
                key={index}
                flightData={flightData}
                airlines={this.props.airlines}
                airports={this.props.airports}
                handleSelected={this.handleSelected}
                isChecked={(this.state.flighSelected.indexOf(flightData.referenceCode) !== -1)}
              />
            )
          })}
        </div>
      </div>
    )
  }
}

export default FlightPage;

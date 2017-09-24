import React from 'react';
import moment from 'moment';

const generateCodeShare = codeShares => (codeShares.map(code => (`${code.carrierFsCode}${code.flightNumber}`)).join(', '))

const FlightItem = ({ flightData, airports, handleSelected, isChecked }) => {
  const getAirportName = (airportCode) => {
    const matchedAirport = airports.find(({ fs }) => fs === airportCode);
    if (matchedAirport) {
      return matchedAirport.name;
    }
    return 'Not Found';
  }

  const onChangeSelect = () => {
    handleSelected(flightData.referenceCode);
  }

  return (
    <div className="flight-item">
      <div className="flight-item__column flight-item__flight-selection">
        <input type="checkbox" checked={isChecked} onChange={onChangeSelect} />
      </div>
      <div className="flight-item__column flight-item__flight-number">
        {
          flightData.codeshares.length > 0
          ?
            <div className="flight-number">{flightData.carrierFsCode}{flightData.flightNumber} operated as {generateCodeShare(flightData.codeshares)}</div>
          :
            <div className="flight-number">{flightData.carrierFsCode}{flightData.flightNumber}</div>
        }
      </div>

      <div className="flight-item__column flight-item__info flight-item__info--depart">
        <span className="flight-item__title">Departure</span>
        <div className="flight-item__info__date">
          <span className="flight-item__label">Date: </span>
          <span>{moment(flightData.departureTime).format('DD MMM YYYY')}</span>
        </div>
        <div className="flight-item__info__airport-code">
          <span className="flight-item__label">Airport code: </span>
          <span>{flightData.departureAirportFsCode}</span>
        </div>
        <div className="flight-item__info__airport-name">
          <span className="flight-item__label">Airport Name: </span>
          <span>{getAirportName(flightData.departureAirportFsCode)}</span>
        </div>
        <div className="flight-item__info__time">
          <span className="flight-item__label">Time: </span>
          <span>{moment(flightData.departureTime).format('HH:mm')}</span>
        </div>
      </div>

      <div className="flight-item__column flight-item__info flight-item__info--arrive">
        <span className="flight-item__title">Arrival</span>
        <div className="flight-item__info__date">
          <span className="flight-item__label">Date: </span>
          <span>{moment(flightData.arrivalTime).format('DD MMM YYYY')}</span>
        </div>
        <div className="flight-item__info__airport-code">
          <span className="flight-item__label">Airport code: </span>
          <span>{flightData.arrivalAirportFsCode}</span>
        </div>
        <div className="flight-item__info__airport-name">
          <span className="flight-item__label">Airport Name: </span>
          <span>{getAirportName(flightData.arrivalAirportFsCode)}</span>
        </div>
        <div className="flight-item__info__time">
          <span className="flight-item__label">Time: </span>
          <span>{moment(flightData.arrivalTime).format('HH:mm')}</span>
        </div>
      </div>
    </div>
  );
};

export default FlightItem;

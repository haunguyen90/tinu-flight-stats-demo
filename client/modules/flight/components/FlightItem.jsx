import React from 'react';
import moment from 'moment';

const generateCodeShare = codeShares => (codeShares.map(code => (`${code.carrierFsCode}${code.flightNumber}`)).join(', '))

const FlightItem = ({ flightData, handleSelected, getAirportName, isChecked }) => {

  const onChangeSelect = () => {
    handleSelected(flightData);
  }


  return (
    <div className="flight-item">
      <div className="flight-item__column flight-item__flight-number">
        {
          flightData.codeshares.length > 0
          ?
            <div className="flight-number">
              <span>{generateCodeShare(flightData.codeshares)}</span>
              <span>Operated as <b>{flightData.carrierFsCode}{flightData.flightNumber}</b></span>
            </div>
          :
            <div className="flight-number">{flightData.carrierFsCode}{flightData.flightNumber}</div>
        }
      </div>

      <div className="flight-item__column flight-item__info flight-item__info--depart">
        <div className="flight-item__info__time">
          <span>{flightData.departureTime.format('HH:mm')}</span>
          <i className="fa fa-plane" aria-hidden="true"></i>
        </div>
        <div className="flight-item__info__date">
          <span>{flightData.departureTime.format('DD MMM YYYY')}</span>
        </div>
        <div className="flight-item__info__airport-name">
          <span>{getAirportName(flightData.departureAirportFsCode)}</span>
        </div>
        <div className="flight-item__info__airport-code">
          <span>({flightData.departureAirportFsCode})</span>
        </div>
      </div>

      <div className="flight-item__column flight-item__info flight-item__info--arrive">
        <div className="flight-item__info__time">
          <span>{flightData.arrivalTime.format('HH:mm')}</span>
        </div>
        <div className="flight-item__info__date">
          <span>{flightData.arrivalTime.format('DD MMM YYYY')}</span>
        </div>
        <div className="flight-item__info__airport-name">
          <span>{getAirportName(flightData.arrivalAirportFsCode)}</span>
        </div>
        <div className="flight-item__info__airport-code">
          <span>({flightData.arrivalAirportFsCode})</span>
        </div>
      </div>
      <div className="flight-item__column flight-item__info flight-item__info__duration">
        <span>{getDurationTime(flightData.arrivalTime, flightData.departureTime)}</span>
      </div>
      <div className="flight-item__column flight-item__info flight-item__info__choose">
        {
          isChecked
          ?
            <button className="btn btn-primary btn-primary-selected" >Selected</button>
          :
            <button className="btn btn-primary" onClick={() => onChangeSelect()}>Select</button>
        }
      </div>
    </div>
  );
};

export default FlightItem;

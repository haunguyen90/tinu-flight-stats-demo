import React from 'react';
import moment from 'moment';
import { union, each, findWhere } from 'underscore';

const FlightReturn = ({ scheduledFlights, handleSelected, getAirportName, isChecked }) => {
  let getCodeShare = [];

  const onChangeSelect = (el) => {
    if (!document.querySelector('input[name="flight-radio"]:checked')) {
    sdsdfsdsd

  const getDurationTime = (departure, arrival) => {
    const duration = departure.diff(arrival);
    const d = moment.duration(duration, 'milliseconds');
    const hours = Math.floor(d.asHours());
    const mins = Math.floor(d.asMinutes()) - (hours * 60);
    return `${hours}h ${mins}m`;
  }

  return (
    <div className="flight-return">
        <div key={'1'} className="flight-item">
          <div className="flight-item__column flight-item__flight-number">
            <div className="flight-number">
              {
                getCodeShare.length > 0
                ?
                <span>
                  <span>{getCodeShare.join(', ')}</span>
                  <span>Operated as <b>{scheduledFlights[0].carrierFsCode}{scheduledFlights[0].flightNumber}</b></span>
                </span>
                :
                <span>{scheduledFlights[0].carrierFsCode}{scheduledFlights[0].flightNumber}</span>
              }
            </div>
          </div>
          <div className="flight-item__column flight-item__column--groups">
            {
              scheduledFlights.map((flightData, index) => (
                <div key={index} className="flight-item__column__list-return">
                  <input type="radio" name="flight-radio" value={flightData.referenceCode} />
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
                </div>
            ))
          }
          </div>
          <div className="flight-item__column flight-item__info flight-item__info__choose">
            {
              isChecked
              ?
                <button className="btn btn-primary btn-primary-selected" >Selected</button>
              :
                <button className="btn btn-primary" onClick={() => onChangeSelect()} >Select</button>
            }

          </div>
        </div>
    </div>
  );
};

export default FlightReturn;

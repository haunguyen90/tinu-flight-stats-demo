import React from 'react';
import moment from 'moment';

const generateCodeShare = codeShares => (codeShares.map(code => (`${code.carrierFsCode}${code.flightNumber}`)).join(', '))
const submitFlight = (quantity) => {
  if (confirm(`Did you select ${quantity} flight?`)) {
    alert('Booked');
  }
}
const FlightSummary = ({ flighSelected, getAirportName }) => {

  return (
    <div className="summary-section">
      {
        flighSelected.map((flightData, index) => (
          <div key={index} className="summary-section__row">
            <span className="summary-section__item">
              <label className="summary-section__item__label">Flight:</label>
              {
                flightData.codeshares.length > 0
                ?
                <span>{generateCodeShare(flightData.codeshares)} Operated as {flightData.carrierFsCode}{flightData.flightNumber}</span>
                :
                <span>{flightData.carrierFsCode}{flightData.flightNumber}</span>
              }

            </span>
            <span className="summary-section__item">
              <label className="summary-section__item__label">From:</label>
              <span>{getAirportName(flightData.departureAirportFsCode)}</span>
            </span>
            <span className="summary-section__item">
              <label className="summary-section__item__label">To:</label>
              <span>{getAirportName(flightData.arrivalAirportFsCode)}</span>
            </span>
            <span className="summary-section__item">
              <label className="summary-section__item__label">Date:</label>
              <span>{flightData.departureTime.format('DD MMM YYYY')}</span>
            </span>
            <span className="summary-section__item">
              <label className="summary-section__item__label">Time:</label>
              <span>{flightData.departureTime.format('HH:mm')} - {flightData.arrivalTime.format('HH:mm')}</span>
            </span>
          </div>
        ))
      }
      <div className="summary-section__submit">
        <button type="buton" onClick={() => (submitFlight(flighSelected.length))} className="btn btn-primary">Submit</button>
      </div>
    </div>
  );
};

export default FlightSummary;

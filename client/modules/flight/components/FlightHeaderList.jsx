import React from 'react';

const FlightHeaderList = ({ isReturn }) => {
  return (
    <div className="result-section__header">
      <div className="flight-item">
        <div className="flight-item__column flight-item__flight-number">
          <span className="flight-item__title">Flight number</span>
        </div>
        {
          isReturn
          ?
          <div className="flight-item__column flight-item__column--groups">
            <div className="flight-item__column__list-return">
              <input type="radio" name="" value="" />
              <div className="flight-item__column flight-item__info flight-item__info--depart">
                <span className="flight-item__title">Departure</span>
              </div>
              <div className="flight-item__column flight-item__info flight-item__info--arrive">
                <span className="flight-item__title">Arrival</span>
              </div>
              <div className="flight-item__column flight-item__info flight-item__info--duration">
                <span className="flight-item__title">Duration</span>
              </div>
            </div>
          </div>
          :
          <div className="flight-item__column flight-item__column--simple">
              <div className="flight-item__column flight-item__info flight-item__info--depart">
                <span className="flight-item__title">Departure</span>
              </div>
              <div className="flight-item__column flight-item__info flight-item__info--arrive">
                <span className="flight-item__title">Arrival</span>
              </div>
              <div className="flight-item__column flight-item__info flight-item__info--duration">
                <span className="flight-item__title">Duration</span>
              </div>
          </div>
        }

        <div className="flight-item__column flight-item__info flight-item__info__choose">{''}</div>
      </div>
    </div>
  );
};

export default FlightHeaderList;

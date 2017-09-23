import React from 'react';

const TopNavBar = () => (
  <div className="app-wrapper__top-nav top-nav-bar">
    <div className="top-nav-bar__nav-item top-nav-bar__nav-item--left top-nav-bar__nav-item--active">
      <i className="fa fa-fw fa-clock-o"></i>
      <span>Time Entries</span>
    </div>
    <div className="top-nav-bar__nav-item top-nav-bar__nav-item--left">
      <i className="fa fa-fw fa-users"></i>
      <span>Team</span>
    </div>
    <div className="top-nav-bar__nav-item top-nav-bar__nav-item--left">
      <i className="fa fa-fw fa-bar-chart"></i>
      <span>Reports</span>
    </div>
    <div className="top-nav-bar__nav-item top-nav-bar__nav-item--left">
      <i className="fa fa-fw fa-cog"></i>
      <span>Settings</span>
    </div>

    <div className="top-nav-bar__nav-item top-nav-bar__nav-item--right">
      <button className="top-nav-bar__nav-item__button btn btn-default">
        Today
      </button>
    </div>
  </div>
);

export default TopNavBar;

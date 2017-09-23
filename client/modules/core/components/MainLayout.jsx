import React from 'react';
import TopNavBar from './TopNavBar.jsx';

const MainLayout = ({ children }) => (
  <div className="app-wrapper">
    <TopNavBar />
    {children}
  </div>
  );

export default MainLayout;

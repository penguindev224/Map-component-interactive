import React, { Suspense, lazy, useState, useEffect } from 'react';
import './MainPage.css';
import MapComponent from './MapComponent';

const MainPage = () => {

  return (
    <div className="main-page-container">
        <div style={{height: '80vh', width: '100%' }}>
        <h2>Hong Kong areas: Click markers for information</h2>
        <MapComponent />
      </div>
    </div>
  );
};

export default MainPage;
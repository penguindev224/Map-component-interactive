import React from 'react';
import './about.css';
import myImage from '../pic/profile.jpg';

const AboutPage = () => {
  return (
    <div className="AboutPage">
      <h1>About</h1>
      <hr/><br/>
      <p>React JS training project. Provide navigation to different Hong Kong areas.</p>
      <br/><br/>
      <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'auto', // Optional: Adjust height as needed
      }}
    >

    </div>
    </div>
  );
};

export default AboutPage;
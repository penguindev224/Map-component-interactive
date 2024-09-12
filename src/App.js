import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'; // Styling for navigation and layout

import MainPage from './MainPage'; // The main page with Tabs
import AboutPage from './about/index';
import ContactPage from './contact/index';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        {/* Navigation bar with 15% width */}
        <nav className="nav-bar">
          <ul>
            <li><Link to="/">Main Page</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <br/><br/>
            <li><p>Copyright reserved</p></li>
          </ul>
        </nav>

        {/* Main content section with 85% width */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>

          
        </div>
      </div>
    </Router>
  );
};

export default App;




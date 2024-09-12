import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './MapComponent.css'; // Add this for custom styling

// Fix for default marker icon issue in React-Leaflet
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const locations = {
  WanChai: {
    position: [22.2804, 114.1747],
    displayName: 'Wan Chai',
    description: 'Wan Chai is a bustling commercial and entertainment district on Hong Kong Island, known for its skyscrapers, nightlife, and iconic landmarks like the Hong Kong Convention and Exhibition Centre. It blends modern development with traditional markets and historical sites.',
    Lowerprice: 'https://en.wikipedia.org/wiki/Kowloon',
  },
  TsuenWan: {
    position: [22.3738, 114.1150],
    displayName: 'Tsuen Wan',
    description: 'Located in the western New Territories, Tsuen Wan is a rapidly developing residential and industrial area with shopping centers, parks, and cultural sites. It serves as a key transportation hub connecting Hong Kong Island, Kowloon, and the New Territories.',
    Lowerprice: 'https://en.wikipedia.org/wiki/TsuenWan',
  },
  NewTerritories: {
    position: [22.425, 114.160],
    displayName: 'New Territories',
    description: 'The New Territories cover the northern region of Hong Kong and include rural areas, new towns, and country parks. It offers a mix of urban developments, traditional villages, and natural landscapes, making it a more spacious and scenic contrast to the city’s dense urban areas.',
    Lowerprice: 'https://en.wikipedia.org/wiki/NewTerritories',
  },


  // Other locations...
};

const MapComponent = () => {
  const [selectedArea, setSelectedArea] = useState(null);

  const handleMarkerClick = (name) => {
    setSelectedArea(locations[name]);
  };

  const handleCloseDetails = () => {
    setSelectedArea(null);
  };

  return (
    <div>
      <MapContainer center={[22.3193, 114.1694]} zoom={11} style={{ height: '80vh', width: '100%', padding: '9px' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {Object.entries(locations).map(([name, { position, displayName }]) => (
          <Marker
            key={name}
            position={position}
            eventHandlers={{
              click: () => handleMarkerClick(name),
            }}
          />
        ))}
      </MapContainer>

      {selectedArea && (
        <div className="popup-container">
          <h2>{selectedArea.displayName}</h2>


          <p>{selectedArea.description}</p>
          <a href={selectedArea.Lowerprice} target="_blank" rel="noopener noreferrer">Learn more</a>
          <br/><br/>
          <button onClick={handleCloseDetails} className="close-button">Close</button>
        </div>
      )}
    </div>
  );
};

export default MapComponent;



  // NewTerritories: [[22.425, 114.160], '新界'],
  // KwaiTsing: [[22.3676, 114.1131], '葵涌'],
  // North: [[22.3404, 114.1784], '北角'],
  // SaiKung: [[22.3578, 114.2655], '西貢'],
  // ShaTin: [[22.3813, 114.1884], '沙田'],
  // TaiPo: [[22.4480, 114.1770], '大埔'],
  // TsuenWan: [[22.3738, 114.1150], '荃灣'],
  // TuenMun: [[22.3930, 113.9750], '屯門'],
  // YuenLong: [[22.4452, 114.0264], '元朗'],
  // KowloonCity: [[22.3094, 114.2296], '九龍城'],
  // KwunTong: [[22.3117, 114.2248], '觀塘'],
  // ShamShuiPo: [[22.3348, 114.1628], '深水埗'],
  // WongTaiSin: [[22.3363, 114.1935], '黃大仙'],
  // YauTsimMong: [[22.3114, 114.1691], '油麻地'],
  // CentralAndWestern: [[22.2819, 114.1580], '中環'],
  // Eastern: [[22.2900, 114.2261], '西區'],
  // Southern: [[22.2321, 114.1597], '南區'],
  // WanChai: [[22.2804, 114.1747], '灣仔'],







/*

// Commented location name mapping in EN
const locations = {

  Kowloon: [[22.320, 114.170], 'KOWLOON'],
  HongKongIsland: [[22.282, 114.158], 'HONG KONG ISLAND'],
  NewTerritories: [[22.425, 114.160], 'NEW TERRITORIES'],
  KwaiTsing: [[22.3676, 114.1131], 'KWAI TSING'],
  North: [[22.3404, 114.1784], 'NORTH'],
  SaiKung: [[22.3578, 114.2655], 'SAI KUNG'],
  ShaTin: [[22.3813, 114.1884], 'SHA TIN'],
  TaiPo: [[22.4480, 114.1770], 'TAI PO'],
  TsuenWan: [[22.3738, 114.1150], 'TSUEN WAN'],
  TuenMun: [[22.3930, 113.9750], 'TUEN MUN'],
  YuenLong: [[22.4452, 114.0264], 'YUEN LONG'],
  KowloonCity: [[22.3094, 114.2296], 'KOWLOON CITY'],
  KwunTong: [[22.3117, 114.2248], 'KWUN TONG'],
  ShamShuiPo: [[22.3348, 114.1628], 'SHAM SHUI PO'],
  WongTaiSin: [[22.3363, 114.1935], 'WONG TAI SIN'],
  YauTsimMong: [[22.3114, 114.1691], 'YAU TSIM MONG'],
  CentralAndWestern: [[22.2819, 114.1580], 'CENTRAL AND WESTERN'],
  Eastern: [[22.2900, 114.2261], 'EASTERN'],
  Southern: [[22.2321, 114.1597], 'SOUTHERN'],
  WanChai: [[22.2804, 114.1747], 'WAN CHAI'],
  TungChung: [[22.2878, 113.9424], 'TUNG CHUNG'],

};
*/

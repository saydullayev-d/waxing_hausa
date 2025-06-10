import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Element } from 'react-scroll';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icon issue in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const ContactSection = () => {
  const position = [40.18996141819542, 44.52052523286093]; // Coordinates for Koryun 21, Yerevan

  return (
    <Element name="contacts">
      <div className="flex flex-col items-center justify-center bg-white min-h-screen text-black font-sans pt-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
          Город Ереван, <br /> Корюн 21
        </h1>
        <p className="text-xl md:text-3xl mb-4">10:00 – 20:00</p>
        <p className="text-lg md:text-2xl mb-8 text-center">
          Без выходных <br /> и перерывов
        </p>
        <div className="flex space-x-4 mb-8">
          <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100">
            <FaInstagram className="text-xl" />
          </button>
          <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100">
            <FaWhatsapp className="text-xl" />
          </button>
        </div>
        {/* Map Container */}
        <div className="w-full max-w-2xl h-96 relative z-0 mb-10">
          <MapContainer
            center={position}
            zoom={15}
            style={{ height: '100%', width: '100%' }}
            className="z-0"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
              <Popup>Корюн 21, Ереван</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </Element>
  );
};

export default ContactSection;
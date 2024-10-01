'use client';
import { useState } from "react";
import { Suspense } from "react";
import Loading from "./loading";
import './Weather.css';
import Link from 'next/link';

// Définition des icônes
const icons = {
  clear: 'assets/img/clear.png',
  cloud: 'assets/img/cloud.png',
  night: 'assets/img/night.png',
  drizzle: 'assets/img/drizzle.png',
  humidity: 'assets/img/humidity.png',
  orage: 'assets/img/orage.png',
  rain: 'assets/img/rain.png',
  search: 'assets/img/search.png',
  snow: 'assets/img/snow.png',
  wind: 'assets/img/wind.png',
};

// Composant de page
const Pageville = ({ params }) => {
  const [searchValue, setSearchValue] = useState('');

  // Données de prévision dynamique
  const forecast = [
    { day: 'Mercredi', temp: 16, humidity: 91, windSpeed: '3.6 km/h', icon: icons.clear },
    { day: 'Jeudi', temp: 16, humidity: 91, windSpeed: '3.6 km/h', icon: icons.clear },
    { day: 'Vendredi', temp: 16, humidity: 91, windSpeed: '3.6 km/h', icon: icons.clear },
    { day: 'Samedi', temp: 16, humidity: 91, windSpeed: '3.6 km/h', icon: icons.clear },
    { day: 'Dimanche', temp: 16, humidity: 91, windSpeed: '3.6 km/h', icon: icons.clear },
    { day: 'Lundi', temp: 16, humidity: 91, windSpeed: '3.6 km/h', icon: icons.clear },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    // Ici on peut rediriger l'utilisateur vers la nouvelle ville avec le contenu de searchValue
  };

  return (
    <Suspense fallback={<Loading />}>
      
      
      <div className="container-de-container">
        <div className="weather-row">
          
          {/* Premier conteneur à gauche */}
          <div className="weather">
            <form onSubmit={handleSearch} className="search-bar">
              <input 
                type="text" 
                placeholder="Search" 
                value={searchValue} 
                onChange={(e) => setSearchValue(e.target.value)} 
              />
              <Link href={`/${encodeURIComponent(searchValue)}`}>
                <img src={icons.search} alt="Search Icon" />
              </Link>
            </form>

            <img src={icons.clear} alt="Clear Weather Icon" className="weather-icon" />
            <p className="temperature">16°C</p>
            <p className="location">{params.ville}</p>
            
            <div className="weather-data">
              <div className="col">
                <img src={icons.humidity} alt="Humidity Icon" />
                <div>
                  <p>91%</p>
                  <span>Humidity</span>
                </div>
              </div>
              <div className="col">
                <img src={icons.wind} alt="Wind Icon" />
                <div>
                  <p>3.6 km/h</p>
                  <span>Wind Speed</span>
                </div>
              </div>
            </div>
            <p className="DateFR">Aujourd'hui</p>
          </div>

          {/* Conteneur pour les 6 petites cartes */}
          <div className="weather-containers">
            {forecast.map((day, index) => (
              <div key={index} className="weather-container2">
                <h1>{day.day}</h1>
                <img src={day.icon} alt="Weather Icon" className="weather-icon2" />
                <p className="temperature2">{day.temp}°C</p>
                <p className="location2">{params.ville}</p>
                <div className="weather-data2">
                  <div className="col">
                    <img src={icons.humidity} alt="Humidity Icon" />
                    <div>
                      <p>{day.humidity}%</p>
                      <span>Humidity</span>
                    </div>
                  </div>
                  <div className="col">
                    <img src={icons.wind} alt="Wind Icon" />
                    <div>
                      <p>{day.windSpeed}</p>
                      <span>Wind Speed</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default Pageville;
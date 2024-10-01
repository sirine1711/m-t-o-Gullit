import React from 'react';
import './Weather.css';

const clear = 'assets/img/clear.png'
const cloud = 'assets/img/cloud.png'
const night = 'assets/img/night.png'
const drizzle = 'assets/img/drizzle.png'
const humidity = 'assets/img/humidity.png'
const orage = 'assets/img/orage.png'
const rain = 'assets/img/rain.png'
const search = 'assets/img/search.png'
const snow = 'assets/img/snow.png'
const wind = 'assets/img/wind.png'
const backgrimg ='assets/img/Fond.png'

const Lyon = () => {
  return (
    <div className="backgrimg">
      <div className="weather-row">
        {/* Premier conteneur à gauche */}
        <div className="weather">
          <div className="search-bar">
            <input type="text" placeholder="Search" />
            <img src={search} alt="Search Icon" />
          </div>
          <img src={clear} alt="Clear Weather Icon" className="weather-icon" />
          <p className="temperature">16°C</p>
          <p className="location">London</p>
          <div className="weather-data">
            <div className="col">
              <img src={humidity} alt="Humidity Icon" />
              <div>
                <p>91%</p>
                <span>Humidity</span>
              </div>
            </div>
            <div className="col">
              <img src={wind} alt="Wind Icon" />
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
          {/* Petite carte 1 */}
          <div className="weather-container2">
            <h1>Mercredi</h1>
            <img src={clear} alt="Clear Weather Icon" className="weather-icon2" />
            <p className="temperature2">16°C</p>
            <p className="location2">London</p>
            <div className="weather-data2">
              <div className="col">
                <img src={humidity} alt="Humidity Icon" />
                <div>
                  <p>91%</p>
                  <span>Humidity</span>
                </div>
              </div>
              <div className="col">
                <img src={wind} alt="Wind Icon" />
                <div>
                  <p>3.6 km/h</p>
                  <span>Wind Speed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Petite carte 2 */}
          <div className="weather-container2">
            <h1>Jeudi</h1>
            <img src={clear} alt="Clear Weather Icon" className="weather-icon2" />
            <p className="temperature2">16°C</p>
            <p className="location2">London</p>
            <div className="weather-data2">
              <div className="col">
                <img src={humidity} alt="Humidity Icon" />
                <div>
                  <p>91%</p>
                  <span>Humidity</span>
                </div>
              </div>
              <div className="col">
                <img src={wind} alt="Wind Icon" />
                <div>
                  <p>3.6 km/h</p>
                  <span>Wind Speed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Petite carte 3 */}
          <div className="weather-container2">
            <h1>Vendredi</h1>
            <img src={clear} alt="Clear Weather Icon" className="weather-icon2" />
            <p className="temperature2">16°C</p>
            <p className="location2">London</p>
            <div className="weather-data2">
              <div className="col">
                <img src={humidity} alt="Humidity Icon" />
                <div>
                  <p>91%</p>
                  <span>Humidity</span>
                </div>
              </div>
              <div className="col">
                <img src={wind} alt="Wind Icon" />
                <div>
                  <p>3.6 km/h</p>
                  <span>Wind Speed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Petite carte 4 */}
          <div className="weather-container2">
            <h1>Samedi</h1>
            <img src={clear} alt="Clear Weather Icon" className="weather-icon2" />
            <p className="temperature2">16°C</p>
            <p className="location2">London</p>
            <div className="weather-data2">
              <div className="col">
                <img src={humidity} alt="Humidity Icon" />
                <div>
                  <p>91%</p>
                  <span>Humidity</span>
                </div>
              </div>
              <div className="col">
                <img src={wind} alt="Wind Icon" />
                <div>
                  <p>3.6 km/h</p>
                  <span>Wind Speed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Petite carte 5 */}
          <div className="weather-container2">
            <h1>Dimanche</h1>
            <img src={clear} alt="Clear Weather Icon" className="weather-icon2" />
            <p className="temperature2">16°C</p>
            <p className="location2">London</p>
            <div className="weather-data2">
              <div className="col">
                <img src={humidity} alt="Humidity Icon" />
                <div>
                  <p>91%</p>
                  <span>Humidity</span>
                </div>
              </div>
              <div className="col">
                <img src={wind} alt="Wind Icon" />
                <div>
                  <p>3.6 km/h</p>
                  <span>Wind Speed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Petite carte 6 */}
          <div className="weather-container2">
            <h1>Lundi</h1>
            <img src={clear} alt="Clear Weather Icon" className="weather-icon2" />
            <p className="temperature2">16°C</p>
            <p className="location2">London</p>
            <div className="weather-data2">
              <div className="col">
                <img src={humidity} alt="Humidity Icon" />
                <div>
                  <p>91%</p>
                  <span>Humidity</span>
                </div>
              </div>
              <div className="col">
                <img src={wind} alt="Wind Icon" />
                <div>
                  <p>3.6 km/h</p>
                  <span>Wind Speed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Lyon;

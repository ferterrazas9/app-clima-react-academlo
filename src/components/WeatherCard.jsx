import React from "react";
import { useState } from 'react'
import axios from "axios";

const WeatherCard = ({ weather, temperature }) => {
    const [isCelsius, setIsCelsius] = useState(true)
    const changeTemperature = () => setIsCelsius(!isCelsius)


    return (
        <article className="card">
            <h1 className="card__title">Weather App</h1>
            <h2 className="card__subtitle">{`${weather?.name}, ${weather?.sys.country}`}</h2>

            <section className="card__first-section">
                <img src={weather && `https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`}
                    alt="" />
            </section>
            <section className="card__second-section">
                <h3 className="second__title">"{weather?.weather[0].description}"</h3>
                <ul className="second__list">
                    <li className="second__item"> <span className="second__span">Wind speed</span> {weather?.wind.speed}m/s
                    </li>
                    <li className="second__item"><span className="second__span">Clouds</span>{weather?.clouds.all}%</li>
                    <li className="second__item"><span className="second__span">Pressure</span>{weather?.main.pressure}hPa</li>
                </ul>
            </section>

            <h2 className="temperature">{isCelsius ? `${temperature?.celsius} °C` : `${temperature?.farenheit} °F`}</h2>
            <button className="btn" onClick={changeTemperature}>{isCelsius ? 'Change to °F' : 'Change to °C'}</button>
        </article>
    )

}

export default WeatherCard
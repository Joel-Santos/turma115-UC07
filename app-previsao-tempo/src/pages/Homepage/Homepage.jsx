import { useState, useRef } from "react";
import axios from "axios";
import WeatherInformations from "../../components/WeatherInformations/WeatherInformations";
import "./Homepage.css";
import WeatherInformations5Days from "../../components/WeatherInformations5Days/WeatherInformations5Days";

function Homepage(){
    const inputRef = useRef();
    const [weather, setWeather] = useState();
    const [weather5Days, setWeather5Days] = useState();


    async function searchCity(){
        const city = inputRef.current.value;
        const key = "423576808f49d044068cce232d26a165";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=pt_br`;
        const url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=metric&lang=pt_br`
        
        const apiInfo = await axios.get(url);
        const apiInfo5Days = await axios.get(url5Days);
        setWeather(apiInfo.data);
        setWeather5Days(apiInfo5Days.data);
        // console.log(apiInfo5Days.data)
    }
    return(
        <div className="container">
            <h1> Previsão do Tempo</h1>
            <input ref={inputRef} type="text"  placeholder="Digite a cidade"/>
            <button onClick={searchCity}>Buscar</button>

           {weather && <WeatherInformations weather={weather} /> }
           {weather5Days && <WeatherInformations5Days weather5Days={weather5Days} /> }
        </div>
    )

}

export default Homepage;
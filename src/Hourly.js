import React  from 'react';
import './index.css'

export default function Day({weatherInOneHour}) {
    if(weatherInOneHour == undefined){
        return "";
    }
    console.log(weatherInOneHour + "++++++++");
    let icon = "https://openweathermap.org/img/w/" + (weatherInOneHour.weather[0].icon) + ".png";
    let weatherNow = <div></div>;
    return (
        <div className="hourly">
            {weatherNow}
            {/* <p>{weatherInOneHour.dt_txt.split(" ")[0].split("-")[2]}</p> */}
            <p>{weatherInOneHour.dt_txt.split(" ")[1].split(":")[0] + ":00"}</p>
            <img className="icon" alt="" src={icon}></img>
            <h2 className="temperature-degree">{Math.floor(weatherInOneHour.main.temp) + "°"}</h2>    
        </div>
    )
}
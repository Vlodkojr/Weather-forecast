import React  from 'react';
import './index.css'

export default function Day({weatherInOneHour}) {
    if(weatherInOneHour == undefined){
        return "";
    }
    let icon;
    if(weatherInOneHour !== "-"){
        icon = "https://openweathermap.org/img/w/" + (weatherInOneHour.weather[0].icon) + ".png"; 
    }else{
        let weatherPass = <div className="hourly">-</div>;
        return (weatherPass);
    }
    console.log(weatherInOneHour + "++++++++");
    
    return (
        <div className="hourly">
            <p>{weatherInOneHour.dt_txt.split(" ")[1].split(":")[0] + ":00"}</p>
            <img className="icon" alt="" src={icon}></img>
            <h2 className="temperature-degree">{Math.floor(weatherInOneHour.main.temp) + "°"}</h2>    
        </div>
    )
}
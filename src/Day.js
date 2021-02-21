import React  from 'react';

export default function Day({eachDay}) {
    if(eachDay == undefined){
        return "";
    }
    let icon = "https://openweathermap.org/img/w/" + (eachDay.weather[0].icon) + ".png";
    return (
        <div>
            <p>{eachDay.dt_txt.split(" ")[0].split("-")[2]}</p>
            <p>{eachDay.dt_txt.split(" ")[1].split(":")[0] + ":00"}</p>
            <img className="icon" alt="" src={icon}></img>
            <h2 className="temperature-degree">{Math.floor(eachDay.main.temp) + "°"}</h2>    
        </div>
    )
}
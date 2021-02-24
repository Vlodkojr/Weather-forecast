import React  from 'react';

export default function Day({listItemsDay}) {
    if(listItemsDay == undefined){
        return "";
    }
    let icon = "https://openweathermap.org/img/w/" + (listItemsDay.weather[0].icon) + ".png";
    return (
        <div>
            <p>{listItemsDay.dt_txt.split(" ")[0].split("-")[2]}</p>
            <p>{listItemsDay.dt_txt.split(" ")[1].split(":")[0] + ":00"}</p>
            <img className="icon" alt="" src={icon}></img>
            <h2 className="temperature-degree">{Math.floor(listItemsDay.main.temp) + "°"}</h2>    
        </div>
    )
}
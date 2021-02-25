import React  from 'react';

export default function Day({listItemsDay}) {
    if(listItemsDay == undefined){
        return "";
    }
    //  console.log(listItemsDay + "++++++++");
    let icon = "https://openweathermap.org/img/w/" + (listItemsDay.weather[0].icon) + ".png";
//     let weatherNow = "";
//     console.log(counter);
//     (counter === 1) ? 
//     weatherNow = `<div className = "currentWeather">
//     <div>${"Weather now at " + listItemsDay.dt_txt.split(" ")[1].split(":")[0] + ":00"}</div>
//     <img className="icon" alt="" src=${icon}></img>
//     <h1 className="temperature-degree">${Math.floor(listItemsDay.main.temp) + "°"}</h1>
// </div> ` : weatherNow = `"<div></div>"`
// weatherNow = `<div>{listItemsDay.dt_txt.split(" ")[0].split("-")[2]}</div>`
    return (
        <div>
            {/* <div>{weatherNow}</div> */}
            <p>{listItemsDay.dt_txt.split(" ")[0].split("-")[2]}</p>
            <p>{listItemsDay.dt_txt.split(" ")[1].split(":")[0] + ":00"}</p>
            <img className="icon" alt="" src={icon}></img>
            <h2 className="temperature-degree">{Math.floor(listItemsDay.main.temp) + "°"}</h2>    
        </div>
    )
}
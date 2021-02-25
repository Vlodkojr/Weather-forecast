import React  from 'react';
import OneDay from './OneDay'

export default function Daily ({data}) {
    if(data) {
        console.log(data)
    }
    
    let fiveDays = []
    // try {

    for (let i = 0; i < data.list.length; i++) {
        let day = data.list[i].dt_txt;
        
        let dayDate = day.split(" ")[0];
        if (!fiveDays.includes(dayDate)) {
            fiveDays.push(dayDate);
        }

    }
// }catch (err) {
//     document.querySelector("body").appendChild(`Weather for this point ${(town)}, unfortunately, is not on the site.`)

// }
    if (fiveDays.length > 5) fiveDays.pop();
    //Numbers of 5 days;
    let onlyDay = fiveDays.map( (five) => {return (five.split("-")[2])});
    console.log(onlyDay);
    
    //Weather in 5 days for 1 day;
    const fiveDaysWeather = [];

    for (let i = 0; i < onlyDay.length; i++){
        //Temperature in 1 day;
        const dailyWeather = [];
        for(let j = 0; j < data.list.length; j++){
            //Number of date from data.list;
            let dateNumber = data.list[j].dt_txt.split(" ")[0].split("-")[2];
            //Number of date from arr;
            let dayOne = onlyDay[i];
            
            if(dateNumber === dayOne){
                const currentData = data.list[j];
                dailyWeather.push(currentData);
            }
        }
        fiveDaysWeather.push(dailyWeather);
    } 

    let icon = "https://openweathermap.org/img/w/" + (fiveDaysWeather[0][0].weather[0].icon) + ".png";

    return (
        <div>
        <div className = "fiveDaysForecast">

        </div>
        <ul>
        <div className = "currentWeather">
            <div>{"Weather now at " + fiveDaysWeather[0][0].dt_txt.split(" ")[1].split(":")[0] + ":00"}</div>
            <img className="icon" alt="" src={icon}></img>
            <h1 className="temperature-degree">{Math.floor(fiveDaysWeather[0][0].main.temp) + "°"}</h1>
        </div> 
           
                {fiveDaysWeather.map((day, index) => 
            <OneDay key = {index}
                    hourWeather = {day}
            />)}
        </ul>
        </div>
    )
}
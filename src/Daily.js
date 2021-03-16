import React, {useState, useEffect} from 'react';
import OneDay from './OneDay';
import './index.css'

export default function Daily ({data, town}) {
    const [day, setDay] = useState(0);

    useEffect (() => {
        setDay(0);
    }, [town])
    
    if(data) {
        console.log(data)
    }
    
    let fiveDays = []

    for (let i = 0; i < data.list.length; i++) {
        let day = data.list[i].dt_txt;
        
        let dayDate = day.split(" ")[0];
        if (!fiveDays.includes(dayDate)) {
            fiveDays.push(dayDate);
        }
    }

    if (fiveDays.length > 5) fiveDays.pop();
    //Numbers of 5 days;
    let onlyDays = fiveDays.map( (five) => {return (five.split("-")[2] + "." + five.split("-")[1])});
    console.log(onlyDays);
    
    //Weather in 5 days for 1 day;
    const fiveDaysWeather = [];

    for (let i = 0; i < onlyDays.length; i++){
        //Temperature in 1 day;
        const dailyWeather = [];
        for(let j = 0; j < data.list.length; j++){
            //Number of date from data.list;
            let dateNumber = data.list[j].dt_txt.split(" ")[0].split("-")[2];
            //Number of date from arr;
            let dayOne = onlyDays[i];
            
            if(dateNumber === dayOne.split(".")[0]){
                const currentData = data.list[j];
                dailyWeather.push(currentData);
            }
        }
        fiveDaysWeather.push(dailyWeather);
    } 
    
    let icon = "https://openweathermap.org/img/w/" + (fiveDaysWeather[0][0].weather[0].icon) + ".png";
    
    function handleClickDay(index) {
        setDay(index)
     }

    function setDaysFromOneToFour() {
        if (day !== 0) {
            for(let i = 0; i < onlyDays.length; i++) {
                if (i == day) {
                    return onlyDays[i] ;
                }
            }
            
        }
    }
     
    return (
        <div>
            <div className = "fiveDaysForecast" >
                    {onlyDays.map((date, index) =>
                        <h1 className={(index == day) ? "active" : ""} key={date.toString()} onClick={() =>handleClickDay(index, date)}>{date}</h1>
                    )}
            </div>
            <div className="innerWrapper">
                <div className = {(day == 0) ? "currentWeather-active" : "currentWeather"}>
                    <div className="weatherNow">{"Weather now at " + fiveDaysWeather[0][0].dt_txt.split(" ")[1].split(":")[0] + ":00"}</div>
                    <img className="icon" alt="" src={icon}></img>
                    <h1 className="temperature-degree">{Math.floor(fiveDaysWeather[0][0].main.temp) + "°"}</h1>
                </div>
                <div className = {(day !== 0) ? "dayNumber-active": "dayNumber"}>
                {setDaysFromOneToFour()}
                </div>
                <div className="weatherValues">
                    {fiveDaysWeather.map((dayWeather, index) =>
                        <OneDay key = {index}
                                indexOfADay = {index}
                                everyHourForecastInOneDay = {dayWeather}
                                day = {day}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}
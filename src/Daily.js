import React, {useState} from 'react';
import OneDay from './OneDay';
import './index.css'

export default function Daily ({data}) {

    const [previousIndex, setPreviousIndex] = useState(0);
    
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
    function handleClickDay(index, date) {
        document.getElementsByClassName("insideFive")[previousIndex].style.background = "rgb(140, 212, 235)";
        document.getElementsByClassName('insideFive')[index].style.background_color = 'rgb(226, 178, 178)';
        if(index == undefined) index = 0;
        if(index !== 0) {
            document.getElementsByClassName('currentWeather')[0].style.display = "none";
            document.getElementsByClassName('dayNumber')[0].style.display = "flex";
            document.getElementsByClassName('dayNumber')[0].innerText = date;
        }else{
            document.getElementsByClassName('currentWeather')[0].style.display = "flex";
            document.getElementsByClassName('dayNumber')[0].style.display = "none";
        }
        
        document.getElementsByClassName('weatherInOneDay')[previousIndex].style.display = "none";
        
        document.getElementsByClassName('weatherInOneDay')[index].style.display = "flex";
        setPreviousIndex(index);
        document.getElementsByClassName("insideFive")[index].style.background = "rgb(221, 247, 110)";
     }
     
    return (
        <div>
        <div className = "fiveDaysForecast" >
                {onlyDays.map((date, index) =>
                    <h1 className="insideFive" key={date.toString()} onClick={() =>handleClickDay(index, date)}>{date}</h1>
                )}
        </div>
        <div className="innerWrapper">
            <div className = "currentWeather">
                <div className="weatherNow">{"Weather now at " + fiveDaysWeather[0][0].dt_txt.split(" ")[1].split(":")[0] + ":00"}</div>
                <img className="icon" alt="" src={icon}></img>
                <h1 className="temperature-degree">{Math.floor(fiveDaysWeather[0][0].main.temp) + "°"}</h1>
            </div>
            <div className="dayNumber">

            </div>
                <div className="weatherValues">
                    {fiveDaysWeather.map((day, index) =>
                        <OneDay key = {index}
                                indexOfADay = {index}
                                everyHourForecastInOneDay = {day}
                        />
                    )}
                </div>
        </div>
        </div>
    )
}
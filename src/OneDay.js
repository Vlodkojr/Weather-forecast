import React  from 'react';
import Hourly from './Hourly';
import './index.css'


export default function OneDay({indexOfADay, everyHourForecastInOneDay}) {
   
    console.log(everyHourForecastInOneDay + "!!!!!!!!!!!!!!!!!!!!");
    let amountOfPasses = 0;

    if(indexOfADay === 0){
        if(everyHourForecastInOneDay.length < 8){
            amountOfPasses = 8 - everyHourForecastInOneDay.length;
            for(let i = 0; i < amountOfPasses; i++){
                everyHourForecastInOneDay.unshift("-")
            }
        }
    }

    return (
        <div className="weatherInOneDay">
                {everyHourForecastInOneDay.map((day, index) => 
                <Hourly key = {index}
                        weatherInOneHour = {day}
                />)}
        </div>
    )
}
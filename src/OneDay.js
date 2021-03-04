import React  from 'react';
import Hourly from './Hourly';
import './index.css'


export default function OneDay({everyHourForecastInOneDay}) {
   
    console.log(everyHourForecastInOneDay + "!!!!!!!!!!!!!!!!!!!!")

    return (
        <div className="weatherInOneDay">
            {everyHourForecastInOneDay.map((day, index) => 
            <Hourly key = {index}
                    weatherInOneHour = {day}
            />)}
        </div>
    )
}
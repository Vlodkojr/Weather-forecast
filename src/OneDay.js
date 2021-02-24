import React  from 'react';
import Day from './Day';

export default function OneDay({hourWeather}) {
   
    console.log(hourWeather + "!!!!!!!!!!!!!!!!!!!!")

    return (
        <div>
            {hourWeather.map((day, index) => 
            <Day key = {index}
                 listItemsDay = {day}
            />)}
        </div>
    )
}
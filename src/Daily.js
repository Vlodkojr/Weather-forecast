import React  from 'react';
import OneDay from './OneDay'

export default function Daily ({data}) {
    if(data) {
        console.log(data)
    }
    
    let fiveDays = []

    for (let i = 0; i < data.list.length; i++) {
        let day = data.list[i].dt_txt;
        
        // let newDate = new Date(day);
        // let dayForecast = newDate.getDay;
       // console.log(day);
        let dayDate = day.split(" ")[0];
        if (!fiveDays.includes(dayDate)) {
            fiveDays.push(dayDate);
        }

    }
    if (fiveDays.length > 5) fiveDays.pop();
    //Numbers of 5 days;
    let onlyDay = fiveDays.map( (five) => {return (five.split("-")[2])});
    console.log(onlyDay);

    // const oneHourWeather = [] 
    
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
     

    return (
        <ul>
            {fiveDaysWeather.map((day, index) => 
            <OneDay key = {index}
                    hourWeather = {day}
            />)}
        </ul>
    )
}
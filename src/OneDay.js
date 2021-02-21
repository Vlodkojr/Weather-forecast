import React  from 'react';
import Day from './Day';

export default function OneDay({fiveDaysWeather}) {
    //  console.log(fiveDaysWeather);
  //   let OneDayWeather = fiveDaysWeather.map((day) => {return (day.dt_txt.split(" ")[1].split(":")[0] + ":00")});
      console.log(fiveDaysWeather);
    
    // for(let i=0; i<onlyDay.length; i++) {
    //     function dayW (i){
    //         let dayWeather = fiveDaysWeather[i];
    //         return console.log(dayWeather)
    //     }
    // }
    // for(let day of fiveDaysWeather){
    //     <Day day={day} />
    // }

    return (
        <div>   
        <Day eachDay={fiveDaysWeather[0]} />
        <Day eachDay={fiveDaysWeather[1]} />
        <Day eachDay={fiveDaysWeather[2]} />
        <Day eachDay={fiveDaysWeather[3]} />
        <Day eachDay={fiveDaysWeather[4]} />
        <Day eachDay={fiveDaysWeather[5]} />
        <Day eachDay={fiveDaysWeather[6]} />
        <Day eachDay={fiveDaysWeather[7]} />
        </div>
    )
}
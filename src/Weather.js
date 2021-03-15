import React, { useState, useEffect } from 'react';
import Daily from './Daily'
import InputAndButton from './InputAndButton'

export default function Weather () {
    const api_key = "e34be5a16e91490a2961613541b89d8d";
    const language = "ua";
    const [town, setTown] = useState("Stryi");
    const api = `https://api.openweathermap.org/data/2.5/forecast?q=${town}&appid=${api_key}&lang=${language}&units=metric`;
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect (() => {
        fetch(api)
        .then(response => {
            return response.json()
        })
        .then(data => {
            setData(data);
            setIsLoading(false);
        })

    }, [town]);

    //Try Catch like
    if(isLoading == false){
        if(data.message == "city not found"){
            return document.body.innerText = `Weather for this point ${(town)}, unfortunately, is not on the site.`;
    }}
               
    return (
        <div>   
            {isLoading ? <div>Loading...</div> :
                <div>
                    <div className="header">
                        <h1 className="titleName">S<i>Y</i>noptyk</h1>
                        <InputAndButton setTown = {setTown}  />
                    </div>
                    <h3 className="city">{"Weather in " + town}</h3>
                    <Daily data={data}
                           town = {town}  />
                </div>
            }  
        </div>
    )
}
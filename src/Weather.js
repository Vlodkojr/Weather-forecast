import React, { useState, useEffect } from 'react';
import Daily from './Daily'

export default function Weather () {
    const api_key = "e34be5a16e91490a2961613541b89d8d";
    const language = "ua";
    const [titleTown, setTitleTown] = useState(null);
    const [town, setTown] = useState("Stryi");
    const api = `https://api.openweathermap.org/data/2.5/forecast?q=${town}&appid=${api_key}&lang=${language}&units=metric`;
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true)
  
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
          
    const handleChange = (e) => {
        setTitleTown(e.target.value);
    }
        
    const handleClick = (e) => {
        setTown(titleTown)  ;                       
    }
               
    return (
        <div>   
            {isLoading ? <div>Loading...</div> :
                <div>
                    <div className="header">
                        <h1 className="titleName">S<i>Y</i>noptyk</h1>
                        <div className="inputButton">
                            <input type = "text" placeholder = "Enter a town" onChange={handleChange}/>
                            <button onClick={handleClick}>Search</button>
                        </div>
                    </div>
                    <h3 className="city">{"Weather in " + town}</h3>
                    <Daily data={data} />
                </div>
            }  
        </div>
    )
}
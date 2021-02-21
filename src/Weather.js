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
    // const [ e, handleChange] = useState(null);
    //   let icon = "https://openweathermap.org/img/w/" + (data && data.weather[0].icon) + ".png";

    useEffect (() => {
        fetch(api)
        .then(response => {
            return response.json()
        })
        .then(data => {
            setData(data);
            // console.log(data);
            setIsLoading(false);
        })

           
        
        // setIsLoading(false);
    }, [town]);

    const handleChange = (e) => {
        setTitleTown(e.target.value);
    }
    
    // useEffect(() => {
    //     handleChange (e  => {
    //          setTitleTown(e.target.value)
    //      })
    //     },[town]);
        
    const handleClick = (e) => {
        setTown(titleTown)  ;                       
    }
               
    return (
        <div>
                     
        {/* {console.log(data)} */}
            {isLoading ? <div>Loading...</div> :
                <div>
                    <h1>Weather forecast</h1>
                    <h3>Town</h3>
                    <input type = "text" placeholder = "Enter a town" onChange={handleChange}/>
                    <button onClick={handleClick}>Click</button>
                    {/* {console.log(data)}  */}

                    <Daily data={data} />
                    {/* <div className="location">
                        <h1 className="location_timezone"><div>{data.name}</div></h1>
                        <img className="icon" alt="" src={icon}></img>
                    </div>    
                    <div className="temperature">
                        <div className="degree-section">
                        <h2 className="temperature-degree"><div>{Math.floor(data.main.temp)}</div></h2>
                        <span></span>
                        </div>
                        <div className="temperature-description"><div>{data.weather[0].description}</div></div>
                    </div>  */}
                </div>
            }  
        </div>
    )
}
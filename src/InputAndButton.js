import React, {useRef} from 'react';
import './index.css'

export default function InputAndButton ({ setTown }) {
    const valueRef = useRef();

    const handleClick = () => {
        setTown(valueRef.current.value);                       
    }  
    
    return (
        <div className="inputButton">
            <input type = "text" placeholder = "Enter a town" ref={valueRef} />  
            <button onClick={handleClick}>Search</button>  
        </div>
    )
}
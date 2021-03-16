
import React, {useState} from 'react';
import InputAndButton from './InputAndButton';
import Weather from './Weather';
import './index.css'

export default function App () {
  const [town, setTown] = useState("");

    return (
      <div>
        <div className="header">
          <h1 className="titleName">S<i>Y</i>noptyk</h1>
          <InputAndButton setTown = {setTown} />
        </div>
        {town ? <Weather town = {town} /> : "" }       
      </div>
    )
}
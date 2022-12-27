import React from 'react';
import { useState, useEffect } from 'react';

import './App.css'

function App() {
    const [launches, setLaunches] = useState([])

    useEffect(() => {
      (async () => {
        const resp = await fetch('https://api.spacexdata.com/v2/launches')
        const data = await resp.json()
        setLaunches(data)
      })()
    }, [])
    
    return (
      <ul>
        {launches.map(launch => <li key={launch.flight_number}>{launch.mission_name}</li>)}
      </ul>
    )
}

export default App

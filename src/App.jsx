import React, { useState } from 'react';
import TrafficLight from './components/TrafficLight';
import TrafficButtons from './components/TrafficButtons';
import './App.css';

const App = () => {
    const [light, setLight] = useState({red: false, orange: false, green: true});

    const handleStopClick = () => {
        if (!light.green) return;
        setLight({red: false, orange: true, green: false});

        setTimeout(() => {
            setLight({red: true, orange: false, green: false});
        }, 5000);
    };

    const handleGoClick = () => {
        if (!light.red) return;
        setLight({red: true, orange: true, green: false});

        setTimeout(() => {
            setLight({red: false, orange: false, green: true});
        }, 5000);
    };

    return (
        <div className="container">
            <div className="light-container">
                <TrafficLight color="red" isOn={light.red} />
                <TrafficLight color="orange" isOn={light.orange} />
                <TrafficLight color="green" isOn={light.green} />
            </div>
            <div className="control-container">
                <div className="title">Traffic Lights App</div>
                <TrafficButtons onGoClick={handleGoClick} onStopClick={handleStopClick} />
            </div>
        </div>
    );
};

export default App;

import React from 'react';
import '../App.css';

const TrafficLight = ({ color, isOn }) => {
    let className;
    if (isOn) {
        className = `traffic-light ${color}`;
    } else {
        className = 'traffic-light off';
    }
    
    return <div className={className}></div>;
};

export default TrafficLight;

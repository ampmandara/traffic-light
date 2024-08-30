import React from 'react';
import '../App.css';

const TrafficButtons = ({ onGoClick, onStopClick }) => {
    return (
        <div>
            <button onClick={onGoClick} className="button">GO</button>
            <button onClick={onStopClick} className="button">STOP</button>
        </div>
    );
};

export default TrafficButtons;

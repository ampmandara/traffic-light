import React, { useContext } from 'react';
import TrafficLight from './components/TrafficLight';
import TrafficButtons from './components/TrafficButtons';
import { TrafficLightContext } from './context/TrafficLightContext';
import './App.css';

const App = () => {
    const { state, dispatch } = useContext(TrafficLightContext);

    const handleStopClick = () => {
        if (!state.green) return;
        dispatch({ type: 'PREPARE_TO_STOP' });
        setTimeout(() => {
            dispatch({ type: 'STOP' });
        }, 5000);
    };

    const handleGoClick = () => {
        if (!state.red) return;
        dispatch({ type: 'PREPARE_TO_GO' });
        setTimeout(() => {
            dispatch({ type: 'GO' });
        }, 5000);
    };

    return (
        <div className="container">
            <div className="light-container">
                <TrafficLight color="red" isOn={state.red} />
                <TrafficLight color="orange" isOn={state.orange} />
                <TrafficLight color="green" isOn={state.green} />
            </div>
            <div className="control-container">
                <div className="title">Traffic Lights App</div>
                <TrafficButtons onGoClick={handleGoClick} onStopClick={handleStopClick} />
            </div>
        </div>
    );
};

export default App;

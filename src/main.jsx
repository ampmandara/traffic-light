import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { TrafficLightProvider } from './context/TrafficLightContext';

ReactDOM.render(
    <TrafficLightProvider>
        <App />
    </TrafficLightProvider>,
    document.getElementById('root')
);

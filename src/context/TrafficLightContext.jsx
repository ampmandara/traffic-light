import React, { createContext, useReducer } from 'react';

const initialState = {
    red: false,
    orange: false,
    green: true,
};

const reduce = (state, action) => {
    switch (action.type) {
        case 'GO':
            return { red: false, orange: false, green: true };
        case 'STOP':
            return { red: true, orange: false, green: false };
        case 'PREPARE_TO_GO':
            return { red: true, orange: true, green: false };
        case 'PREPARE_TO_STOP':
            return { red: false, orange: true, green: false };
        default:
            return state;
    }
};

const TrafficLightContext = createContext();

const TrafficLightProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reduce, initialState);

    return (
        <TrafficLightContext.Provider value={{ state, dispatch }}>
            {children}
        </TrafficLightContext.Provider>
    );
};

export { TrafficLightContext, TrafficLightProvider };

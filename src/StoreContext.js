import React from 'react';

const StroeContext = React.createContext(null);

export const Provider = (props) => {
    debugger;
    return (
        <StroeContext.Provider value={props.store}>
            {props.children}
        </StroeContext.Provider>
    )
}

export default StroeContext;
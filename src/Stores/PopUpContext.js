import React, { createContext, useReducer } from "react";

export const myAppContextPopUp = createContext({
    popUp: {
        home: null,
    },
    dispatchPopUp: (action) => { },
})

export const MyAppContextPopUpProvider = ({ children }) => {

    const popUpReducer = (state, action) => {
        return state
    }

    const [popUp, dispatchPopUp] = useReducer(popUpReducer, null)

    return (
        <myAppContextPopUp.Provider value={{
            popUp: popUp,
            dispatchPopUp: dispatchPopUp
        }}>
            {children}
        </myAppContextPopUp.Provider>
    )
}
import React, { createContext, useReducer } from "react";
import StudentPopUp from '../Components/AnnouncementPopUp/StudentAnnouncementPopUp/StudentAnnouncementPopUp'
import RecruiterPopUp from '../Components/AnnouncementPopUp/StudentAnnouncementPopUp/StudentAnnouncementPopUp'

export const myAppContextPopUp = createContext({
    popUp: {
        home: {
            component: <></>,
            value: null,
        }
    },
    dispatchPopUp: (action) => { },
})

export const MyAppContextPopUpProvider = ({ children }) => {

    const popUpReducer = (state, action) => {
        console.log(state)
        switch (action.type) {
            case 'HOME':
                switch (action.payload.type) {
                    case 'student':
                        return {
                            ...state,
                            home: {
                                component: <StudentPopUp announcement={action.payload.value} ></StudentPopUp>,
                                value: action.payload.value,
                            }
                        }
                    case 'recruiter':
                        return {
                            ...state,
                            home: {
                                component: <RecruiterPopUp announcement={action.payload.value}></RecruiterPopUp>,
                                value: action.payload.value,
                            }
                        }
                    case 'close':
                        return {
                            ...state,
                            home: {
                                component: <></>,
                                value: null,
                            }
                        }
                    default:
                        return state
                }
            default:
                return state
        }
    }

    const [popUp, dispatchPopUp] = useReducer(popUpReducer, {
        home: {
            component: <></>,
            value: null,
        }
    })

    return (
        <myAppContextPopUp.Provider value={{
            popUp: popUp,
            dispatchPopUp: dispatchPopUp
        }}>
            {children}
        </myAppContextPopUp.Provider>
    )
}
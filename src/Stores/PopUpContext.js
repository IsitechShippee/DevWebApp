import React, { createContext, useReducer } from "react";
import StudentPopUp from '../Components/AnnouncementPopUp/StudentAnnouncementPopUp/StudentAnnouncementPopUp'
import RecruiterPopUp from '../Components/AnnouncementPopUp/RecruiterAnnouncementPopUp/RecruiterAnnouncementPopUp'

export const myAppContextPopUp = createContext({
    popUp: {
        home: {
            component: <></>,
            value: null,
        },
        search: {
            component: <></>,
            value: null,
        },
        newPost: {
            component: <></>,
            value: null,
        },
        chat: {
            component: <></>,
            value: null,
        },
        user: {
            component: <></>,
            value: null,
        }
    },
    dispatchPopUp: (action) => { },
})

export const MyAppContextPopUpProvider = ({ children }) => {

    const popUpReducer = (state, action) => {
        console.log('PopUpContext : ' + action.type + ' - Payload : ', action.payload)
        switch (action.type) {
            case 'HOME':
                switch (action.payload.type) {
                    case 'student':
                        return {
                            ...state,
                            home: {
                                component: <StudentPopUp page={'home'} />,
                                value: action.payload.value,
                            }
                        }
                    case 'recruiter':
                        return {
                            ...state,
                            home: {
                                component: <RecruiterPopUp page={'home'} />,
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
            case 'SEARCH':
                switch (action.payload.type) {
                    case 'student':
                        return {
                            ...state,
                            search: {
                                component: <StudentPopUp page={'search'} />,
                                value: action.payload.value,
                            }
                        }
                    case 'recruiter':
                        return {
                            ...state,
                            search: {
                                component: <RecruiterPopUp page={'search'} />,
                                value: action.payload.value,
                            }
                        }
                    case 'close':
                        return {
                            ...state,
                            search: {
                                component: <></>,
                                value: null,
                            }
                        }
                    default:
                        return state
                }
            case 'NEWPOST':
                {
                    switch (action.payload.type) {
                        case 'student':
                            return {
                                ...state,
                                newPost: {
                                    component: <StudentPopUp page={'newPost'} />,
                                    value: action.payload.value,
                                }
                            }
                        case 'recruiter':
                            return {
                                ...state,
                                newPost: {
                                    component: <RecruiterPopUp page={'newPost'} />,
                                    value: action.payload.value,
                                }
                            }
                        case 'close':
                            return {
                                ...state,
                                newPost: {
                                    component: <></>,
                                    value: null,
                                }
                            }
                        default:
                            return state
                    }
                }
            case 'CHAT':
                {
                    switch (action.payload.type) {
                        case 'student':
                            return {
                                ...state,
                                chat: {
                                    component: <StudentPopUp page={'chat'} />,
                                    value: action.payload.value,
                                }
                            }
                        case 'recruiter':
                            return {
                                ...state,
                                chat: {
                                    component: <RecruiterPopUp page={'chat'} />,
                                    value: action.payload.value,
                                }
                            }
                        case 'close':
                            return {
                                ...state,
                                chat: {
                                    component: <></>,
                                    value: null,
                                }
                            }
                        default:
                            return state
                    }
                }
            case 'USER':
                {
                    switch (action.payload.type) {
                        case 'student':
                            return {
                                ...state,
                                user: {
                                    component: <StudentPopUp page={'user'} />,
                                    value: action.payload.value,
                                }
                            }
                        case 'recruiter':
                            return {
                                ...state,
                                user: {
                                    component: <RecruiterPopUp page={'user'} />,
                                    value: action.payload.value,
                                }
                            }
                        case 'close':
                            return {
                                ...state,
                                user: {
                                    component: <></>,
                                    value: null,
                                }
                            }
                        default:
                            return state
                    }
                }
            default:
                return state
        }
    }

    const [popUp, dispatchPopUp] = useReducer(popUpReducer, {
        home: {
            component: <></>,
            value: null,
        },
        search: {
            component: <></>,
            value: null,
        },
        newPost: {
            component: <></>,
            value: null,
        },
        chat: {
            component: <></>,
            value: null,
        },
        user: {
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
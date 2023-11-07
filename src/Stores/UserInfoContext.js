import React, { createContext, useReducer } from "react";

export const myAppContextUserInfo = createContext({
    userInfo: {},
    dispatchUserInfo: (action) => { },
})

export const MyAppContextUserInfoProvider = ({ children }) => {

    const userInfoReducer = (state, action) => {
        // // Console.log('UserInfoContext : ' + action.type + ' - Payload : ', action.payload)
        let newState = state
        switch (action.type) {
            case 'CONNECT':
                return action.payload
            case 'LOVE':
                // On regarde si c'est un ajout au favoris ou un retrait
                let isAdd = true;
                newState.favorites.forEach(element => {
                    if (element.id === action.payload) {
                        isAdd = false
                    }
                })

                // On parcourt les annonces pour ajouter a l'annonce en question le favori
                newState.loc_announcements.forEach(element => {
                    if (element.id === action.payload) {
                        element.favorite = isAdd
                        // // Console.log(element.id + ' is add : ' + element.favorite)
                    }
                })

                newState.recent_announcements.forEach(element => {
                    if (element.id === action.payload) {
                        element.favorite = isAdd
                        // // Console.log(element.id + ' is add : ' + element.favorite)
                    }
                })

                newState.select_announcements.forEach(element => {
                    if (element.id === action.payload) {
                        element.favorite = isAdd
                        // // Console.log(element.id + ' is add : ' + element.favorite)
                    }
                })

                // On ajoute ou retire l'annonce des favoris*
                if (isAdd) {
                    newState.favorites.push(action.payload)
                } else {
                    newState.favorites = newState.favorites.filter((item) => item.id !== action.payload)
                }
                // // Console.log(newState)
                return newState

            case 'SET VU':
                newState.convs.forEach(element => {
                    if (element.id_people === action.payload.id_people) {
                        element.chat.forEach(element => {
                            element.status = "Vu"
                        })
                    }
                })
                return newState

            case 'ADD CHAT':
                let test = false;
                newState.convs.forEach(element => {
                    if (element.id_people === action.payload.id_people) {
                        element.chat.push(action.payload.chat)
                        test = true;
                    }
                })
                if (!test) {
                    newState.convs.push({
                        id_people: action.payload.id_people,
                        user_surname: action.payload.user.surname,
                        user_firstname: action.payload.user.firstname,
                        user_picture: null,
                        chat: [action.payload.chat]
                    })
                }
                return newState

            default:
                return state
        }
    }

    const [userInfo, dispatchUserInfo] = useReducer(userInfoReducer, null)

    return (
        <myAppContextUserInfo.Provider value={{
            userInfo: userInfo,
            dispatchUserInfo: dispatchUserInfo
        }}>
            {children}
        </myAppContextUserInfo.Provider>
    )
}
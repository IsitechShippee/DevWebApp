import React, { createContext, useReducer } from "react";

export const myAppContextUserInfo = createContext({
    userInfo: {
        "connexion": true,
        "id": 1,
        "surname": "Rodrigues",
        "firstname": "Paul",
        "email": "paul@gmail.com",
        "picture": "",
        "is_online": false,
        "type_user": {
            "id": 1,
            "title": "Etudiant"
        },
        "description": "Dev web full-stack",
        "web_site": "paulrdgs.com",
        "cv": "",
        "cp": "69007",
        "city": "Lyon",
        "birthday": "2000-08-17",
        "is_conveyed": false,
        "skills": {
            "1": "html",
            "3": "js",
            "5": "c#",
            "7": "vba"
        },
        "announcements": [
            {
                "id": 1,
                "title": "recherche alternance",
                "description": "zhfjfvj sggjbdsjvjsh shgsghvf",
                "publish_date": "2023-02-01T00:00:00",
                "status": {
                    "id": 1,
                    "status": "Privée"
                },
                "naf_division_title": "Fabrication de boissons",
                "job_title": null
            },
            {
                "id": 2,
                "title": "recherche alternance",
                "description": "gjkjhg dgfsdssdhgv hjgjhdfgvxc",
                "publish_date": "2022-12-31T00:00:00",
                "status": {
                    "id": 2,
                    "status": "Disponible"
                },
                "naf_division_title": "Fabrication de boissons",
                "job_title": null
            }
        ],
        "favorites": [],
        "convs": [],
        "loc_announcements": [],
        "rec_announcements": [],
        "select_announcements": [{
            "id": 1,
            "title": "recherche alternance",
            "description": "zhfjfvj sggjbdsjvjsh shgsghvf",
            "publish_date": "2023-02-01T00:00:00",
            "status": {
                "id": 1,
                "status": "Privée"
            },
            "naf_division_title": "Fabrication de boissons",
            "job_title": null
        },
        {
            "id": 2,
            "title": "recherche alternance",
            "description": "gjkjhg dgfsdssdhgv hjgjhdfgvxc",
            "publish_date": "2022-12-31T00:00:00",
            "status": {
                "id": 2,
                "status": "Disponible"
            },
            "naf_division_title": "Fabrication de boissons",
            "job_title": null
        },
        {
            "id": 3,
            "title": "recherche alternance",
            "description": "gjkjhg dgfsdssdhgv hjgjhdfgvxc",
            "publish_date": "2022-12-31T00:00:00",
            "status": {
                "id": 2,
                "status": "Disponible"
            },
            "naf_division_title": "Fabrication de boissons",
            "job_title": null
        },
        {
            "id": 4,
            "title": "recherche alternance",
            "description": "gjkjhg dgfsdssdhgv hjgjhdfgvxc",
            "publish_date": "2022-12-31T00:00:00",
            "status": {
                "id": 2,
                "status": "Disponible"
            },
            "naf_division_title": "Fabrication de boissons",
            "job_title": null
        }],
        "recent_search": [],
    },
    dispatchUserInfo: (action) => { },
})

export const MyAppContextUserInfoProvider = ({ children }) => {

    const userInfoReducer = (state, action) => {
        return state
    }

    const [userInfo, dispatchUserInfo] = useReducer(userInfoReducer, {
        "connexion": true,
        "id": 1,
        "surname": "Rodrigues",
        "firstname": "Paul",
        "email": "paul@gmail.com",
        "picture": "",
        "is_online": false,
        "type_user": {
            "id": 1,
            "title": "Etudiant"
        },
        "description": "Dev web full-stack",
        "web_site": "paulrdgs.com",
        "cv": "",
        "cp": "69007",
        "city": "Lyon",
        "birthday": "2000-08-17",
        "is_conveyed": false,
        "skills": {
            "1": "html",
            "3": "js",
            "5": "c#",
            "7": "vba"
        },
        "announcements": [
            {
                "id": 1,
                "title": "recherche alternance",
                "description": "zhfjfvj sggjbdsjvjsh shgsghvf",
                "publish_date": "2023-02-01T00:00:00",
                "status": {
                    "id": 1,
                    "status": "Privée"
                },
                "naf_division_title": "Fabrication de boissons",
                "job_title": null
            },
            {
                "id": 2,
                "title": "recherche alternance",
                "description": "gjkjhg dgfsdssdhgv hjgjhdfgvxc",
                "publish_date": "2022-12-31T00:00:00",
                "status": {
                    "id": 2,
                    "status": "Disponible"
                },
                "naf_division_title": "Fabrication de boissons",
                "job_title": null
            }
        ],
        "favorites": [],
        "convs": [],
        "loc_announcements": [],
        "rec_announcements": [],
        "select_announcements": [{
            "id": 1,
            "title": "recherche alternance",
            "description": "zhfjfvj sggjbdsjvjsh shgsghvf",
            "publish_date": "2023-02-01T00:00:00",
            "status": {
                "id": 1,
                "status": "Privée"
            },
            "naf_division_title": "Fabrication de boissons",
            "job_title": null
        },
        {
            "id": 2,
            "title": "recherche alternance",
            "description": "gjkjhg dgfsdssdhgv hjgjhdfgvxc",
            "publish_date": "2022-12-31T00:00:00",
            "status": {
                "id": 2,
                "status": "Disponible"
            },
            "naf_division_title": "Fabrication de boissons",
            "job_title": null
        },
        {
            "id": 3,
            "title": "recherche alternance",
            "description": "gjkjhg dgfsdssdhgv hjgjhdfgvxc",
            "publish_date": "2022-12-31T00:00:00",
            "status": {
                "id": 2,
                "status": "Disponible"
            },
            "naf_division_title": "Fabrication de boissons",
            "job_title": null
        },
        {
            "id": 4,
            "title": "recherche alternance",
            "description": "gjkjhg dgfsdssdhgv hjgjhdfgvxc",
            "publish_date": "2022-12-31T00:00:00",
            "status": {
                "id": 2,
                "status": "Disponible"
            },
            "naf_division_title": "Fabrication de boissons",
            "job_title": null
        }],
        "recent_search": [],
    })

    return (
        <myAppContextUserInfo.Provider value={{
            userInfo: userInfo,
            dispatchUserInfo: dispatchUserInfo
        }}>
            {children}
        </myAppContextUserInfo.Provider>
    )
}
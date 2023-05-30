import { getSportsSQL, createSportSQL, getSportSQL } from "../utils/database.js"

export const getSports = async (req, res) => {
    const sports = await getSportsSQL()
    console.log(sports)
}

export const createSport = async (req, res) => {
    const sports = await createSportSQL('hello')
    console.log(sports)
}

export const getSport = async (req, res) => {
    const sports = await getSportSQL()
    console.log(sports)
}



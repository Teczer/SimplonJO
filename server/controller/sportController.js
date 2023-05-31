import { getSportsSQL, createSportSQL, getSportSQL } from "../utils/database.js"

export const getSports = async (req, res) => {
    const sports = await getSportsSQL()
    console.log(sports)
}
////
export const deleteSport = async (req, res) => {
    await deleteSportSQL()
}
export const modifySport = async (req, res) => {
    await modifySportSQL()
}

export const createSport = async (req, res) => {
    const sport = await createSportSQL('hello')
    console.log(sport)
}

export const getSport = async (req, res) => {
    const sport = await getSportSQL()
    console.log(sport)
}
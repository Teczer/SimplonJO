import { getSportsSQL } from "../utils/database.js"

export const getSports = async (req, res) => {
    const sports = await getSportsSQL()
    console.log(sports)
}
////
export const deleteSport = async (req, res) => {
    await deleteSportsSQL()
}
export const modifySport = async (req, res) => {
    await modifySportsSQL()
}
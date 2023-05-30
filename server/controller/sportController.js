import { getSportsSQL } from "../utils/database.js"

export const getSports = async (req, res) => {
    const sports = await getSportsSQL()
    console.log(sports)
}
////
export const deleteSports = async (req, res) => {
    const sports = await deleteSportsSQL()
    console.log(sports)
}
export const modifySports = async (req, res) => {
    const sports = await modifySportsSQL()
    console.log(sports)
}
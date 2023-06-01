import {
    getEpreuvesSQL,
getEpreuveSQL,
createEpreuveSQL,
updateEpreuveSQLById,
deleteEpreuveSQLById
} from "../utils/epreuve.js";

export const getEpreuves = async (req, res) => {
   const epreuves = await getEpreuvesSQL()
   res.json(epreuves)
}

export const createEpreuve = async (req, res) => {
    const {nom, sportId} = req.body;

    try{
        await createEpreuveSQL(nom, sportId)
    }catch(error){
        console.log(error)
    }

    res.status(200)
}

export const getEpreuveById = async (req, res) => {
    const {id} = req.params

    const epreuve = await getEpreuveSQL(id)

    res.json(epreuve)
}

export const updateEpreuveById = async (req, res) => {
    const {nom, sportId} = req.body
    const {id} = req.params

    await updateEpreuveSQLById(nom, sportId, id)

    res.status(200)
}

export const deleteEpreuveById = async (req, res) => {
    const {id} = req.params

    await deleteEpreuveSQLById(id)

    res.status(200)
}
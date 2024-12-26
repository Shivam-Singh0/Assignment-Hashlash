import { pool } from "./db.js"

export const saveFavorite = async (req, res) => {
    try {
        const {name, country, web_page} = req.body
     
        const data = await pool.query("INSERT INTO tbl_Univeristy (name, country,  web_page) VALUES (?, ?, ?)", [name, country, web_page])
        res.json(data)
    } catch (error) {
        res.status(500).json(error)
        
    }
}

export const getFavorites = async (req, res) => {
    
    try {
     
        const [data] = await pool.query("SELECT * FROM tbl_Univeristy")
        res.json(data)
    } catch (error) {
        res.status(500).json(error)
    }
}
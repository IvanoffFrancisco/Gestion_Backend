import {pool} from '../conexionDB.js';


export const getPersonas=async (req,res)=>{
    const [result]= await pool.query("SELECT * FROM persona");
    res.json(result);
}
import {Router} from 'express';
import {pool} from '../conexionDB.js';
const router=Router();

router.get("/api/persona",async (req,res)=>{
    const [result]= await pool.query("SELECT * FROM persona");
    res.json(result);
});

router.get("/api/persona/:id", async (req,res)=>{
    const {id}=req.params;
    const [result]= await pool.query("SELECT * FROM persona WHERE id_persona = ?",[id]);
    res.json(result);
})

router.post("/api/persona",async(req,res)=>{
    const {nombres,apellidos,dni,domicilio}=req.body;
    const resultado=await pool.query("INSERT INTO persona (nombres,apellidos,dni,domicilio) value (?,?,?,?)",[nombres,apellidos,dni,domicilio]);
    res.send(resultado);
})


router.put("/api/persona",async (req,res)=>{
    const {nombres,apellidos,dni,domicilio,id_persona}=req.body;
    const resultado=await pool.query("UPDATE persona SET nombres=?,apellidos=?,dni=?,domicilio=? WHERE id_persona=?",[nombres,apellidos,dni,domicilio,id_persona]);
    res.send(resultado);
})

router.delete("/api/persona/:id",async(req,res)=>{
    const {id}=req.params;
    const resultado=await pool.query("DELETE FROM persona WHERE id_persona=?",[id]);
    res.send(resultado);
})

export default router;
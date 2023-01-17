import {Router} from 'express';
import {pool} from '../conexionDB.js';
const router=Router();

router.post("/api/login/", async (req,res)=>{
    const {correo,contraseña}=req.body;
    const [result]= await pool.query("SELECT * FROM usuario WHERE correo=? AND contraseña=?",[correo,contraseña]);
    res.json(result);
})

router.post("/api/registro",async(req,res)=>{
    const {nombre,apellido,correo,contraseña,tipo_usuario}=req.body;
    const resultado=await pool.query("INSERT INTO usuario (nombre,apellido,correo,contraseña,tipo_usuario) value (?,?,?,?,?)",[nombre,apellido,correo,contraseña,tipo_usuario]);
    res.send(resultado);
})


router.put("/api/usuario",async (req,res)=>{
    const {id_usuario,nombre,apellido,correo,contraseña,tipo_usuario}=req.body;
    const resultado=await pool.query("UPDATE usuario SET nombre=?,apellido=?,correo=?,contraseña=?,tipo_usuario=? WHERE id_usuario=?",[nombre,apellido,correo,contraseña,tipo_usuario,id_usuario]);
    res.send(resultado);
})

router.delete("/api/usuario/:id",async(req,res)=>{
    const {id}=req.params;
    const resultado=await pool.query("DELETE FROM usuario WHERE id_usuario=?",[id]);
    res.send(resultado);
})

export default router;
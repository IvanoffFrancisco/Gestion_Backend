import {Router} from 'express';
import {pool} from '../conexionDB.js'

const router=Router();

// router.get("/api/residente",async (req,res)=>{
//     const resultado=await pool.query("SELECT * FROM residente");
//     res.send(resultado);
// });
router.get("/api/residente",async (req,res)=>{
    const date=new Date();

    const [results]=await pool.query("SELECT residente.id_residente,residente.frente,residente.fondo,residente.estado,residente.vencimiento_tramite,residente.direccion, persona.id_persona, persona.nombres,persona.apellidos,persona.dni,persona.domicilio FROM residente INNER JOIN persona ON residente.id_persona = persona.id_persona");
    res.json(results);
    
    // console.log(date);
    // res.send(results[0].vencimiento_tramite);
    

    // if(results[0].vencimiento_tramite===
    //     date){
    //         console.log("son iguales");
    //     }else{
    //         console.log("no son iguales");
    //     }
});

router.post("/api/residente",async(req,res)=>{
    const {id_persona,frente,fondo,estado,vencimiento_tramite,direccion}=req.body;
    const [result]=await pool.query("INSERT INTO residente (id_persona,frente,fondo,estado,vencimiento_tramite,direccion) VALUES (?,?,?,?,?,?)",[id_persona,frente,fondo,estado,vencimiento_tramite,direccion]);
    res.send(result);
})

export default router;
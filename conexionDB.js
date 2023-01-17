import {createPool} from 'mysql2/promise';

//conexion simple a mysql
export const pool=createPool({
    host:"localhost",
    user:"root",
    password:"",
    port:3306,
    database:"gestion_obras"
})




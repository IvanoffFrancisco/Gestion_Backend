import app from './server.js';
import persona from'./routes/persona.routes.js';
import usuario from './routes/usuario.routes.js'
import residente from './routes/residente.routes.js'

//rutas
app.use(persona);
app.use(usuario);
app.use(residente);

//inicio del servidor
app.listen(app.get('PORT'),()=>{
    console.log("server en ",app.get('PORT'));
});


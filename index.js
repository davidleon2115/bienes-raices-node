import express, { urlencoded } from "express";
import usuarioRoutes from "./routes/usuarioRoutes.js";
import db from "./config/db.js";

//Crear la app
const app = express();

//Habilitar lectura de datos de formularios
app.use( urlencoded({extended: true}) )

//Conexion a la base de datos
try {
    await db.authenticate();
    console.log("Base de Datos conectada");
} catch (error) {
    console.log(error)
}

//Routing
app.use('/auth', usuarioRoutes)

//Habilitar pug
app.set('view engine', 'pug');
app.set('views', './views')

//Carpeta pública
app.use(express.static('public'))

//Definir un puerto y arrancar el proyecto
const port = 3000;

app.listen(port, ()=>{
    console.log(`El servidor está funcionando en el puerto ${port}`)
})
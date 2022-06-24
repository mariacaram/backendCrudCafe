import express from 'express'
import morgan from "morgan"
import cors from "cors"

const app = express();

app.set ("port", process.env.PORT || 4000)

app.listen(app.get("port"), ()=>{
    console.log ("estoy usando el puerto" + app.get ("port"))
})

console.log ("hola mundo")

//configuraciones de midlewares

app.use(morgan("dev"));
app.use(cors())
app.use(express.json())
express.urlencoded ({extended:true})

//crear ruta

app.get("/", (req,res) => {res.send ("esto es una repsuesta desde el backend")})
app.delete("/borrarproducto", (req,res) => {res.send ("peticion para borrar")})
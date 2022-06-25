import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import routes from "./routes/producto.routes";
const app = express();
app.set("port", process.env.PORT || 4000);
app.listen(app.get("port"), () => {
  console.log("estoy usando el puerto" + app.get("port"));
  console.log(path.join(__dirname, "../public"));
});
console.log("hola mundo");
//configuraciones de midlewares

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
express.urlencoded({ extended: true });
//configurar el index.html
app.use(express.static(path.join(__dirname, "../public")));

//crear ruta

app.use("/apicafeteria", routes);

// app.get("/", (req, res) => {
//   res.send("esto es una repsuesta desde el backend");
// });

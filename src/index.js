const express = require("express");
const app = express();

///uso de midleware

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//uso de rutas

app.use(require("./routes/index"));

app.listen(3000);
console.log("server on port 3000");

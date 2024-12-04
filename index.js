import express from "express";
const app = express();

import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/src/index.html");
});

app.get("/listar", (req, res) => {
  res.sendFile(__dirname + "/src/listar.html");
});

app.get("/cadastrar", (req, res) => {
  res.sendFile(__dirname + "/src/cadastrar.html");
});

app.listen(3000, () => {
  console.log("Servidor online em http://localhost:3000");
});

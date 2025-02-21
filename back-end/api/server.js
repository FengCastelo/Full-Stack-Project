//API - Application Programming Interface;
//GET, POST, PATCH, DELETE;
//CRUD Create, Read, Update, Delete;
// express -> middleware -> função que ocorre entre o listen do servidor/api e a request;
// Endpoint
//express.json -> transforma toda request .txt em json;

import express from "express";
import cors from "cors";
import { db } from "./connect.js";

const app = express();
const PORT = 3001;

// Middlewares
app.use(cors());
app.use(express.json());

// Rota raiz
app.get("/", (req, res) => {
  res.send("Bem-vindo à API! Use os endpoints '/artists' e '/songs'.");
});

// Endpoint para buscar todos os artistas
app.get("/artists", async (req, res) => {
  try {
    const artists = await db.collection("artists").find({}).toArray();
    res.status(200).json(artists);
  } catch (error) {
    console.error("Erro ao buscar artistas:", error);
    res.status(500).json({ message: "Erro interno no servidor" });
  }
});

// Endpoint para buscar todas as músicas
app.get("/songs", async (req, res) => {
  try {
    const songs = await db.collection("songs").find({}).toArray();
    res.status(200).json(songs);
  } catch (error) {
    console.error("Erro ao buscar músicas:", error);
    res.status(500).json({ message: "Erro interno no servidor" });
  }
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});

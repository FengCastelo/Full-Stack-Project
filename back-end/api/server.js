//API - Application Programming Interface
//GET, POST, PATCH, DELETE
//CRUD Create, Read, Update, Delete

import express from "express";
import {songsArray} from "../../front-end/src/assets/database/songs.js";
import {artistArray} from "../../front-end/src/assets/database/artists.js";
import { db } from "./connect.js";


const app = express();
const PORT = 3000;

app.get("/", (request, response) => {
    response.send('Now we will use just the /artists and /songs endpoints ')
})
app.get("/artists", async (request, response) => {
    response.send(await db.collection("artists").find({}).toArray());
});
app.get("/songs", async (request, response) => {
    response.send(await db.collection("songs").find({}).toArray());
});

app.listen(PORT, () => {
    console.log(`O servidor está escutando na porta: ${PORT}`);
});

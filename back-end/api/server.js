//API - Application Programming Interface
//GET, POST, PATCH, DELETE
//CRUD Create, Read, Update, Delete
import express from "express";


const app = express();
const PORT = 3000;

app.get("/", (request, response) => {
    response.send('Now we will use just the /artists and /songs endpoints ')
})
app.get("/artists", (request, response) => {
    response.send()
})
app.get("/songs", (request, response) => {
    response.send('')
})
app.get("/", (request, response) => {
    response.send('')
})

app.listen(PORT, () => {
    console.log(`O servidor está escutando na porta: ${PORT}`);
});

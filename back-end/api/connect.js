//JavaScript Assíncrono
//await async
//insert -> usado para inserir dados no db.

import {MongoClient} from "mongodb";

const URI = "mongodb+srv://Fengcastelo:0311castelo@cluster0.opzgr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotifyproj");


// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);
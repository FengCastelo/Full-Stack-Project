//JavaScript Assíncrono
//await async

import {MongoClient} from "mongodb";

const URI = "mongodb+srv://Fengcastelo:0311castelo@cluster0.opzgr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

const db = client.db("spotifyproj");
const songCollection = await db.collection("songs").find({}).toArray();

console.log(songCollection);
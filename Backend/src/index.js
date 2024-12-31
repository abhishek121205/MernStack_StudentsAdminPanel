import dotenv from "dotenv";
import { app } from "./app.js"
import db from "./config/db.js";

dotenv.config({
    path: "./.env"
})


app.listen(8050, (err) => {
    db()
    if (err) {
        console.log("error", err);
    }
    console.log("server started at http://localhost:8050");
})
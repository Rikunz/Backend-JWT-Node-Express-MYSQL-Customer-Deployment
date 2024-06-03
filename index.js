import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import Cors from "cors";
import db from "./config/Database.js";
import router from "./routes/index.js";
dotenv.config();
const app = express();

try {
    await db.authenticate();
    console.log('Database Connected...');
} catch (error) {
    console.error(error);
}
const corsOptions = {
    origin: "https://project-thoriq.de.r.appspot.com", // Alamat domain React
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // Mengizinkan pengiriman cookies
    optionsSuccessStatus: 204,
};
app.use(Cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.listen(8080, () => console.log('Server running at port 8080'));
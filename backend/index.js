import express from "express";
import { PORT, mongoURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/BookModels.js";
import bookRoutes from "./Routes/booksRoute.js";
import cors from "cors";

const app = express();

//parsing req body

app.use(express.json());

//allow all origins with default cors

app.use(cors());

//option 2: allow custom origin

// app.use(cors({
//     origin:'http://localhost:3000',
//     methods:['GET','POST','PUT','DELETE'],
//     allowedHeaders:['Content-Type']

// }))

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Welcome to the mern stack project");
});

app.use("/books", bookRoutes);

mongoose
  .connect(mongoURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

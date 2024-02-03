import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";

const app = express();

// Middle ware for parsing request body
app.use(express.json());

// Middle ware for handling cors policy error
// Option:1 Allow all origins with default of cors(*)
app.use(cors());

// Option:1 Allow custom origins
// app.use(
//   cors({
//     origin: `http://localhost:${PORT}`,
//     methods: [`GET`, `POST`, `PUT`, `DELETE`],
//     allowedHeaders: [`Content-type`],
//   })
// );
app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Welcome to bookstore app");
});

app.use("/book", booksRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("Connected to Db");
    app.listen(PORT, () => {
      console.log(`App is running to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.error(error);
  });

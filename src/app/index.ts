import express from "express";
import mongoose from "mongoose";
import { router } from "./router";

const mongoPort = 27017;

mongoose.connect(`mongodb://localhost:${mongoPort}`)
  .then( () => {
    const app = express();
    const port = 3001;

    app.use(express.json());

    app.use(router);

    app.listen(port, () => {
      console.log(`server is running in ${port}`);
    });

  })
  .catch( () => console.log("Erro ao conectar ao Mongo"));

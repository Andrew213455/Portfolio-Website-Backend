import * as functions from "firebase-functions";
import express from "express";
import cors from "cors";

import visitorRouter from "./routes/visitorRouter";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", visitorRouter);

export const api = functions.https.onRequest(app);

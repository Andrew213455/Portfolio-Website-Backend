import express from "express";
import { getClient } from "../db";
import Visitor from "../models/Visitor";

const visitorRouter = express.Router();

const errorResponse = (error: any, res: any) => {
  console.error("FAIL", error);
  res.status(500).json({ message: "Internal Server Error" });
};

visitorRouter.get("/shoutouts", async (req, res) => {
  try {
    const client = await getClient();
    const cursor = client.db().collection<Visitor>("visitors").find();
    const results = await cursor.toArray();
    res.json(results);
  } catch (err) {
    errorResponse(err, res);
  }
});

export default visitorRouter;

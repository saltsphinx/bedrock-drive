import { Router } from "express";
import notAuthenticated from "./helper/notAuthenticated.js";
const filesRouter = Router();

filesRouter.post("/", async (req, res) => {
  const { file } = req.files;

  await file.mv("./files/" + file.name);

  res.end();
});

export default filesRouter;

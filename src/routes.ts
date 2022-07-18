import express from "express";
import { candidatesController } from "./controllers/candidates-controller";
import { companiesController } from "./controllers/companies-controller";
import { Candidate } from "./models/candidate";

const router = express.Router();

router.get("/", (req, res) => res.json({ hello: "Hello, World!" }));

router.get("/candidates", candidatesController.index);
router.get("/candidates/:id", candidatesController.show);
router.post("/candidates/", candidatesController.save);
router.put("/candidates/:id", candidatesController.update);
router.delete("/candidates/:id", candidatesController.delete);

router.get("/companies", companiesController.index);

export { router };

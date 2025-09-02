import express from "express";
import Startup from "../models/startup.js";

const router = express.Router();

// POST: add startup data
router.post("/", async (req, res) => {
  try {
    const startup = new Startup(req.body);
    await startup.save();
    res.json(startup);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET: fetch all startups
router.get("/", async (req, res) => {
  try {
    const startups = await Startup.find();
    res.json(startups);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;

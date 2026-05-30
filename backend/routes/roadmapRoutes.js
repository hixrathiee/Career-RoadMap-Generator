const express = require("express");

const router = express.Router();

const {
  createRoadmap,getAllRoadmaps,deleteRoadmap
} = require("../controllers/roadmapController");

router.post("/generate", createRoadmap);
router.get("/", getAllRoadmaps);
router.delete("/:id", deleteRoadmap);
module.exports = router;
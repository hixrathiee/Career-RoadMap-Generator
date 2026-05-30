const Roadmap = require("../models/Roadmap");
const generateRoadmap = require("../services/roadmapService");

const createRoadmap = async (req, res) => {
  try {
    const {
      targetRole,
      currentSkills,
      experienceLevel,
    } = req.body;

    if (!targetRole || !currentSkills || !experienceLevel) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const roadmap = generateRoadmap(
      targetRole,
      currentSkills,
      experienceLevel
    );

    const newRoadmap = await Roadmap.create({
      targetRole,
      currentSkills,
      experienceLevel,
      roadmap,
    });

    res.status(201).json(newRoadmap);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getAllRoadmaps = async (req, res) => {
  try {
    const roadmaps = await Roadmap.find().sort({
      createdAt: -1,
    });

    res.status(200).json(roadmaps);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteRoadmap = async (req, res) => {
  try {
    const roadmap = await Roadmap.findByIdAndDelete(
      req.params.id
    );

    if (!roadmap) {
      return res.status(404).json({
        message: "Roadmap not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Roadmap deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
module.exports = {
  createRoadmap,getAllRoadmaps,deleteRoadmap
};
const express = require("express");
const router = express.Router();
const Project = require("../models/Project");

// Create a new project
router.post("/create", async (req, res) => {
    try {
        const project = new Project(req.body);
        await project.save();
        res.status(201).json({ message: "Project created successfully", project });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get all projects
router.get("/all", async (req, res) => {
    try {
        const projects = await Project.find();
        res.status(200).json(projects);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update project status
router.put("/update/:id", async (req, res) => {
    try {
        const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedProject);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete a project
router.delete("/delete/:id", async (req, res) => {
    try {
        await Project.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Project deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;

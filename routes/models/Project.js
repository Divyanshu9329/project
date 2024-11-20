const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    teamMembers: [{ type: String, required: true }],
    deadline: { type: Date, required: true },
    milestones: [{ type: String }],
    status: { type: String, enum: ["Pending", "In Progress", "Completed"], default: "Pending" }
});

module.exports = mongoose.model("Project", ProjectSchema);

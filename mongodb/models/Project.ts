import mongoose, { Schema, model, models } from "mongoose";

const ProjectSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Project title is required"],
    },
    description: {
      type: String,
      required: true,
    },
    link: {
      type: String, // Optional: Link to the live project or GitHub
      required: false,
    },
  },
  { timestamps: true }, // Adds createdAt and updatedAt automatically
);

// Prevent overwriting the model if it already exists
const Project = models.Project || model("Project", ProjectSchema);

export default Project;

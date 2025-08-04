// Import mongoose
const mongoose = require("mongoose");

// Define the user schema
const projectSchema = new mongoose.Schema({
  ProjectName: {
    type: String,
    required: true,
    trim: true,
  },
  ProjectCategory: {
    type: String,
    required: true,
    trim: true,
  },
  ProjectDescription: {
    type: String,
    required: true,
    trim: true,
  },
  Image: {
    type: String,
    required: false,
  },
  publicId: {
    type: String,
    // required: true,
  },
});

// Create a model from the schema
const Project =
  mongoose.models.Project || mongoose.model("Project", projectSchema);

// Export the model
export default Project;

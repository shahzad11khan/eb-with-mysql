// Import mongoose
const mongoose = require("mongoose");

// Define the user schema
const vacancySchema = new mongoose.Schema({
  VacancyTitle: {
    type: String,
    required: true,
    trim: true,
  },
  Requireds: {
    type: String,
    required: true,
    // trim: true,
  },
  Experience: {
    type: String,
    required: false,
  },
});

// Create a model from the schema
const Vacancy =
  mongoose.models.Vacancy || mongoose.model("Vacancy", vacancySchema);

// Export the model
export default Vacancy;

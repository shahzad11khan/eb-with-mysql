// Import mongoose
const mongoose = require("mongoose");

// Define the user schema
const RequestForJoiningSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    match: [/.+\@.+\..+/, "Please fill a valid email address"],
  },
  phone: {
    type: String,
    trim: true,
  },

  experience: {
    type: String,
    required: false,
  },
  expected_salary: {
    type: String,
    required: false,
  },
  file_cv: {
    type: String,
    required: false,
  },

  publicId: {
    type: String,
    // required: true,
  },
});

// Create a model from the schema
const RequestForJoining =
  mongoose.models.RequestForJoining ||
  mongoose.model("RequestForJoining", RequestForJoiningSchema);

// Export the model
export default RequestForJoining;

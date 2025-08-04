// Import mongoose
const mongoose = require("mongoose");

// Define the user schema
const GetInTouchSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
    match: [/\S+@\S+\.\S+/, "Please enter a valid email address"],
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },
  message: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: function (value) {
        const wordCount = value
          .split(/\s+/)
          .filter((word) => word.length > 0).length;
        return wordCount >= 5 && wordCount <= 100; // Adjust the min and max word count as needed
      },
      message: "Message must be between 5 and 100 words",
    },
  },
});

// Create a model from the schema
const GetInTouch =
  mongoose.models.GetInTouch || mongoose.model("GetInTouch", GetInTouchSchema);

// Export the model
export default GetInTouch;

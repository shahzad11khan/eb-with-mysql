const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
    trim: true,
  },
  blogtitle: {
    type: String,
    required: true,
    trim: true,
  },
  author: {
    type: String,
    required: true,
    trim: true,
  },
  datetime: {
    type: String, // Change to Date type if storing date and time
    required: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },

  publicId: {
    type: String,
    // required: true,
  },
});

// Create a model from the schema
const BlogModel =
  mongoose.models.BlogModel || mongoose.model("BlogModel", BlogSchema);
// Export the model
export default BlogModel;

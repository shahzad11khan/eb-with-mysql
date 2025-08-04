
// const mongoose = require("mongoose");

// const teamSchema = new mongoose.Schema({
//   username: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   email: {
//     type: String,
//     trim: true,
//     match: [/.+\@.+\..+/, "Please fill a valid email address"],
//   },
//   designation: {
//     type: String,
//     trim: true,
//   },

//   image: {
//     type: String,
//     required: false,
//   },
//   LinkedIn: {
//     type: String,
//     trim: true,
//   },
//   Github: {
//     type: String,
//     trim: true,
//   },
//   publicId: {
//     type: String,
//     // required: true,
//   },
// });

// const Team = mongoose.models.Team || mongoose.model("Team", teamSchema);

// export default Team;




const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    match: [/.+\@.+\..+/, "Please fill a valid email address"],
  },
  designation: {
    type: String,
    trim: true,
  },
  image: {
    type: String,
    required: false,
  },
  LinkedIn: {
    type: String,
    trim: true,
  },
  Github: {
    type: String,
    trim: true,
  },
  publicId: {
    type: String,
  },
  order: {
    type: Number,
    required: true,
  },
});

const Team = mongoose.models.Team || mongoose.model("Team", teamSchema);

export default Team;
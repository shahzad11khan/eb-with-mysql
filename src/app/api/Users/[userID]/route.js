const { connect } = require("@/app/config/db");
const User = require("@/app/models/UserModel").default;
const { NextResponse } = require("next/server");
import { writeFile, unlink } from "fs/promises";
import bcrypt from "bcrypt";
import path from "path";

import cloudinary from "cloudinary";

// Configure Cloudinary
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// export async function DELETE(request, context) {
//   try {
//     const id = context.params.userID;
//     console.log(id);

//     // Connect to the database
//     await connect();

//     // Find the user by ID
//     const user = await User.findById(id);

//     // Check if the user exists
//     if (!user) {
//       return NextResponse.json({ message: "User not found", status: 404 });
//     }

//     // Get the image file path
//     console.log("user:", user);
//     const imagePublicId = user.publicId; // Ensure this matches your schema
//     console.log("Image Public ID:", imagePublicId);
//     // return;

//     // Delete the user from the database
//     const _deletedUser = await User.findByIdAndDelete(id);

//     // Check if the user was found and deleted
//     if (!_deletedUser) {
//       return NextResponse.json({ message: "User not found", status: 404 });
//     }

//     // Delete the image from Cloudinary if publicId exists
//     if (imagePublicId) {
//       try {
//         const cloudinaryResponse = await cloudinary.v2.uploader.destroy(
//           imagePublicId
//         );
//         console.log(`Cloudinary response: ${cloudinaryResponse.result}`);
//       } catch (error) {
//         console.error("Failed to delete image from Cloudinary:", error);
//       }
//     }

//     return NextResponse.json({
//       message: "User deleted successfully",
//       status: 200,
//     });
//   } catch (error) {
//     console.error("Error deleting user:", error);
//     // Return an error response
//     return NextResponse.json({ error: "Failed to delete user", status: 500 });
//   }
// }

// pages/api/users/[userID].js
// export async function PUT(request, context) {
//   try {
//     await connect();
//     const id = context.params.userID;

//     const data = await request.formData();

//     const file = data.get("Image");
//     console.log(typeof file);
//     let filename = null;
//     let buffer = null;
//     let newImagePublicId = null;

//     if (typeof file === "object") {
//       filename = file.name;
//       const byteData = await file.arrayBuffer();
//       buffer = Buffer.from(byteData);
//       // Upload the new image to Cloudinary
//       const uploadResponse = await new Promise((resolve, reject) => {
//         const uploadStream = cloudinary.v2.uploader.upload_stream(
//           { resource_type: "auto" },
//           (error, result) => {
//             if (error) {
//               reject(error);
//             } else {
//               resolve(result);
//             }
//           }
//         );
//         uploadStream.end(buffer);
//       });

//       filename = uploadResponse.secure_url;
//       newImagePublicId = uploadResponse.public_id;

//       // console.log("New Image URL:", newImageUrl);
//       // console.log("New Image Public ID:", newImagePublicId);
//     }

//     const formDataObject = {};

//     // Iterate over form data entries
//     for (const [key, value] of data.entries()) {
//       // Assign each field to the formDataObject
//       formDataObject[key] = value;
//     }
//     console.log("data from frontend", formDataObject);
//     const { username, email, password, confirmpassword } = formDataObject;

//     // Check if the user exists
//     const user = await User.findById(id);
//     if (!user) {
//       return NextResponse.json({ error: "User not found" }, { status: 404 });
//     }

//     // Update the user details
//     user.username = username || user.username;
//     user.email = email || user.email;
//     console.log("old public id:", user.publicId);
//     console.log("old image url", user.Image);

//     if (password !== confirmpassword) {
//       return NextResponse.json({
//         message: "Both password and confirmpassword must be same",
//       });
//     }

//     if (password) {
//       const salt = await bcrypt.genSalt(10);
//       user.password = await bcrypt.hash(password, salt);
//     }

//     if (confirmpassword) {
//       user.confirmpassword = confirmpassword;
//     }

//     if (filename) {
//       user.Image = filename;
//     }

//     if (filename && newImagePublicId) {
//       // If a new image is uploaded, remove the old image from Cloudinary
//       if (user.publicId) {
//         try {
//           await cloudinary.uploader.destroy(user.publicId);
//           console.log("file deleted");
//         } catch (error) {
//           console.error("Failed to delete old image from Cloudinary:", error);
//         }
//       }

//       // Update blog with new image URL and public ID
//       user.Image = filename;
//       console.log("new image url", user.Image);

//       user.publicId = newImagePublicId;
//       console.log("new image public id :", user.publicId);
//     }

//     await user.save();

//     return NextResponse.json({ message: "User updated successfully", user });
//   } catch (error) {
//     console.error("Error Updating User:", error);
//     return NextResponse.json(
//       { error: "Failed to update user" },
//       { status: 500 }
//     );
//   }
// }

// get specific
// export async function GET(request, context) {
//   try {
//     await connect();
//     const id = context.params.userID;
//     console.log(id);
//     const Specific_User = await User.findById(id);
//     if (!Specific_User) {
//       return NextResponse.json({ result: "No User Availible" });
//     } else {
//       return NextResponse.json({ Result: Specific_User });
//     }
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ Message: "Internal Server Error " });
//   }
// }


// mysql method

// import { connect } from "@/app/config/db"; // MySQL connection
// import { NextResponse } from "next/server";

export async function GET(request, context) {
  try {
    const connection = await connect();

    const id = context.params.userID;
    console.log("Requested User ID:", id);

    const [rows] = await connection.query("SELECT * FROM users WHERE id = ?", [id]);

    // console.log("Fetched User:", rows[0]);

    if (rows.length === 0) {
      return NextResponse.json({ result: "No User Available" });
    } else {
      return NextResponse.json({ result: rows[0] });
    }
  } catch (error) {
    console.error("Error fetching specific user:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}


// import { connect } from "@/app/config/db"; // MySQL DB connection
// import { NextResponse } from "next/server";
// import bcrypt from "bcryptjs";
// import cloudinary from "cloudinary";

// Cloudinary config (optional: can be moved to a separate config file)
// cloudinary.v2.config({
//   cloud_name: process.env.CLOUDINARY_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

export async function PUT(request, context) {
  try {
    const connection = await connect();
    const id = context.params.userID;

    const data = await request.formData();

    const file = data.get("Image");
    let filename = null;
    let buffer = null;
    let newImagePublicId = null;

    if (typeof file === "object") {
      const byteData = await file.arrayBuffer();
      buffer = Buffer.from(byteData);

      const uploadResponse = await new Promise((resolve, reject) => {
        const uploadStream = cloudinary.v2.uploader.upload_stream(
          { resource_type: "auto" },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        );
        uploadStream.end(buffer);
      });

      filename = uploadResponse.secure_url;
      newImagePublicId = uploadResponse.public_id;
    }

    const formDataObject = {};
    for (const [key, value] of data.entries()) {
      formDataObject[key] = value;
    }

    const { username, email, password, confirmpassword } = formDataObject;

    // Get the existing user
    const [users] = await connection.query("SELECT * FROM users WHERE id = ?", [id]);
    if (users.length === 0) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const existingUser = users[0];

    if (password && password !== confirmpassword) {
      return NextResponse.json({
        message: "Both password and confirmpassword must be same",
      });
    }

    let hashedPassword = existingUser.password;
    if (password) {
      const salt = await bcrypt.genSalt(10);
      hashedPassword = await bcrypt.hash(password, salt);
    }

    // Delete old image from Cloudinary if new image is uploaded
    if (filename && existingUser.publicId) {
      try {
        await cloudinary.v2.uploader.destroy(existingUser.publicId);
      } catch (err) {
        console.error("Failed to delete old image from Cloudinary:", err);
      }
    }

    const updateQuery = `
      UPDATE users SET
        username = ?,
        email = ?,
        password = ?,
        image = ?,
        publicId = ?
      WHERE id = ?
    `;

    await connection.query(updateQuery, [
      username || existingUser.username,
      email || existingUser.email,
      hashedPassword,
      filename || existingUser.image,
      newImagePublicId || existingUser.publicId,
      id,
    ]);

    return NextResponse.json({ message: "User updated successfully" });

  } catch (error) {
    console.error("Error Updating User:", error);
    return NextResponse.json({ error: "Failed to update user" }, { status: 500 });
  }
}


export async function DELETE(request, context) {
  try {
    const id = context.params.userID;
    console.log("User ID to delete:", id);

    const connection = await connect();

    // Check if the user exists
    const [users] = await connection.query("SELECT * FROM users WHERE id = ?", [id]);

    if (users.length === 0) {
      return NextResponse.json({ message: "User not found", status: 404 });
    }

    const user = users[0];
    const imagePublicId = user.publicId;
    console.log("Image Public ID:", imagePublicId);

    // Delete user from database
    const [result] = await connection.query("DELETE FROM users WHERE id = ?", [id]);

    if (result.affectedRows === 0) {
      return NextResponse.json({ message: "User not found", status: 404 });
    }

    // Delete image from Cloudinary
    if (imagePublicId) {
      try {
        const cloudinaryResponse = await cloudinary.v2.uploader.destroy(imagePublicId);
        console.log("Cloudinary response:", cloudinaryResponse.result);
      } catch (err) {
        console.error("Failed to delete image from Cloudinary:", err);
      }
    }

    return NextResponse.json({
      message: "User deleted successfully",
      status: 200,
    });
  } catch (error) {
    console.error("Error deleting user:", error);
    return NextResponse.json({ error: "Failed to delete user", status: 500 });
  }
}

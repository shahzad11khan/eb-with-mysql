const { connect } = require("@/app/config/db");
// const { default: Team } = require("@/app/models/TeamModel");
const { NextResponse } = require("next/server");
import cloudinary from "cloudinary";

// Configure Cloudinary
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Delete team member
// export async function DELETE(request, context) {
//   try {
//     const id = context.params.teamID;
//     console.log(id);

//     // Connect to the database
//     await connect();

//     // Find the user by ID
//     const Find_Team = await Team.findById(id);

//     // Check if the user exists
//     if (!Find_Team) {
//       return NextResponse.json({ message: "Request not found", status: 404 });
//     }

//     console.log("Team:", Find_Team);
//     const imagePublicId = Find_Team.publicId; // Ensure this matches your schema
//     console.log("Image Public ID:", imagePublicId);

//     // Delete the user from the database
//     const _deletedUser = await Team.findByIdAndDelete(id);

//     // Check if the user was found and deleted
//     if (!_deletedUser) {
//       return NextResponse.json({
//         message: "Failed to delete Team",
//         status: 500,
//       });
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
//       message: "team member deleted successfully",
//       status: 200,
//     });
//   } catch (error) {
//     console.error("Error deleting user:", error);
//     // Return an error response
//     return NextResponse.json({ error: "Failed to delete user", status: 500 });
//   }
// }

// get Secific
// export async function GET(request, context) {
//   try {
//     await connect();
//     const id = context.params.teamID;
//     console.log(id);
//     const Find_team = await Team.findById(id);
//     if (!Find_team) {
//       return NextResponse.json({ result: "No Request Availible" });
//     } else {
//       return NextResponse.json({ Result: Find_team });
//     }
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ Message: "Internal Server Error " });
//   }
// }

// pages/api/users/[userID].js
// export async function PUT(request, context) {
//   try {
//     await connect();
//     const id = context.params.teamID;
//     console.log(id);
//     const data = await request.formData();

//     const file = data.get("image");
//     console.log(file);
//     let filename = null;
//     let newImagePublicId = null;

//     if (typeof file === "object") {
//       filename = file.name;
//       const byteData = await file.arrayBuffer();
//       const buffer = Buffer.from(byteData);

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

//         // Write buffer to the upload stream
//         uploadStream.end(buffer);
//       });

//       filename = uploadResponse.secure_url;
//       newImagePublicId = uploadResponse.public_id;
//     }

//     const formDataObject = {};

//     // Iterate over form data entries
//     for (const [key, value] of data.entries()) {
//       // Assign each field to the formDataObject
//       formDataObject[key] = value;
//     }

//     const { username, email, designation } = formDataObject;
//     console.log(username, email, designation);
//     // Check if the user exists
//     const team = await Team.findById(id);
//     if (!team) {
//       return NextResponse.json({ error: "User not found" }, { status: 404 });
//     }

//     // Update the user details
//     team.username = username || team.username;
//     team.email = email || team.email;
//     team.designation = designation || team.designation;
//     console.log("old public id:", team.publicId);
//     console.log("old image url", team.image);

//     if (filename && newImagePublicId) {
//       // If a new image is uploaded, remove the old image from Cloudinary
//       if (team.publicId) {
//         try {
//           await cloudinary.uploader.destroy(team.publicId);
//           console.log("file deleted");
//         } catch (error) {
//           console.error("Failed to delete old image from Cloudinary:", error);
//         }
//       }

//       // Update blog with new image URL and public ID
//       team.image = filename;
//       console.log("new image url", team.image);

//       team.publicId = newImagePublicId;
//       console.log("new image public id :", team.publicId);
//     }
//     await team.save();

//     return NextResponse.json({
//       message: "team member record updated successfully",
//       team,
//     });
//   } catch (error) {
//     console.error("Error Updating User:", error);
//     return NextResponse.json(
//       { error: "Failed to update user" },
//       { status: 500 }
//     );
//   }
// }


// mysql method
export async function GET(request, context) {
  try {
    const db = await connect();
    const id = context.params.teamID;
    console.log("Team ID:", id);

    const [rows] = await db.query("SELECT * FROM team WHERE id = ?", [id]);

    if (rows.length === 0) {
      return NextResponse.json({ result: "No Request Available" });
    } else {
      return NextResponse.json({ Result: rows[0] });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ Message: "Internal Server Error" }, { status: 500 });
  }
}


export async function DELETE(request, context) {
  try {
    const id = context.params.teamID;
    console.log("Team ID:", id);

    const db = await connect();

    // 1. Check if user exists
    const [rows] = await db.query("SELECT * FROM team WHERE id = ?", [id]);

    if (rows.length === 0) {
      return NextResponse.json({ message: "Request not found", status: 404 });
    }

    const teamMember = rows[0];
    const imagePublicId = teamMember.publicId;
    console.log("Image Public ID:", imagePublicId);

    // 2. Delete from MySQL
    const [deleteResult] = await db.query("DELETE FROM team WHERE id = ?", [id]);

    if (deleteResult.affectedRows === 0) {
      return NextResponse.json({
        message: "Failed to delete team member",
        status: 500,
      });
    }

    // 3. Delete image from Cloudinary (if publicId exists)
    if (imagePublicId) {
      try {
        const cloudinaryResponse = await cloudinary.v2.uploader.destroy(imagePublicId);
        console.log(`Cloudinary response: ${cloudinaryResponse.result}`);
      } catch (cloudError) {
        console.error("Cloudinary deletion failed:", cloudError);
      }
    }

    return NextResponse.json({
      message: "Team member deleted successfully",
      status: 200,
    });
  } catch (error) {
    console.error("Error deleting team member:", error);
    return NextResponse.json({ error: "Failed to delete user", status: 500 });
  }
}


export async function PUT(request, context) {
  try {
    const id = context.params.teamID;
    const db = await connect();
    const data = await request.formData();

    const file = data.get("image");
    let newImageUrl = null;
    let newImagePublicId = null;

    if (file && typeof file === "object") {
      const byteData = await file.arrayBuffer();
      const buffer = Buffer.from(byteData);

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

      newImageUrl = uploadResponse.secure_url;
      newImagePublicId = uploadResponse.public_id;
    }

    // Extract other fields
    const formDataObject = {};
    for (const [key, value] of data.entries()) {
      formDataObject[key] = value;
    }

    const { username, email, designation } = formDataObject;

    // Fetch existing team member
    const [rows] = await db.query("SELECT * FROM team WHERE id = ?", [id]);
    if (rows.length === 0) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const existingMember = rows[0];

    // Delete old image from Cloudinary (if new uploaded)
    if (newImageUrl && existingMember.publicId) {
      try {
        await cloudinary.v2.uploader.destroy(existingMember.publicId);
        console.log("Old image deleted from Cloudinary");
      } catch (err) {
        console.error("Failed to delete old image:", err);
      }
    }

    // Update MySQL record
    const [updateResult] = await db.query(
      `UPDATE team SET 
        username = ?, 
        email = ?, 
        designation = ?, 
        image = ?, 
        publicId = ?
      WHERE id = ?`,
      [
        username || existingMember.username,
        email || existingMember.email,
        designation || existingMember.designation,
        newImageUrl || existingMember.image,
        newImagePublicId || existingMember.publicId,
        id,
      ]
    );

    return NextResponse.json({
      message: "Team member updated successfully",
      status: 200,
    });
  } catch (error) {
    console.error("Error updating team member:", error);
    return NextResponse.json(
      { error: "Failed to update team member" },
      { status: 500 }
    );
  }
}
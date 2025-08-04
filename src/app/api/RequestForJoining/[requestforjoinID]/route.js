const { connect } = require("@/app/config/db");
const { default: RequestForJoining } = require("@/app/models/RequestOfJoining");
const { NextResponse } = require("next/server");
import cloudinary from "cloudinary";

// Configure Cloudinary
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// export async function DELETE(request, context) {
//   try {
//     const id = context.params.requestforjoinID;
//     console.log(id);

//     // Connect to the database
//     await connect();

//     // Find the user by ID
//     const Request_Message = await RequestForJoining.findById(id);

//     // Check if the user exists
//     if (!Request_Message) {
//       return NextResponse.json({ message: "Request not found", status: 404 });
//     }

//     console.log("Request_Message:", Request_Message);
//     const imagePublicId = Request_Message.publicId; // Ensure this matches your schema
//     console.log("Image Public ID:", imagePublicId);

//     // return;

//     // Delete the user from the database
//     const _deletedUser = await RequestForJoining.findByIdAndDelete(id);

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

// get Secific
// export async function GET(request, context) {
//   try {
//     await connect();
//     const id = context.params.requestrorjoiningID;
//     console.log(id);
//     const Specific_Request = await RequestForJoining.findById(id);
//     if (!Specific_Request) {
//       return NextResponse.json({ result: "No Request Availible" });
//     } else {
//       return NextResponse.json({ Result: Specific_Request });
//     }
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ Message: "Internal Server Error " });
//   }
// }


// mysql method
export async function DELETE(request, context) {
  try {
    const db = await connect();
    const id = context.params.requestforjoinID;
    console.log("Received ID for deletion:", id);

    const [result] = await db.query("DELETE FROM requestforjoining WHERE id = ?", [id]);
    console.log("Delete result:", result);

    if (result.affectedRows === 0) {
      return NextResponse.json({ message: "User not found", status: 404 });
    }

    return NextResponse.json({
      message: "User deleted successfully",
      status: 200,
    });
  } catch (error) {
    console.error("Error deleting user:", error);
    return NextResponse.json({ error: error.message, status: 500 });
  }
}


export async function GET(request, context) {
  try {
    const db = await connect();  
    const id = context.params.requestrorjoiningID;
    console.log(id);

    const [rows] = await db.query("SELECT * FROM requestforjoining WHERE id = ?", [id]);

    if (rows.length === 0) {
      return NextResponse.json({ result: "No Request Available" });
    } else {
      return NextResponse.json({ Result: rows[0] });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ Message: "Internal Server Error" });
  }
}

import cloudinary from "cloudinary";
import { NextResponse } from "next/server";
import { connect } from "@/app/config/db";
// import Team from "@/app/models/TeamModel";

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// export async function POST(Request) {
//   try {
//     await connect();
//     const data = await Request.formData();
//     console.log(data);

//     const file = data.get("image");
//     let filename = ""; // Default image
//     let publicId = "";
//     if (file) {
//       const byteData = await file.arrayBuffer();
//       const buffer = Buffer.from(byteData);

//       // Upload to Cloudinary
//       const uploadResponse = await new Promise((resolve, reject) => {
//         cloudinary.v2.uploader
//           .upload_stream({ resource_type: "auto" }, (error, result) => {
//             if (error) reject(error);
//             else resolve(result);
//           })
//           .end(buffer);
//       });

//       filename = uploadResponse.secure_url; // Use Cloudinary URL
//       console.log(`Uploaded image URL: ${filename}`);
//       publicId = uploadResponse.public_id; // Use Cloudinary URL
//       console.log(`Uploaded image ID: ${publicId}`);
//     }

//     // Extract form data
//     const formDataObject = {};
//     for (const [key, value] of data.entries()) {
//       formDataObject[key] = value;
//     }
//     const { username, email, designation, LinkedIn, Github } = formDataObject;

//     console.log(username, email, designation, LinkedIn, Github);

//     const existingUser = await Team.findOne({ email });

//     if (existingUser) {
//       return NextResponse.json({
//         error: "User already exists",
//         status: 400,
//       });
//     }

//     const Post_Team = new Team({
//       username,
//       email,
//       designation,
//       LinkedIn,
//       Github,
//       image: filename,
//       publicId,
//     });

//     const Save_Team = await Post_Team.save();
//     console.log(Save_Team);

//     if (!Save_Team) {
//       return NextResponse.json({ message: "Team Member Not added" });
//     } else {
//       return NextResponse.json({
//         message: "Team Member created successfully",
//         success: true,
//         status: 200,
//       });
//     }
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ error: error.message, status: 500 });
//   }
// }

// export async function GET() {
//   try {
//     await connect();
//     const All_Team = await Team.find();
//     const teamCount = await Team.countDocuments();

//     if (!All_Team || teamCount.length === 0) {
//       return NextResponse.json({ result: All_Team });
//     } else {
//       return NextResponse.json({ Result: All_Team, count: teamCount });
//     }
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ Message: "Internal Server Error " });
//   }
// }




// mysql method
export async function GET() {
  try {
    const db = await connect();

    const [All_Team] = await db.query("SELECT * FROM team");
    const [teamCountResult] = await db.query("SELECT COUNT(*) as count FROM team");

    const teamCount = teamCountResult[0].count;

    if (!All_Team || teamCount === 0 ) {
      return NextResponse.json({ result: All_Team });
    } else {
      return NextResponse.json({ Result: All_Team, count: teamCount });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ Message: "Internal Server Error" }, { status: 500 });
  }
}


export async function POST(Request) {
  try {
    const db = await connect();
    const data = await Request.formData();

    const file = data.get("image");
    let filename = "";
    let publicId = "";

    if (file) {
      const byteData = await file.arrayBuffer();
      const buffer = Buffer.from(byteData);

      const uploadResponse = await new Promise((resolve, reject) => {
        cloudinary.v2.uploader
          .upload_stream({ resource_type: "auto" }, (error, result) => {
            if (error) reject(error);
            else resolve(result);
          })
          .end(buffer);
      });

      filename = uploadResponse.secure_url;
      publicId = uploadResponse.public_id;
    }

    // Extract form fields
    const formDataObject = {};
    for (const [key, value] of data.entries()) {
      formDataObject[key] = value;
    }
    const { username, email, designation, LinkedIn, Github } = formDataObject;

    // Check if email already exists
    const [existing] = await db.query("SELECT * FROM team WHERE email = ?", [email]);

    if (existing.length > 0) {
      return NextResponse.json({ error: "User already exists", status: 400 });
    }

    // Insert new team member
    const [result] = await db.query(
      "INSERT INTO team (username, email, designation, LinkedIn, Github, image, publicId) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [username, email, designation, LinkedIn, Github, filename, publicId]
    );

    if (result.affectedRows === 0) {
      return NextResponse.json({ message: "Team Member Not added" });
    }

    return NextResponse.json({
      message: "Team Member created successfully",
      success: true,
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message, status: 500 });
  }
}
import { connect } from "@/app/config/db";
// import Project from "@/app/models/ProjectModel";
import cloudinary from "cloudinary";
import { NextResponse } from "next/server";
// import { Readable } from "stream";
// import { promisify } from "util";

// Configure Cloudinary
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// const pipeline = promisify(Readable.prototype.pipe);

// export async function POST(Request) {
//   try {
//     await connect();
//     const data = await Request.formData();

//     const file = data.get("Image");
//     let imageUrl = "";
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

//       imageUrl = uploadResponse.secure_url;
//       publicId = uploadResponse.public_id;

//       console.log(`Uploaded image URL: ${imageUrl}`);
//       console.log(`Uploaded image URL: ${publicId}`);
//     } else {
//       // Use a default image if no file is uploaded
//       imageUrl =
//         "https://res.cloudinary.com/dpj2ewekx/image/upload/v1725603041/samples/smile.jpg"; // Replace with your default image URL
//     }

//     const { ProjectName, ProjectCategory, ProjectDescription } =
//       Object.fromEntries(data.entries());

//     const existingProjectName = await Project.findOne({ ProjectName });

//     if (existingProjectName) {
//       return NextResponse.json({
//         error: "Project already exists",
//         status: 400,
//       });
//     }

//     const Post_Project = new Project({
//       ProjectName,
//       ProjectCategory,
//       ProjectDescription,
//       Image: imageUrl, // Store the Cloudinary URL in MongoDB
//       publicId,
//     });

//     const Save_Project = await Post_Project.save();
//     if (!Save_Project) {
//       return NextResponse.json({ message: "Project not added" });
//     } else {
//       return NextResponse.json({
//         message: "Project created successfully",
//         success: true,
//         status: 200,
//       });
//     }
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ error: error.message, status: 500 });
//   }
// }

// get all team members
// export async function GET() {
//   try {
//     await connect();
//     const All_Projects = await Project.find();
//     const ProjectCount = await Project.countDocuments();
//     if (!All_Projects || All_Projects.length === 0) {
//       // return NextResponse.json({ Result: "No Project Availible" });
//       return NextResponse.json({ Result: All_Projects });
//     } else {
//       return NextResponse.json({ Result: All_Projects, count: ProjectCount });
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

    // Get all projects
    const [projects] = await db.query("SELECT * FROM project");

    // Get project count
    const [countResult] = await db.query("SELECT COUNT(*) as count FROM project");
    const projectCount = countResult[0]?.count || 0;

    return NextResponse.json({
      Result: projects,
      count: projectCount,
    });
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json(
      { Message: "Internal Server Error" },
      { status: 500 }
    );
  }
}


export async function POST(request) {
  console.log("API route called - POST /api/Project");

  try {
    const db = await connect();
    console.log("Database connected successfully");

    const data = await request.formData();
    console.log("FormData received");

    const file = data.get("Image");
    let imageUrl = "";
    let publicId = "";

    if (file && typeof file === "object") {
      console.log("Processing file upload:", file.name);
      const byteData = await file.arrayBuffer();
      const buffer = Buffer.from(byteData);

      // Upload to Cloudinary
      const uploadResponse = await new Promise((resolve, reject) => {
        const stream = cloudinary.v2.uploader.upload_stream(
          { resource_type: "auto" },
          (error, result) => {
            if (error) {
              console.error("Cloudinary upload error:", error);
              reject(error);
            } else {
              console.log("Cloudinary upload successful");
              resolve(result);
            }
          }
        );
        stream.end(buffer);
      });

      imageUrl = uploadResponse.secure_url;
      publicId = uploadResponse.public_id;

      console.log("Uploaded image URL:", imageUrl);
      console.log("Cloudinary public ID:", publicId);
    } else {
      console.log("No file uploaded, using default image");
      // Default image
      imageUrl =
        "https://res.cloudinary.com/dpj2ewekx/image/upload/v1725603041/samples/smile.jpg";
    }

    // Extract form data
    const formEntries = Object.fromEntries(data.entries());
    console.log("Form entries:", formEntries);

    const {
      ProjectName,
      ProjectCategory,
      ProjectDescription,
      ProjectProblem,
      ProjectSolution,
      ProjectImpact,
      ProjectTeam,
      ProjectTechnology,
      ProjectTimeline,
      ProjectProccess,
      LatestProject
    } = formEntries;

    // Convert boolean to string for MySQL storage
    const latestProjectValue = LatestProject === true || LatestProject === "true" ? 1 : 0;

    // Convert string inputs to arrays
    const processStringToArray = (str) => {
      if (!str || str.trim() === '') {
        return [];
      }
      return str.split(',')
                .map(item => item.trim())
                .filter(item => item !== '');
    };

    const projectTeamArray = processStringToArray(ProjectTeam);
    const projectTechnologyArray = processStringToArray(ProjectTechnology);

    console.log("Processed ProjectTeam:", projectTeamArray);
    console.log("Processed ProjectTechnology:", projectTechnologyArray);

    // Validate required fields
    if (!ProjectName || !ProjectCategory) {
      console.log("Validation failed: Missing required fields");
      return NextResponse.json({
        error: "ProjectName and ProjectCategory are required",
        status: 400,
      });
    }

    console.log("Checking if project exists...");
    // Check if project already exists
    const [existingRows] = await db.query(
      "SELECT * FROM project WHERE ProjectName = ?",
      [ProjectName]
    );

    if (existingRows.length > 0) {
      console.log("Project already exists");
      return NextResponse.json({
        error: "Project already exists",
        status: 400,
      });
    }

    // Convert arrays to JSON strings for database storage
    const projectTeamJSON = JSON.stringify(projectTeamArray);
    const projectTechnologyJSON = JSON.stringify(projectTechnologyArray);

    console.log("Inserting project into database...");
    // Insert project
    const [insertResult] = await db.query(
      `INSERT INTO project (
        ProjectName,
        ProjectCategory,
        ProjectDescription,
        Image,
        publicId,
        ProjectTeam,
        ProjectTechnology,
        ProjectProblem,
        ProjectSolution,
        ProjectImpact,
        ProjectTimeline,
        ProjectProccess,
        LatestProject
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        ProjectName,
        ProjectCategory,
        ProjectDescription,
        imageUrl,
        publicId,
        projectTeamJSON,
        projectTechnologyJSON,
        ProjectProblem,
        ProjectSolution,
        ProjectImpact,
        ProjectTimeline,
        ProjectProccess,
        latestProjectValue // Now stores 1 or 0
      ]
    );

    if (insertResult.affectedRows === 0) {
      console.log("Insert failed: No rows affected");
      return NextResponse.json({
        message: "Project not added",
        status: 500
      });
    }

    console.log("Project created successfully:", insertResult.insertId);
    return NextResponse.json({
      message: "Project created successfully",
      success: true,
      status: 200,
      data: {
        id: insertResult.insertId,
        ProjectCategory,
        ProjectDescription,
        Image: imageUrl,
        publicId,
        ProjectProblem,
        ProjectSolution,
        ProjectImpact,
        ProjectName,
        ProjectTeam: projectTeamArray,
        ProjectTechnology: projectTechnologyArray,
        ProjectTimeline,
        ProjectProccess,
        LatestProject
      }
    });
  } catch (error) {
    console.error("Error creating project:", error);
    console.error("Error stack:", error.stack);
    return NextResponse.json({
      error: error.message,
      status: 500
    });
  }
}

// export async function POST(request) {
//   try {
//     const db = await connect();
//     const data = await request.formData();

//     const file = data.get("Image");
//     let imageUrl = "";
//     let publicId = "";

//     if (file && typeof file === "object") {
//       const byteData = await file.arrayBuffer();
//       const buffer = Buffer.from(byteData);

//       // Upload to Cloudinary
//       const uploadResponse = await new Promise((resolve, reject) => {
//         const stream = cloudinary.v2.uploader.upload_stream(
//           { resource_type: "auto" },
//           (error, result) => {
//             if (error) reject(error);
//             else resolve(result);
//           }
//         );
//         stream.end(buffer);
//       });

//       imageUrl = uploadResponse.secure_url;
//       publicId = uploadResponse.public_id;

//       console.log("Uploaded image URL:", imageUrl);
//       console.log("Cloudinary public ID:", publicId);
//     } else {
//       // Default image
//       imageUrl =
//         "https://res.cloudinary.com/dpj2ewekx/image/upload/v1725603041/samples/smile.jpg";
//     }

//     const { ProjectName, ProjectCategory, ProjectDescription ,ProjectTeam,ProjectTechnology,ProjectProblem,ProjectSolution,ProjectImpact } = Object.fromEntries(data.entries());

//     // Check if project already exists
//     const [existingRows] = await db.query("SELECT * FROM project WHERE ProjectName = ?", [ProjectName]);

//     if (existingRows.length > 0) {
//       return NextResponse.json({
//         error: "Project already exists",
//         status: 400,
//       });
//     }

//     // Insert project
//     const [insertResult] = await db.query(
//       `INSERT INTO project (ProjectName, ProjectCategory, ProjectDescription, Image, publicId,ProjectTeam,ProjectTechnology,ProjectProblem,ProjectSolution,ProjectImpact)
//        VALUES (?, ?, ?, ?, ?,?,?,?,?,?)`,
//       [ProjectName, ProjectCategory, ProjectDescription, imageUrl, publicId,ProjectTeam,ProjectTechnology,ProjectProblem,ProjectSolution,ProjectImpact]
//     );

//     if (insertResult.affectedRows === 0) {
//       return NextResponse.json({ message: "Project not added", status: 500 });
//     }

//     return NextResponse.json({
//       message: "Project created successfully",
//       success: true,
//       status: 200,
//     });
//   } catch (error) {
//     console.error("Error creating project:", error);
//     return NextResponse.json({ error: error.message, status: 500 });
//   }
// }

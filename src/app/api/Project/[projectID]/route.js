const { connect } = require("@/app/config/db");
const { default: Project } = require("@/app/models/ProjectModel");
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
//     const id = context.params.projectID;
//     console.log("project ID:", id);

//     // Connect to the database
//     await connect();

//     // Find the blog by ID
//     const blog = await Project.findById(id);

//     if (!blog) {
//       return NextResponse.json({ message: "project not found", status: 404 });
//     }

//     console.log("project:", blog);
//     const imagePublicId = blog.publicId; // Ensure this matches your schema
//     console.log("Image Public ID:", imagePublicId);

//     // Delete the blog from the database
//     const deletedBlog = await Project.findByIdAndDelete(id);

//     if (!deletedBlog) {
//       return NextResponse.json({
//         message: "Failed to delete project",
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
//       message: "project and associated image deleted successfully",
//       status: 200,
//     });
//   } catch (error) {
//     console.error("Error deleting project:", error);
//     return NextResponse.json({
//       error: "Failed to delete project",
//       status: 500,
//     });
//   }
// }

// get Secific
// export async function GET(request, context) {
//   try {
//     await connect();
//     const id = context.params.projectID;
//     console.log(id);
//     const Find_project = await Project.findById(id);
//     if (!Find_project) {
//       return NextResponse.json({ result: "No Request Availible" });
//     } else {
//       return NextResponse.json({ Result: Find_project });
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
//     const id = context.params.projectID;
//     console.log(id);

//     const data = await request.formData();
//     const file = data.get("Image");
//     let newImageUrl = null;
//     let newImagePublicId = null;

//     // Check if a new image is uploaded
//     if (typeof file === "object" && file.name) {
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

//       newImageUrl = uploadResponse.secure_url;
//       newImagePublicId = uploadResponse.public_id;

//       // console.log("New Image URL:", newImageUrl);
//       // console.log("New Image Public ID:", newImagePublicId);
//     }

//     // Create a form data object
//     const formDataObject = {};
//     for (const [key, value] of data.entries()) {
//       formDataObject[key] = value;
//     }
//     const { ProjectName, ProjectCategory, ProjectDescription } = formDataObject;
//     console.log(ProjectName, ProjectCategory, ProjectDescription);

//     // Find the blog by ID
//     const project = await Project.findById(id);
//     if (!project) {
//       return NextResponse.json({ error: "Project not found" }, { status: 404 });
//     }

//     // Update blog details
//     project.ProjectName = ProjectName || project.ProjectName;
//     project.ProjectCategory = ProjectCategory || project.ProjectCategory;
//     project.ProjectDescription =
//       ProjectDescription || project.ProjectDescription;
//     console.log("old public id:", project.publicId);
//     console.log("old image url", project.Image);
//     // console.log(newImagePublicId);

//     if (newImageUrl && newImagePublicId) {
//       // If a new image is uploaded, remove the old image from Cloudinary
//       if (project.publicId) {
//         try {
//           await cloudinary.uploader.destroy(project.publicId);
//           console.log("file deleted");
//         } catch (error) {
//           console.error("Failed to delete old image from Cloudinary:", error);
//         }
//       }

//       // Update blog with new image URL and public ID
//       project.Image = newImageUrl;
//       console.log("new image url", project.Image);

//       project.publicId = newImagePublicId;
//       console.log("new image public id :", project.publicId);
//     }
//     // return;

//     await project.save();

//     return NextResponse.json({
//       message: "Blog updated successfully",
//       project,
//     });
//   } catch (error) {
//     console.error("Error Updating Blog:", error);
//     return NextResponse.json(
//       { error: "Failed to update blog" },
//       { status: 500 }
//     );
//   }
// }


// mysql method

export async function GET(request, context) {
  try {
    const db = await connect();
    const id = context.params.projectID;
    console.log("Project ID:", id);

    // Fetch project by ID
    const [rows] = await db.query("SELECT * FROM project WHERE id = ?", [id]);

    if (rows.length === 0) {
      return NextResponse.json({ result: "No Project Available" }, { status: 404 });
    } else {
      return NextResponse.json({ Result: rows[0] });
    }
  } catch (error) {
    console.error("Error fetching project:", error);
    return NextResponse.json({ Message: "Internal Server Error" }, { status: 500 });
  }
}

export async function DELETE(request, context) {
  try {
    const id = context.params.projectID;
    console.log("Project ID:", id);

    // Connect to the MySQL database
    const db = await connect();

    // Find the project by ID
    const [rows] = await db.query("SELECT * FROM project WHERE id = ?", [id]);

    if (rows.length === 0) {
      return NextResponse.json({ message: "Project not found", status: 404 });
    }

    const project = rows[0];
    const imagePublicId = project.publicId;
    console.log("Image Public ID:", imagePublicId);

    // Delete the project from the database
    const [result] = await db.query("DELETE FROM project WHERE id = ?", [id]);

    if (result.affectedRows === 0) {
      return NextResponse.json({
        message: "Failed to delete project",
        status: 500,
      });
    }

    // Delete the image from Cloudinary if publicId exists
    if (imagePublicId) {
      try {
        const cloudinaryResponse = await cloudinary.v2.uploader.destroy(imagePublicId);
        console.log(`Cloudinary response: ${cloudinaryResponse.result}`);
      } catch (error) {
        console.error("Failed to delete image from Cloudinary:", error);
      }
    }

    return NextResponse.json({
      message: "Project and associated image deleted successfully",
      status: 200,
    });
  } catch (error) {
    console.error("Error deleting project:", error);
    return NextResponse.json({
      error: "Failed to delete project",
      status: 500,
    });
  }
}

export async function PUT(request, context) {
  try {
    const id = context.params.projectID;
    const db = await connect();

    const data = await request.formData();
    const file = data.get("Image");
    let newImageUrl = null;
    let newImagePublicId = null;

    // Only try to upload if file exists and has a name property
    if (file && typeof file === "object" && "name" in file && file.name) {
      const byteData = await file.arrayBuffer();
      const buffer = Buffer.from(byteData);

      // Upload the new image to Cloudinary
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

    // Extract form data values
    const formDataObject = {};
    for (const [key, value] of data.entries()) {
      formDataObject[key] = value;
    }
    const { 
      ProjectName, 
      ProjectCategory, 
      ProjectDescription, 
      ProjectTeam, 
      ProjectTechnology, 
      ProjectProblem, 
      ProjectSolution, 
      ProjectImpact, 
      ProjectTimeline, 
      ProjectProccess,
      LatestProject,
      } = formDataObject;

    // Fetch the existing project from the DB
    const [rows] = await db.query("SELECT * FROM project WHERE id = ?", [id]);
    if (rows.length === 0) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }
    // // Convert string inputs to arrays
    // const processStringToArray = (str) => {
    //   if (!str || str.trim() === '') {
    //     return [];
    //   }
    //   return str.split(',')
    //             .map(item => item.trim())
    //             .filter(item => item !== '');
    // };

    // const projectTeamArray = processStringToArray(ProjectTeam);
    // const projectTechnologyArray = processStringToArray(ProjectTechnology);
    // console.log("Processed ProjectTeam:", projectTeamArray);
    // console.log("Processed ProjectTechnology:", projectTechnologyArray);
    // // Convert arrays to JSON strings for database storage
    // const projectTeamJSON = JSON.stringify(projectTeamArray);
    // const projectTechnologyJSON = JSON.stringify(projectTechnologyArray);

    const project = rows[0];

    // Delete the old image if a new one was uploaded
    if (newImagePublicId && project.publicId) {
      try {
        await cloudinary.v2.uploader.destroy(project.publicId);
      } catch (error) {
        console.error("Failed to delete old image from Cloudinary:", error);
      }
    }

    // Update the project in MySQL
    const [updateResult] = await db.query(
      `UPDATE project 
       SET ProjectName = ?, 
           ProjectCategory = ?, 
           ProjectDescription = ?, 
           Image = ?, 
           publicId = ?,
           ProjectTeam = ?,
           ProjectTechnology = ?,
           ProjectProblem = ?,
           ProjectSolution = ?,
           ProjectImpact = ?,
           ProjectTimeline = ?,
           ProjectProccess = ?,
           LatestProject = ?
       WHERE id = ?`,
      [
        ProjectName || project.ProjectName,
        ProjectCategory || project.ProjectCategory,
        ProjectDescription || project.ProjectDescription,
        newImageUrl || project.Image,
        newImagePublicId || project.publicId,
        ProjectTeam || project.ProjectTeam,
        ProjectTechnology || project.ProjectTechnology,
        ProjectProblem || project.ProjectProblem,
        ProjectSolution || project.ProjectSolution,
        ProjectImpact || project.ProjectImpact,
        ProjectTimeline || project.ProjectTimeline,
        ProjectProccess || project.ProjectProccess,
        LatestProject !== undefined ? LatestProject : project.LatestProject,
        id,
      ]
    );

    if (updateResult.affectedRows === 0) {
      return NextResponse.json(
        { error: "Failed to update project" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message: "Project updated successfully",
      project: {
        id,
        ProjectName: ProjectName || project.ProjectName,
        ProjectCategory: ProjectCategory || project.ProjectCategory,
        ProjectDescription: ProjectDescription || project.ProjectDescription,
        Image: newImageUrl || project.Image,
        publicId: newImagePublicId || project.publicId,
        ProjectTeam: ProjectTeam || project.ProjectTeam,
        ProjectTechnology: ProjectTechnology || project.ProjectTechnology,
        ProjectProblem: ProjectProblem || project.ProjectProblem,
        ProjectSolution: ProjectSolution || project.ProjectSolution,
        ProjectImpact: ProjectImpact || project.ProjectImpact,
        ProjectTimeline: ProjectTimeline || project.ProjectTimeline,
        ProjectProccess: ProjectProccess || project.ProjectProccess,
        LatestProject: LatestProject !== undefined ? LatestProject : project.LatestProject
      },
    });
  } catch (error) {
    console.error("Error Updating Project:", error);
    return NextResponse.json(
      { error: "Failed to update project" },
      { status: 500 }
    );
  }
}
const { connect } = require("@/app/config/db");
const { NextResponse } = require("next/server");
const Vacancy = require("@/app/models/VacancyModel").default;

// DELETE function to delete a Vacancy
// export async function DELETE(reques, content) {
//   try {
//     // console.log(content.params.VacancyID);
//     const id = content.params.vacancyID;
//     // Connect to the database
//     await connect();

//     // Find the project by ID and delete it
//     const _deletedVacancy = await Vacancy.findByIdAndDelete(id);

//     // Check if the project was found and deleted
//     if (!_deletedVacancy) {
//       return NextResponse.json({ message: "Vacancy not found" });
//     } else {
//       return NextResponse.json({
//         message: "Vacancy Delete Sucessfully",
//         result: _deletedVacancy,
//         status: 200,
//       });
//     }
//   } catch (error) {
//     console.error("Error deleting Vacancy:", error);
//     // Return an error response
//     return NextResponse.error(new Error("Failed to delete project"));
//   }
// }

// Update vacancy
// export async function PUT(request, content) {
//   const id = content.params.vacancyID;
//   console.log(id);
//   // const givingdata = await Request.json();
//   const givingdata = await request.formData();
//   console.log(givingdata);
//   const formDataObject = {};
//   // Iterate over form data entries
//   for (const [key, value] of givingdata.entries()) {
//     // Assign each field to the formDataObject
//     formDataObject[key] = value;
//   }
//   const { VacancyTitle, Requireds, Experience } = formDataObject;
//   console.log(VacancyTitle, Requireds, Experience);

//   try {
//     await connect();

//     // Find the existing vacancy by its ID
//     const existingVacancy = await Vacancy.findById(id);

//     if (!existingVacancy) {
//       return NextResponse.json({ message: "Vacancy not found", status: 404 });
//     }

//     // Update the vacancy with the new data
//     existingVacancy.VacancyTitle = VacancyTitle || existingVacancy.VacancyTitle;
//     existingVacancy.Requireds = Requireds || existingVacancy.Requireds;
//     existingVacancy.Experience = Experience || existingVacancy.Experience;

//     // Save the updated vacancy
//     const updatedVacancy = await existingVacancy.save();

//     return NextResponse.json({ result: updatedVacancy, status: 200 });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ message: "An error occurred", status: 500 });
//   }
// }

// get Secific
// export async function GET(request, context) {
//   try {
//     await connect();
//     const id = context.params.vacancyID;
//     console.log(id);
//     const Specific_Vacancy = await Vacancy.findById(id);
//     if (!Specific_Vacancy) {
//       return NextResponse.json({ result: "No Request Availible" });
//     } else {
//       return NextResponse.json({ Result: Specific_Vacancy });
//     }
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ Message: "Internal Server Error " });
//   }
// }


// mysql method

export async function GET(request, context) {
  try {
    const id = context.params.vacancyID;
    console.log("Vacancy ID:", id);

    // Connect to the database
    const db = await connect();

    // Fetch specific vacancy by ID
    const [rows] = await db.query("SELECT * FROM vacancy WHERE id = ?", [id]);

    if (rows.length === 0) {
      return NextResponse.json({ result: "No Request Available" }, { status: 404 });
    }

    return NextResponse.json({ Result: rows[0] });
  } catch (error) {
    console.error("Error fetching vacancy:", error);
    return NextResponse.json({ Message: "Internal Server Error" }, { status: 500 });
  }
}


export async function DELETE(request, content) {
  try {
    const id = content.params.vacancyID;

    // Connect to the database
    const db = await connect();

    // Delete the vacancy by ID
    const [result] = await db.query("DELETE FROM vacancy WHERE id = ?", [id]);

    // Check if any row was deleted
    if (result.affectedRows === 0) {
      return NextResponse.json({ message: "Vacancy not found", status: 404 });
    }

    return NextResponse.json({
      message: "Vacancy deleted successfully",
      result: { id },
      status: 200,
    });
  } catch (error) {
    console.error("Error deleting vacancy:", error);
    return NextResponse.json(
      { error: "Failed to delete vacancy", status: 500 },
      { status: 500 }
    );
  }
}


export async function PUT(request, context) {
  const id = context.params.vacancyID;
  console.log("Vacancy ID:", id);

  try {
    // Parse form data
    const formData = await request.formData();
    const formDataObject = {};
    for (const [key, value] of formData.entries()) {
      formDataObject[key] = value;
    }
    const { VacancyTitle, Requireds, Experience } = formDataObject;
    console.log(VacancyTitle, Requireds, Experience);

    // Connect to the database
    const db = await connect();

    // Check if vacancy exists
    const [existingRows] = await db.query("SELECT * FROM vacancy WHERE id = ?", [id]);
    if (existingRows.length === 0) {
      return NextResponse.json({ message: "Vacancy not found" }, { status: 404 });
    }

    // Prepare update fields and values dynamically to allow partial updates
    const updates = [];
    const values = [];

    if (VacancyTitle) {
      updates.push("VacancyTitle = ?");
      values.push(VacancyTitle);
    }
    if (Requireds) {
      updates.push("Requireds = ?");
      values.push(Requireds);
    }
    if (Experience) {
      updates.push("Experience = ?");
      values.push(Experience);
    }

    if (updates.length === 0) {
      // Nothing to update
      return NextResponse.json({ message: "No fields to update" }, { status: 400 });
    }

    values.push(id); // for WHERE clause

    // Update vacancy record
    const updateQuery = `UPDATE vacancy SET ${updates.join(", ")} WHERE id = ?`;
    const [result] = await db.query(updateQuery, values);

    if (result.affectedRows === 0) {
      return NextResponse.json({ message: "Update failed" }, { status: 500 });
    }

    // Fetch updated vacancy
    const [updatedRows] = await db.query("SELECT * FROM vacancy WHERE id = ?", [id]);

    return NextResponse.json({ result: updatedRows[0], status: 200 });
  } catch (error) {
    console.error("Error updating vacancy:", error);
    return NextResponse.json({ message: "An error occurred" }, { status: 500 });
  }
}
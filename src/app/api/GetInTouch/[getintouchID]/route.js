const { connect } = require("@/app/config/db");
// const { default: GetInTouch } = require("@/app/models/GetInTouchModel");
const { NextResponse } = require("next/server");

// DELETE function to delete a Message
// export async function DELETE(reques, content) {
//   try {
//     // console.log(content.params.projectID);
//     const id = content.params.getintouchID;
//     // Connect to the database
//     await connect();

//     // Find the project by ID and delete it
//     const _deletedMessage = await GetInTouch.findByIdAndDelete(id);

//     // Check if the project was found and deleted
//     if (!_deletedMessage) {
//       return NextResponse.json({ message: "Message not found" });
//     } else {
//       return NextResponse.json({ result: _deletedMessage, status: 200 });
//     }
//   } catch (error) {
//     console.error("Error deleting project:", error);
//     // Return an error response
//     return NextResponse.error(new Error("Failed to delete project"));
//   }
// }

// PUT function to Update a project
// export async function PUT(request, content) {
//   try {
//     //  variable              foldername --> dynomic route
//     const id = content.params.getintouchID;
//     console.log(id);
//     const _givingdata = await request.json();
//     const { username, email, phone, message } = _givingdata;
//     console.log(username, email, phone, message);

//     // Find the project by ID and update its image and category
//     const _updatedmessage = await GetInTouch.findByIdAndUpdate(
//       id,
//       { username, email, phone, message },
//       { new: true }
//     );

//     // Check if the project was found and updated
//     if (!_updatedmessage) {
//       return NextResponse.json(
//         { message: "Message not found" },
//         { status: 404 }
//       );
//     } else {
//     }
//     return NextResponse.json({ result: _updatedmessage }, { status: 200 });
//   } catch (error) {
//     console.error("Error Updating Message:", error);
//     // Return an error response
//     return NextResponse.error(new Error("Failed to update project"), {
//       status: 500,
//     });
//   }
// }


// mysql method
export async function DELETE(request, content) {
  
  try {
    const db = await connect();  
    const id = content.params.getintouchID;
    // Delete the message by ID
    const [result] = await db.query("DELETE FROM getintouch WHERE id = ?", [id]);

    if (result.affectedRows === 0) {
      return NextResponse.json({ message: "Message not found" });
    } else {
      return NextResponse.json({ message: "Message deleted successfully", result, status: 200 });
    }
  } catch (error) {
    console.error("Error deleting message:", error);
    return NextResponse.json({ message: "Failed to delete message", status: 500 });
  }
}

export async function PUT(request, content) {
  try {
    const db = await connect();  
    const id = content.params.getintouchID;
    const _givingdata = await request.json();
    const { username, email, phone, message } = _givingdata;

    // Update the message in the database
    const [result] = await db.query(
      `UPDATE getintouch 
       SET username = ?, email = ?, phone = ?, message = ? 
       WHERE id = ?`,
      [username, email, phone, message, id]
    );

    if (result.affectedRows === 0) {
      return NextResponse.json({ message: "Message not found" }, { status: 404 });
    }

    // Optionally fetch the updated row to return it
    const [updatedRows] = await db.query("SELECT * FROM getintouch WHERE id = ?", [id]);

    return NextResponse.json({ result: updatedRows[0] }, { status: 200 });

  } catch (error) {
    console.error("Error Updating Message:", error);
    return NextResponse.json({ message: "Failed to update message" }, { status: 500 });
  }
}
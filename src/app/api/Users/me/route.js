// import { getDataFromToken } from "@/app/helper/GetDataFromToken";
// import { NextResponse } from "next/server";
// import User from "@/app/models/UserModel";
// import { connect } from "@/app/config/db.js";

// export async function POST(request) {
//   try {
//     await connect();
//     const userId = await getDataFromToken(request);
//     console.log(userId);
//     const user = await User.findOne({ _id: userId }).select("-password");
//     const userNotFound = user ? user : "user not found";
//     console.log(userNotFound);
//     return NextResponse.json({
//       mesaaage: "User found",
//       data: user,
//     });
//   } catch (error) {
//     return NextResponse.json({ error: error.message }, { status: 400 });
//   }
// }

import { connect } from "@/app/config/db";
import { getDataFromToken } from "@/app/helper/GetDataFromToken";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const connection = await connect();

    const userId = await getDataFromToken(request);
    console.log("User ID from token:", userId);

    const [rows] = await connection.query(
      "SELECT id, username, email, password, confirmpassword, image FROM users WHERE id = ?",
      [userId]
    );

    const user = rows[0] || null;

    if (!user) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "User found",
      data: user,
    });
  } catch (error) {
    console.error("Error:", error.message);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

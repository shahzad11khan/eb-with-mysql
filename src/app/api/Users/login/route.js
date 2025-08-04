// import jwt from "jsonwebtoken";
// import bcryptjs from "bcryptjs";
// import User from "@/app/models/UserModel.js";
// import { NextResponse } from "next/server";
// import { connect } from "@/app/config/db";

// export async function POST(request) {
//   try {
//     await connect();
//     // Parse incoming request body
//     const { email, password } = await request.json();
//     console.log(email, password);

//     // Validate if email and password are provided
//     if (!email || !password) {
//       return NextResponse.json({
//         error: "Email and password are required",
//         status: 400,
//       });
//     }

//     console.log("Checking user with email:", email);

//     // Find user by email
//     const user = await User.findOne({ email });

//     // Check if user exists
//     if (!user) {
//       return NextResponse.json({
//         error: "Invalid credentials",
//         status: 401,
//       });
//     }

//     console.log("User found:", user);

//     // Validate password
//     const isPasswordValid = await bcryptjs.compare(password, user.password);
//     if (!isPasswordValid) {
//       return NextResponse.json({
//         error: "Invalid credentials",
//         status: 401,
//       });
//     }

//     // Check if the user is verified (fixed typo here)
//     if (!user.isVerfied) {
//       return NextResponse.json({
//         error: "User is not verified",
//         status: 403, // Forbidden status for unverified users
//       });
//     }

//     // Generate JWT token
//     const token = jwt.sign(
//       { userId: user._id, username: user.username, email: user.email },
//       process.env.JWT_SECRET || "defaultSecret", // Use a fallback secret for testing
//       { expiresIn: "1h" } // Token expires in 1 hour
//     );

//     console.log("JWT token generated:", token);

//     const response = NextResponse.json({
//       token,
//       userId: user._id,
//       username: user.username,
//       isVerified: user.isVerfied,
//       email: user.email,
//       message: "Login successful",
//       status: 200,
//     });

//     // Set token as an HTTP-only cookie
//     response.cookies.set("token", token, {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === "production", // Set secure only in production
//     });

//     return response;
//   } catch (error) {
//     console.error("Login error:", error.message);
//     console.error("Stack trace:", error.stack);
//     return NextResponse.json({
//       error: "Internal server error",
//       status: 500,
//     });
//   }
// }

// MYSQL METHOD
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";
import { NextResponse } from "next/server";
import { connect } from "@/app/config/db"; // Your custom MySQL connection function

export async function POST(request) {
  try {
    const connection = await connect(); // Your MySQL connection

    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json({
        error: "Email and password are required",
        status: 400,
      });
    }

    console.log("Checking user with email:", email);

    // Query user from MySQL
    const [rows] = await connection.query("SELECT * FROM users WHERE email = ?", [email]);

    if (rows.length === 0) {
      return NextResponse.json({
        error: "Invalid credentials",
        status: 401,
      });
    }

    const user = rows[0];

    // Compare password
    const isPasswordValid = await bcryptjs.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json({
        error: "Invalid credentials",
        status: 401,
      });
    }

    // if (!user.isVerified) {
    //   return NextResponse.json({
    //     error: "User is not verified",
    //     status: 403,
    //   });
    // }

    const token = jwt.sign(
      { userId: user.id, username: user.username, email: user.email },
      process.env.JWT_SECRET || "defaultSecret",
      { expiresIn: "1y" }
    );

    const response = NextResponse.json({
      token,
      userId: user.id,
      username: user.username,
      email: user.email,
      isVerified: true,
      message: "Login successful",
      status: 200,
    });

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    });

    return response;
  } catch (error) {
    console.error("Login error:", error.message);
    return NextResponse.json({
      error: "Internal server error",
      status: 500,
    });
  }
}

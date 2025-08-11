// import mongoose from "mongoose";

// // const connection = process.env.MONGO_URI;

// // Exporting the promise returned by mongoose.connect
// const connect = mongoose.connect(process.env.MONGO_URI);

// // Adding event listeners to handle connection events
// mongoose.connection.on("connected", () => {
//   console.log("Database connected successfully");
// });

// mongoose.connection.on("error", (err) => {
//   console.error("Database connection error:", err);
// });

// mongoose.connection.on("disconnected", () => {
//   console.log("Database disconnected");
// });
// export default connect;

// import mongoose from "mongoose";

// export async function connect() {
//   try {
//     mongoose.connect(process.env.MONGO_URI);
//     const connection = mongoose.connection;

//     connection.on("connected", () => {
//       console.log("MongoDB connected successfully");
//     });

//     connection.on("error", (err) => {
//       console.log(
//         "MongoDB connection error. Please make sure MongoDB is running. " + err
//       );
//       process.exit();
//     });
//   } catch (error) {
//     console.log("Something goes wrong!");
//     console.log(error);
//   }
// }


import mysql from 'mysql2/promise';

export async function connect() {
  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      // user: 'root',           
      user: 'encolzgh_encolzgh',           
      password: 'encolzgh_encolzgh',           
      database: 'encolzgh_encoderbytes',
      // port: 3306              
    });

    console.log('MySQL connected successfully');
    return connection;
  } catch (error) {
    console.error('MySQL connection failed:', error.message);
  }
}

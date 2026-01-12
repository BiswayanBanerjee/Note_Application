import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import { connectMongoDB } from "./config/dbMongo";
import { mysqlPool } from "./config/dbMySQL";
import authRoutes from "./routes/authRoutes";
import noteRoutes from "./routes/noteRoutes";
import { createUserTable } from "./models/user";

const app = express();
const PORT = process.env.PORT || 5000;

// Allow requests from your frontend
const allowedOrigins = ["http://localhost:3000", "https://note-application-frontend.onrender.com"];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true, // Allow cookies if needed
  })
);

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/notes", noteRoutes);

(async () => {
  try {
    await connectMongoDB();
    await mysqlPool.getConnection(); // Test MySQL connection
    console.log("Connected to MySQL");

    await createUserTable(); // Ensure the users table is created/updated

    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (error) {
    console.error("Error starting the server:", error);
  }
})();
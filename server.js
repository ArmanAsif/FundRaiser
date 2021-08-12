import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import requestRoutes from "./routes/requestRoutes.js";

dotenv.config();
connectDB();
const app = express();

app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/requests", requestRoutes);

const PORT = process.env.PORT || 5000;

app.listen(
	PORT,
	console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
);

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db";
import tripRoutes from "./routes/TripRoutes";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/trips", tripRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

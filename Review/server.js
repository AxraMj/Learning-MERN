import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import userRoute from "./routes/userRoute.js";

dotenv.config();
const app = express();
connectDb();

app.use(cors());
app.use(express.json());

//route
app.use("/api/users", userRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server running on PORT ${PORT}`);
});

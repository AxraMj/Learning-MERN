import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./config/db.js";


dotenv.config();
const app = express();
connectDb()

app.use(cors());
app.use(express.json());



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server running on PORT ${PORT}`);
});

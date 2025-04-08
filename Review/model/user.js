import mongoose from "mongoose";

const schemaUser = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const schemaUsers = mongoose.model("user", schemaUser);

export default schemaUsers;

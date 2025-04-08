import mongoose from "mongoose";

const schemaUser = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  number: {
    type: String,
  },
});

const schemaUsers = mongoose.model("user", schemaUser);

export default schemaUsers;

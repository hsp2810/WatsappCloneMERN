import mongoose from "mongoose";

export const connectToDatabase = async (URL) => {
  try {
    await mongoose.connect(URL);
    console.log("Succesfully Connected to the DB");
  } catch (error) {
    console.log(error);
  }
};

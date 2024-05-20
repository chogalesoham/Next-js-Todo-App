import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://todo-app:todo-app@cluster0.ifviefp.mongodb.net/todo-app"
  );
  console.log("DataBase Conected");
};

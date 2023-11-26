import { User } from "./models";
import { connectToDb } from "./utils";

export const fetchUsers = async () => {
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fethc users!");
  }
};

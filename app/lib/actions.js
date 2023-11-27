import { User } from "./models";
import { connectToDb } from "./utils";

export const addUser = async (formData) => {
  "use server";
  const { username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    connectToDb();
    const newUser = new User({
      username,
      email,
      password,
      phone,
      address,
      isAdmin,
      isActive,
    });
    await newUser.save();
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create user!");
  }
};

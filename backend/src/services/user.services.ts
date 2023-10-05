const User = require("../Models/usersSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
import { User } from "../Interface/user";

const JWT_SECRET: string = process.env.JWT_SECRET as string;

export const getAllUsers = async (): Promise<User> => await User.find().select("-password");

export const getUserById = async (id: string): Promise<User> =>
  await User.findById(id).select("-password");

export const addUser = async (data: User): Promise<User> => {
  data.password = await bcrypt.hash(data.password, 12);
  const user = new User(data);
  return await user.save();
};

export const loginUser = async (
  email: string,
  password: string
): Promise<string> => {
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    return jwt.sign({ userId: user._id }, JWT_SECRET, {
      expiresIn: "1h",
    });
  }

  throw "Invalid email or password.";
};

export const updateUser = async (id: string, data: User): Promise<User> => {
  const existUser = await User.findById(id);
  if (!existUser) throw "User is not exist";
  return await User.findByIdAndUpdate(id, data, { new: true });
};

export const deleteUser = async (id: string): Promise<User> =>
{  const existUser = await User.findById(id);
  if (!existUser) throw "User is not exist";
  return await User.findByIdAndDelete(id);
}

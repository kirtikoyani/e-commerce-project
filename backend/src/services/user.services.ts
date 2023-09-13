const User = require("../Models/usersSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
import { User } from "../Interface/user";

const JWT_SECRET: string = process.env.JWT_SECRET as string;

export const AllUsersData = async (): Promise<User> => await User.find();

export const UserDataById = async (id: string): Promise<User> =>
  await User.findById(id);

export const signUpUser = async (data: User): Promise<User> => {
  const {
    name,
    email,
    password,
    phone,
    address,
    country,
    businessCategory,
    role,
  } = data;
  const hashedPassword = await bcrypt.hash(password, 12);
  const user = new User({
    name,
    email,
    password: hashedPassword,
    phone,
    address,
    country,
    businessCategory,
    role,
  });
  return await user.save();
};

export const signInUser = async (
  email: string,
  password: string
): Promise<User> => {
  const user = await User.findOne({ email });
  const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
    expiresIn: "1h",
  });
  return token;
};

export const updateUser = async (id: string, data: User): Promise<User> =>
  await User.findByIdAndUpdate(id, data, { new: true });

export const deleteUser = async (id: string): Promise<User> =>
  await User.findByIdAndDelete(id);

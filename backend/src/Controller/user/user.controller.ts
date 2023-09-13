import { Request, Response } from "express";
import * as userService from "../../services/user.services";

export async function getAllUsers(req: Request, res: Response) {
  try {
    const usersData = await userService.AllUsersData();
    res.status(200).json(usersData);
  } catch (error) {
    res.status(400).json({ error: error });
  }
}

export async function getUserById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const userData = await userService.UserDataById(id);

    if (!userData) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

export async function postUser(req: Request, res: Response) {
  try {
    const userData = req.body;
    const createUser = await userService.signUpUser(userData);
    res.status(201).json(createUser);
  } catch (error) {
    res.status(400).json({ error: error });
  }
}

export async function loginUser(req: Request, res: Response) {
  try {
    const { email, password } = req.body;
    const token = await userService.signInUser(email, password);
    res.status(200).json({ token });
  } catch (error) {
    res.status(401).json({ error: error });
  }
}

export async function putUser(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const userData = req.body;
    const updateUsers = await userService.updateUser(id, userData);
    res.status(200).json(updateUsers);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

export async function deleteUser(req: Request, res: Response) {
  try {
    const { id } = req.params;
    await userService.deleteUser(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

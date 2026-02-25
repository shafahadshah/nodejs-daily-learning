import * as userService from "../services/user.service.js";
import { successResponse, errorResponse } from "../utils/response.js";

export const getUsers = (req, res) => {
  return successResponse(res, 200, "Users fetched successfully", userService.getAllUsers());
};

export const getUser = (req, res) => {
  const user = userService.getUserById(req.params.id);
  if (!user) return errorResponse(res, 404, "User not found");

  return successResponse(res, 200, "User fetched successfully", user);
};

export const createUser = (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return errorResponse(res, 400, "Name and email are required");
  }

  const user = userService.createUser({ name, email });
  return successResponse(res, 201, "User created successfully", user);
};

export const updateUser = (req, res) => {
  const user = userService.updateUser(req.params.id, req.body);
  if (!user) return errorResponse(res, 404, "User not found");

  return successResponse(res, 200, "User updated successfully", user);
};

export const deleteUser = (req, res) => {
  const deleted = userService.deleteUser(req.params.id);
  if (!deleted) return errorResponse(res, 404, "User not found");

  return res.status(204).send();
};
import bcrypt from "bcrypt";

export const comparePassword = async (password, hash) => {
  return bcrypt.compare(password, hash);
};
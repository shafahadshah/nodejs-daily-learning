import Account from "../models/Account.js";

export const createAccount = async (req, res) => {
  const account = await Account.create(req.body);
  res.json(account);
};
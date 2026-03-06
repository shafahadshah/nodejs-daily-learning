import mongoose from "mongoose";
import Account from "../models/Account.js";

export const transferMoney = async (fromId, toId, amount) => {
  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    const sender = await Account.findById(fromId).session(session);
    const receiver = await Account.findById(toId).session(session);

    if (!sender || !receiver) {
      throw new Error("Account not found");
    }

    if (sender.balance < amount) {
      throw new Error("Insufficient balance");
    }

    sender.balance -= amount;
    receiver.balance += amount;

    await sender.save({ session });
    await receiver.save({ session });

    await session.commitTransaction();

    session.endSession();

    return { message: "Transfer successful" };

  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    throw error;
  }
};
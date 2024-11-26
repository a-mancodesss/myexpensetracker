"use server";

import { use } from "react";
import { auth } from "../auth";
import { connectToDb } from "../db/connect";
import { Expense, userModel } from "../db/model";
import { expenseType, expenseTypeWithUser } from "../Types/allTypes";
//a fucntion to get user id by email
export async function getUserId() {
  const session = await auth();
  try {
    const email = session?.user?.email;
    if (!email) throw new Error("No email found in session");
    connectToDb();
    const user = await userModel.findOne({ email: email });
    if (!user) throw new Error("No user found with this email");
    return user._id.toString();
  } catch (err: any) {
    throw new Error("Error in getting user id", err);
  }
}

export async function saveExpense(expense: expenseType) {
  const userId = await getUserId();
  const newExpense = {
    amount: expense.amount,
    category: expense.category,
    date: expense.date,
    user: userId,
  };
  try {
    connectToDb();
    const expenseTostore = new Expense(newExpense);
    await expenseTostore.save();
    console.log('Expense saved successfully!');
  } catch (err: any) {
    console.log("Error in saving expense", err);
    throw new Error("Error in saving expense", err);
  }
}

export async function getExpenses() {
  const userId = await getUserId();
  try {
    connectToDb();
    const expenses = await Expense.find({ user: userId });
    console.log(expenses)
    return expenses;
  } catch (err: any) {
    console.log("Error in getting expenses", err);
    throw new Error("Error in getting expenses", err);
  }
}

"use server"

import { connectToDb } from "../db/connect"
import { Expense } from "../db/model";
import { expenseType } from "../Types/allTypes";

export async function saveExpense(expense:expenseType){
    try{
        connectToDb()
        const newExpense = new Expense(Expense)
        await newExpense.save()
    }
    catch(err:any){
        console.log('Error in saving expense', err);
        throw new Error('Error in saving expense',err)
    }
}
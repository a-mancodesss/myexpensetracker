import mongoose from 'mongoose'
import { Category } from '../Types/allTypes';

const userSchema = new mongoose.Schema({
    name: { 
        type: String, 
        unique: true, 
        required: true 
    }
    , email: { 
        type: String, 
        unique: true, 
        required: true 
    }
    , imgUrl: { 
        type: String, 
        required: true 
    }
}, { timestamps: true });

 const User = mongoose.models.User || mongoose.model('User', userSchema)



// export enum Category {
//     Food = 'food',
//     Shop = 'shop',
//     Travel = 'travel',
//     Miscellaneous = 'miscellaneous'
//   }

//  export interface expenseType{
//     amount:number,
//     category:Category,
//     date:Date | null
//   }
const expenseSchema = new mongoose.Schema({
    amount: { 
        type: Number, 
        required: true 
    }
    , category: { 
        type: String, 
        required: true 
    }
    , date: { 
        type: Date, 
        required: true 
    }
    , user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    }
}, { timestamps: true });

 const Expense = mongoose.models.Expense || mongoose.model('Expense', expenseSchema)
 export { User,Expense }
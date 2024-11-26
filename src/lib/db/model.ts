import mongoose, { Model } from 'mongoose'
import { userType } from '../Types/allTypes';

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

let userModel:Model<userType>
try{
    userModel = mongoose.model<userType>('User')
}
catch{
    userModel = mongoose.model<userType>('User',userSchema)
}
//  const User = mongoose.models.User || mongoose.model('User', userSchema)

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
        ref: 'userModel' 
    }
}, { timestamps: true });

let Expense:Model<userType>
try{
    Expense = mongoose.model<userType>('Expense')
}
catch{
    Expense = mongoose.model<userType>('Expense',expenseSchema)
}
//  const Expense = mongoose.models.Expense || mongoose.model('Expense', expenseSchema)
 export { userModel,Expense }
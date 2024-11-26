//update a expenseType basedon schema
// amount: { 
//   type: Number, 
//   required: true 
// }
// , category: { 
//   type: String, 
//   required: true 
// }
// , date: { 
//   type: Date, 
//   required: true 
// }
// , user: { 
//   type: mongoose.Schema.Types.ObjectId, 
//   ref: 'userModel' 
// }

export type userType = {
    name: string,
    email: string,
    imgUrl: string
}

export enum Category {
    Food = 'food',
    Shop = 'shop',
    Travel = 'travel',
    Miscellaneous = 'miscellaneous'
  }

 export interface expenseType{
    amount:number,
    category:Category,
    date:Date | null
  }
  export interface expenseTypeWithUser extends expenseType{
    user:string
  }
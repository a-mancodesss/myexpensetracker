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
    _id:string,
    amount:number,
    category:string,
    date:Date | null
  }
  export interface expenseTypeWithUser extends expenseType{
    user:string
  }
  //create a type named returned data having this 
  // {
  //   _id: '6749c605eac550270ade0787',
  //   amount: 3343334,
  //   category: 'shop',
  //   date: '2024-11-20T18:15:00.000Z',
  //   user: '67461bd66e73b6376f072c0b',
  //   createdAt: '2024-11-29T13:47:49.773Z',
  //   updatedAt: '2024-11-29T13:47:49.773Z',
  //   __v: 0
  // }
  export type returnedDataType = {
    _id:string,
    amount:number,
    category:string,
    date:Date,
    user:string,
    createdAt:Date,
    updatedAt:Date,
    __v:number
  }
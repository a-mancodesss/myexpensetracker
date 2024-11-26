//create a UserType basedon schema
// const userSchema = new mongoose.Schema({
//   name: { 
//       type: String, 
//       unique: true, 
//       required: true 
//   }
//   , email: { 
//       type: String, 
//       unique: true, 
//       required: true 
//   }
//   , imgUrl: { 
//       type: String, 
//       required: true 
//   }
// }, { timestamps: true });

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

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
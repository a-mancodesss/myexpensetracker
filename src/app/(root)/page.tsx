import Expenditure from '@/components/Expenditure'
import ExpenseInput from '@/components/expense-input'
import { getExpenses } from '@/lib/actions/myaction'
import { format } from 'date-fns'
import { get } from 'http'
import { FC } from 'react'

const Page: FC = async() => {
  const allExpenses = await getExpenses()
  return (
    <div className="font-ralway">
    <ExpenseInput/>
    <Expenditure/>
    {allExpenses.map((expense:any)=>(
      <div className='mb-2' key={expense._id}>
        <p>{expense.amount}</p>
        <p>{expense.category}</p>
        <p>{format(expense.date,'MM/dd/yyyy')}</p> </div>
    )
    )}
    </div>
  )
}

export default Page
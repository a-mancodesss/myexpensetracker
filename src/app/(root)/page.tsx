import Expenditure from '@/components/Expenditure'
import ExpenseInput from '@/components/expense-input'
import { getExpenses } from '@/lib/actions/myaction'
import { expenseType } from '@/lib/Types/allTypes'
import { format } from 'date-fns'
import { get } from 'http'
import { FC } from 'react'

const Page: FC = async() => {
  const allExpenses = await getExpenses()
  return (
    <div className="font-ralway">
    <ExpenseInput/>
    <div className="wrapper-scrollable lg:w-auto">

    {allExpenses.map((expense:any)=>(
      <Expenditure key={expense._id} {...expense._doc}/>
    )
  )}
  </div>
    </div>
  )
}

export default Page
import Expenditure from '@/components/Expenditure'
import ExpenseInput from '@/components/expense-input'
import { getExpenses } from '@/lib/actions/myaction'
import { expenseType } from '@/lib/Types/allTypes'
import { format } from 'date-fns'
import { get } from 'http'
import { FC } from 'react'

const Page: FC = async() => {
  return (
    <div className="font-ralway">
    <ExpenseInput/>
    </div>
  )
}

export default Page
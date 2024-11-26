import Expenditure from '@/components/Expenditure'
import ExpenseInput from '@/components/expense-input'
import { FC } from 'react'

const Page: FC = () => {
  return (
    <div className="font-ralway">
    <ExpenseInput/>
    <Expenditure/>
    </div>
  )
}

export default Page
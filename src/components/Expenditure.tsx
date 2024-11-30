
import { format } from 'date-fns'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { returnedDataType } from '@/lib/Types/allTypes'
import { Edit, Trash } from 'lucide-react'
import { deleteExpense, editExpense } from '@/lib/actions/myaction'
import { revalidatePath } from 'next/cache'

const Expenditure = (expense:returnedDataType) => {
  console.log(expense)
  const handleEdit = async () => {
    await editExpense(expense);
    revalidatePath('/')
  }
  const handleDelete = () => {
    console.log('delete*********************')
  }

  return (


    <TableRow>
      <TableCell className="font-medium w-[200px]">{format( new Date (expense.date),'PP')} </TableCell>
      <TableCell>{expense.category}</TableCell>
      <TableCell  className='text-red-500'>
        <form action={deleteExpense}>
        <input type="hidden" name="id" value={expense._id} />
          <button>  <Trash  size={20}/></button> 
        </form>
        </TableCell>
      <TableCell className=''> <Edit size={20}/> </TableCell>

      <TableCell className="text-right text-red-700">{expense.amount}</TableCell>
    </TableRow>

  
  )
}

export default Expenditure
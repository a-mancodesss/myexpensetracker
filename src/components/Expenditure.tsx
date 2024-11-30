
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
import { DialogDemo } from './EditExpense'
import { Button } from './ui/button'

const Expenditure = (expense:returnedDataType) => {

  return (


    <TableRow>
      <TableCell className="font-medium w-[200px]">{format( new Date (expense.date),'PP')} </TableCell>
      <TableCell>{expense.category}</TableCell>
      <TableCell  className='text-red-500'>
        <form action={deleteExpense}>
        <input type="hidden" name="id" value={expense._id} />
        <Button variant="outline"><Trash size={20}/></Button>

        </form>
        </TableCell>
      <TableCell className=''> <DialogDemo /> </TableCell>

      <TableCell className="text-right text-red-700">{expense.amount}</TableCell>
    </TableRow>

  
  )
}

export default Expenditure
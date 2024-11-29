
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

const Expenditure = (expense:returnedDataType) => {

  return (


    <TableRow>
      <TableCell className="font-medium">{format( new Date (expense.date),'PP')} </TableCell>
      <TableCell>{expense.category}</TableCell>
      <TableCell className="text-right">{expense.amount}</TableCell>
    </TableRow>

  
  )
}

export default Expenditure
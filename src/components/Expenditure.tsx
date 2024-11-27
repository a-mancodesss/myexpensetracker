
import { format } from 'date-fns'

const Expenditure = (expenses:any) => {

  return (
    <div  className="mb-2 p-4 rounded-lg bg-card hover:bg-card/80 transition-colors  mx-auto items-center">
    <div className="grid grid-cols-3 gap-4">
      <p className="text-lg font-medium font-serif">${expenses.amount}</p>
      <p className="text-muted-foreground capitalize">{expenses.category}</p>
      <p className="text-muted-foreground text-right">
        {expenses.date ? format(new Date(expenses.date), 'MM/dd/yyyy') : 'N/A'}
      </p>
    </div>
  </div>
  )
}

export default Expenditure
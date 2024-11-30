import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Calendar } from "@/components/ui/calendar"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Category, expenseType } from "@/lib/Types/allTypes"
import { useState } from "react"
import { editExpense } from "@/lib/actions/myaction"
import { CalendarIcon, Edit } from 'lucide-react'
import { cn } from "@/lib/utils"


export function DialogDemo() {
    const [date, setDate] = useState<Date|undefined>()
    const [category, setCategory] = useState<Category>();
    const [amount, setAmount] = useState<number>(0);
    const [formData, setFormData] = useState<expenseType>();
    
  return (
    <Dialog >
    <DialogTrigger asChild>
      <Button variant="outline">
      <Edit size={20} />
      </Button>
    </DialogTrigger>
    <DialogContent className=" bg-white dark:bg-black sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Edit profile</DialogTitle>
      
      </DialogHeader>
      <form onSubmit={editExpense}>
    <div className=" space-y-4  ">
      <div className="flex justify-center  mx-auto gap-4 ">
        <div className="w-full sm:w-auto">
          <Input  inputMode='numeric'  type="number" name='amount' id="amount" placeholder=" amount" value={amount} onChange={(e)=>setAmount(parseInt(e.target.value))} className="w-full" />
        </div>
        <div className="w-full sm:w-auto">
          <Select onValueChange={(value:Category)=>setCategory(value)}>
            <SelectTrigger id="category" className="w-full sm:w-[120px]">
              <SelectValue placeholder="category" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value={Category.Food}>Food</SelectItem>
                <SelectItem value={Category.Shop}>Shop</SelectItem>
                <SelectItem value={Category.Travel}>Travel</SelectItem>
                <SelectItem value={Category.Miscellaneous}>Miscellaneous</SelectItem>
              </SelectContent>
          </Select>
        </div>
        <div className=" sm:w-auto">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                id="date"
                variant={"outline"}
                className={cn(
                  "w-full  justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
                >
                <CalendarIcon className="h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
                />
            </PopoverContent>
          </Popover>
          </div>
      <Button type="submit" className="btn btn-primary">Add</Button>
    </div>
        </div>
      
    </form>
    </DialogContent>
  </Dialog>
  )
}

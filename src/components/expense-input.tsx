'use client'

import React, { FormEvent, use, useEffect, useRef, useState } from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon } from 'lucide-react'
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Category, expenseType } from '@/lib/Types/allTypes'
import { getExpenses, saveExpense } from '@/lib/actions/myaction'
import Expenditure from './Expenditure'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default  function ExpenseInput() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLTableRowElement>(null);
  let totalExpense:number = 0;
  const [date, setDate] = useState<Date|undefined>()
  const [category, setCategory] = useState<Category>();
  const [amount, setAmount] = useState<number>(0);
  const [formData, setFormData] = useState<expenseType>();

  const [allExpenses, setAllExpenses] = useState<expenseType[]>([]);
  const handleSubmit = (e:FormEvent) => {
    e.preventDefault();
    const newFromData = {
      amount,
      category,
      date
    };
    setFormData(newFromData as expenseType);
  };
  //pass formdata to expenditure component
  useEffect(() => {
    const runEffects = async () => {
      console.log(formData)
      if (formData) {
        await saveExpense(formData);
      
        }
        const res =  await getExpenses();
        setAllExpenses(res);
        if (targetRef.current && scrollRef.current) {
          scrollRef.current.scrollTo({
            top: targetRef.current.offsetTop,
            behavior: "smooth",
          });
        }
    };
  
    runEffects();
  }, [formData]);


  return (<>
    <form onSubmit={handleSubmit}>
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
       <div  ref={scrollRef} className=" mt-20 wrapper-scrollable lg:w-auto">
       <Table>

<TableHeader>
<TableRow>
<TableHead className="w-[150px]">Date</TableHead>
<TableHead>Category</TableHead>
<TableHead className="text-right">Amount</TableHead>
</TableRow>
</TableHeader>
<TableBody >

       {allExpenses.map((expense:any)=>(
        totalExpense += expense.amount,
         <Expenditure key={expense._id} {...expense}/>
         
        )
      )}
        <TableRow ref={targetRef}>
      <TableCell className="font-bold text-orange-400">Total Expense </TableCell>
      <TableCell>{''}</TableCell>
      <TableCell className="text-right">{totalExpense}</TableCell>
    </TableRow>

  </TableBody>

      </Table>
     </div>
      </>
  )
}


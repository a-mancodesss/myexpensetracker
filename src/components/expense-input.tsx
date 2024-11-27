'use client'

import React, { FormEvent, use, useEffect, useState } from 'react'
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
import { saveExpense } from '@/lib/actions/myaction'


export default  function ExpenseInput() {
  const [date, setDate] = useState<Date>()
  const [category, setCategory] = useState<Category>();
  const [amount, setAmount] = useState<number| 0>();
  const [formData, setFormData] = useState<expenseType>();
  const handleSubmit = (e:FormEvent) => {
    e.preventDefault();
    const newFromData = {
      amount,
      category,
      date
    };
    setFormData(newFromData as expenseType);
    
    console.log(formData);
  };
  //pass formdata to expenditure component
  useEffect(() => {
    const saveFormData = async () => {
      if (formData) {
        await saveExpense(formData);
      }
    };
    saveFormData();
  }, [formData]);


  return (
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
  )
}


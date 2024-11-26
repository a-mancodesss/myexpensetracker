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
      date:date? format(date, "PPa") : null,
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
    <div className=" space-y-4 mb-auto ">
      <div className="flex justify-around sm:w-5/6  gap-4 ">
        <div className="w-full sm:w-auto">
          <Label htmlFor="amount">Amount </Label>
          <Input  inputMode='numeric'  type="number" name='amount' id="amount" placeholder="Enter amount" value={amount} onChange={(e)=>setAmount(parseInt(e.target.value))} className="w-full" />
        </div>
        <div className="w-full sm:w-auto">
          <Label htmlFor="category">Category</Label>
          <Select onValueChange={(value:Category)=>setCategory(value)}>
            <SelectTrigger id="category" className="w-full sm:w-[120px]">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value={Category.Food}>Food</SelectItem>
                <SelectItem value={Category.Shop}>Shop</SelectItem>
                <SelectItem value={Category.Travel}>Travel</SelectItem>
                <SelectItem value={Category.Miscellaneous}>Miscellaneous</SelectItem>
              </SelectContent>
          </Select>
        </div>
        <div className="w-[60%] sm:w-auto">
          <Label htmlFor="date">Date</Label><br />
          <Popover>
            <PopoverTrigger asChild>
              <Button
                id="date"
                variant={"outline"}
                className={cn(
                  "w-full sm:w-[240px] justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? 'Picked' : <span>Pick </span>}
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
      </div>
      <Button type="submit" className="btn btn-primary">Add</Button>
    </div>
    </form>
  )
}


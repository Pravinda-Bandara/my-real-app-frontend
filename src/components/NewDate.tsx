"use client"

import * as React from "react"
import { cn } from "../lib/utils"
import { Button } from "./ui/button"
import { Calendar, CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { format } from "date-fns"

export function NewDate({ className }: React.HTMLAttributes<HTMLDivElement>) {
    const [date, setDate] = React.useState<Date | undefined>(new Date())

    return (
        <div className={cn("flex items-center justify-center space-x-2", className)}>
            <div className="flex items-center rounded-full border border-blue-500">
                <Button variant="ghost" size="icon" onClick={() => setDate(prev => prev ? new Date(prev.setDate(prev.getDate() - 1)) : undefined)}>
                    <ChevronLeft className="h-4 w-4 text-blue-500" />
                </Button>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button
                            variant="ghost"
                            className="flex items-center space-x-2 px-2 py-1 font-bold"
                        >
                            <CalendarIcon className="h-4 w-5" />
                            <span>{date ? format(date, "EEE, dd, MMM y") : "Pick a date"}</span>
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                            initialFocus
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                        />
                    </PopoverContent>
                </Popover>
                <Button variant="ghost" size="icon" onClick={() => setDate(prev => prev ? new Date(prev.setDate(prev.getDate() + 1)) : undefined)}>
                    <ChevronRight className="h-4 w-4 text-blue-500" />
                </Button>
            </div>
        </div>
    )
}

export default NewDate

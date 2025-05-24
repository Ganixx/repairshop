"use client"

import { useFormContext } from "react-hook-form";

import {
    FormControl,
    FormItem,
    FormLabel,
    FormMessage,
    FormField,
} from "@/components/ui/form"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select"

type DataObj = {
    id: string,
    description : string
}

type Props<S> = {
    fieldTitle : string,
    nameInSchema : keyof S & string,
    data: DataObj[],
    className?: string
}

export function SelectWithLabel<S>({
    fieldTitle, nameInSchema, data , className
}: Props<S>){
    const form = useFormContext()

    return(
        <FormField
            control={form.control}
            name={nameInSchema}
            render={({field}) => (
                <FormItem>
                    <FormLabel className="text-base mb-2" htmlFor={nameInSchema}>
                        {fieldTitle}
                    </FormLabel>
                    <Select onValueChange={field.onChange} {...field}>
                        <FormControl>
                            <SelectTrigger 
                            id={nameInSchema}
                            className={`w-full max-w-xs ${className}`}
                            >
                                <SelectValue placeholder="Select"/>
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            {
                                data.map(ele =>(
                                    <SelectItem value={ele.id} key={`${nameInSchema}_${ele.id}`}>
                                        {ele.description}
                                    </SelectItem>
                                ))
                            }
                        </SelectContent>
                    </Select>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}
 
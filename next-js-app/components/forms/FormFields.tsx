import { Input } from "@/components/ui/input"
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { UseFormReturn } from "react-hook-form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"

interface TextInputProps {
    name: string
    label: string
    placeholder?: string
    description?: string
    form: UseFormReturn<any>
}

export const TextInput: React.FC<TextInputProps> = ({ name, label, placeholder, description, form }) => {
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <Input placeholder={placeholder} {...field} />
                    </FormControl>
                    {description && <FormDescription>{description}</FormDescription>}
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}


interface SelectInputProps {
    name: string
    label: string
    placeholder?: string
    options: string[]
    form: UseFormReturn<any>
    className?:string
}

export const SelectInput: React.FC<SelectInputProps> = ({ name, label, placeholder, options, form ,className}) => {
    return (
        <FormField 
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem className={cn("w-full",className)}>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <SelectTrigger>
                                <SelectValue placeholder={placeholder || "Select"} />
                            </SelectTrigger>
                            <SelectContent>
                                {options.map((option) => (
                                    <SelectItem key={option} value={option}>
                                        {option}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}

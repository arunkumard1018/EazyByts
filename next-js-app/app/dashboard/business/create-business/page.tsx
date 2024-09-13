"use client"
import { SelectInput, TextInput } from '@/components/forms/FormFields'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { BUSINESS_CATEGORY } from '@/config/DashboardConfig'
import { toast } from '@/hooks/use-toast'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2 } from 'lucide-react'
import { INDIAN_STATES } from '@/config/FormConfig'
import { BusinessFormSchema } from '@/lib/zodSchemas/DashBoardFormSchemas'



function page() {
    return (
        <div className='flex items-center justify-center my-4'><BusinessDetailsForm /></div>
    )
}
export default page




export function BusinessDetailsForm() {
    const form = useForm<z.infer<typeof BusinessFormSchema>>({
        resolver: zodResolver(BusinessFormSchema),
        defaultValues: {
            name: "",
            category: "",
            address: "", city: "", state: "", statecode: undefined, GSTIN: "", HSN: undefined, zip: undefined,
        },
    })

    function onSubmit(data: z.infer<typeof BusinessFormSchema>) {
        console.log(data);
        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
        })
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className=" md:w-2/3  space-y-6">
                <Card>
                    <CardHeader className='flex-row items-center space-x-4 rounded-md border p-4'>
                        <Building2 />
                        <div className="flex-1 space-y-1">
                            <CardTitle className="text-lg font-medium leading-none">Business Details</CardTitle>
                            <CardDescription className='text-sm text-muted-foreground'>The Below Details will be Used to Create Invoice.</CardDescription>
                        </div>
                    </CardHeader>
                    <CardContent className="grid gap-4">

                        <TextInput name="name" label="Business Name" placeholder="Enter business name" form={form} />
                        <SelectInput
                            name="category"
                            label="Business Category"
                            placeholder="Select a category"
                            options={BUSINESS_CATEGORY}
                            form={form}
                        />
                        <div className='space-y-4'>
                            <TextInput name="address" label="Address" placeholder="#23/4 " form={form} />
                            <div className=' md:flex w-full justify-between md:space-x-4' >
                                <SelectInput className='md:w-1/2' name="state" label="State" placeholder="Select a State" options={INDIAN_STATES} form={form} />
                                <div className='flex space-x-2'>
                                    <TextInput name="city" label="city" placeholder="city" form={form} />
                                    <TextInput name="zip" label="zip" placeholder="zip" form={form} />
                                </div>
                            </div>
                        </div>
                        <div className='md:flex justify-between space-y-4'>
                            <TextInput name="GSTIN" label="GSTIN" placeholder="AYXGSTIN " form={form} />
                            <TextInput name="HSN" label="HSN" placeholder="22" form={form} />
                            <TextInput name="statecode" label="statecode" placeholder="22" form={form} />
                        </div>
                        <Button type="submit">Save</Button>
                    </CardContent>
                </Card>

            </form>
        </Form>
    )
}



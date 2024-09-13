"use client"
import {File,PlusCircle} from "lucide-react"
import { Button } from "@/components/ui/button"
import {Tabs} from "@/components/ui/tabs"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Customerscolumns } from "./CustomersColumn"
import { TableComponent } from "@/components/reusable-table/TableComponent"
import { CustomersData } from "@/lib/placeholder-data"

function CustomerData({className}:{className?:string}) {
    return (
        <div className={cn("flex min-h-screen w-full flex-col bg-muted/40", className)}>
            <div className="flex flex-col sm:py-4">
                <div className="grid flex-1 items-start gap-4  md:p-4 sm:px-6 sm:py-0 md:gap-8">
                    <Tabs defaultValue="all">
                        <div className="flex items-center px-2 md:px-0 mt-2 md:mt-0">
                            <div className="ml-auto flex items-center gap-2">
                                <Button size="sm" variant="outline" className="h-7 gap-1">
                                    <File className="h-3.5 w-3.5" />
                                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                        Export
                                    </span>
                                </Button>
                                <Link href="customers/create-customer">
                                    <Button size="sm" className="h-7 gap-1">
                                        <PlusCircle className="h-3.5 w-3.5" />
                                        <span className=" sm:not-sr-only sm:whitespace-nowrap">
                                            Add Customer
                                        </span>
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <TableComponent columns={Customerscolumns} data={CustomersData} heading="Customers" headingInfo="Manage your Customers and view their status." 
                        smHiddenCells={["city","GSTIN","phone"]}
                        isSearchInputRequired searchInputValue="name" />
                    </Tabs>
                </div>
            </div>
        </div>
    )
}

export default CustomerData
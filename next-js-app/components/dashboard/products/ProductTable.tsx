"use client"
import {
    File,
    ListFilter,
    PlusCircle
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import {
    Tabs,
    TabsList,
    TabsTrigger
} from "@/components/ui/tabs"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { ProductColumns } from "./ProductColumn"
import { TableComponent } from "@/components/reusable-table/TableComponent"
import { ProductsData } from "@/lib/placeholder-data"

export const description =
    "An products dashboard with a sidebar navigation. The sidebar has icon navigation. The content area has a breadcrumb and search in the header. It displays a list of products in a table with actions."




export function ProductTable({ className }: { className?: string }) {


    return (
        <div className={cn("flex min-h-screen w-full flex-col bg-muted/40", className)}>
            <div className="flex flex-col sm:py-4">
                <div className="grid flex-1 items-start gap-4  md:p-4 sm:px-6 sm:py-0 md:gap-8">
                    <Tabs defaultValue="all">
                        <div className="flex items-center px-2 md:px-0 mt-2 md:mt-0">
                            <TabsList>
                                <TabsTrigger value="all">All</TabsTrigger>
                                <TabsTrigger value="active">Active</TabsTrigger>
                                <TabsTrigger value="archived" className="hidden sm:flex">
                                    Archived
                                </TabsTrigger>
                            </TabsList>

                            <div className="ml-auto flex items-center gap-2">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="outline" size="sm" className="h-7 gap-1">
                                            <ListFilter className="h-3.5 w-3.5" />
                                            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                                Filter
                                            </span>
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuCheckboxItem checked>
                                            INSTOCK
                                        </DropdownMenuCheckboxItem>
                                        <DropdownMenuCheckboxItem>OUTOFSTOCK</DropdownMenuCheckboxItem>
                                        <DropdownMenuCheckboxItem>
                                            Archived
                                        </DropdownMenuCheckboxItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>

                                <Button size="sm" variant="outline" className="h-7 gap-1">
                                    <File className="h-3.5 w-3.5" />
                                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                        Export
                                    </span>
                                </Button>
                                <Link href="invoices/create-invoice">
                                    <Button size="sm" className="h-7 gap-1">
                                        <PlusCircle className="h-3.5 w-3.5" />
                                        <span className=" sm:not-sr-only sm:whitespace-nowrap">
                                            Add Product
                                        </span>
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        <TableComponent columns={ProductColumns} data={ProductsData} heading="Products" headingInfo="Product Details" 
                        smHiddenCells={["status","GST","discount","SKU"]}
                        isSearchInputRequired 
                        searchInputValue="name" 
                        isSelectAvailable />

                    </Tabs>
                </div>
            </div>
        </div>
    )
}





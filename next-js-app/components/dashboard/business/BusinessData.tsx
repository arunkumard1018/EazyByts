"use client"
import {
    File,
    PlusCircle
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs } from "@/components/ui/tabs"
import Link from "next/link"
import { Businesscolumns } from "./BusinessColumn"
import { TableComponent } from "@/components/reusable-table/TableComponent"
import { business } from "@/lib/placeholder-data"

export default function BusinessData() {
    return (

        <div className="flex flex-col sm:py-4">
            <div className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                <Tabs defaultValue="all">
                    <div className="flex items-center">

                        <div className="ml-auto flex items-center gap-2">

                            <Button size="sm" variant="outline" className="h-7 gap-1">
                                <File className="h-3.5 w-3.5" />
                                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                    Export
                                </span>
                            </Button>
                            <Link href="business/create-business">
                                <Button size="sm" className="h-7 gap-1">
                                    <PlusCircle className="h-3.5 w-3.5" />
                                    <span className="sm:not-sr-only sm:whitespace-nowrap">
                                        Add New Business
                                    </span>
                                </Button>
                            </Link>
                        </div>
                    </div>
                    
                    <TableComponent columns={Businesscolumns} data={business} heading="Business Details" headingInfo="Manage You Business" 
                    smHiddenCells={["revenue"]}
                    isSearchInputRequired={false} 
                    searchInputValue="" 
                    isSelectAvailable={false} />
                </Tabs>
            </div>
        </div>
    )
}

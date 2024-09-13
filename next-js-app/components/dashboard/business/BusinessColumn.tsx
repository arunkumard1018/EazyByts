"use client"

import { ActionsDropDownRow } from "@/components/reusable-table/ActionDropDownRow"
import { TableColumnHeader } from "@/components/reusable-table/TableColumnHaeder"
import { Business } from "@/lib/type/TableData"
import {
    ColumnDef
} from "@tanstack/react-table"

import { ChevronsUpDown } from "lucide-react"
import Image from "next/image"

// This type is used to define the shape of our data.
// we can use a Zod schema here if we want.




// export type Business = {
//     id: string
//     businessLogo:string
//     BusinessName: String
//     revenue:number
//     totalInvoices:number
// }

export const Businesscolumns: ColumnDef<Business>[] = [

    {
        id: "businessLogo",
        accessorKey: "businessLogo",
        header: "Logo",
        cell: ({ row }) => (
            <Image
                alt="Product image"
                className="aspect-square rounded-md object-cover"
                height="64"
                src={row.getValue("businessLogo")}
                width="64"
            />
        ),
        
    },


    {
        id: "BusinessName",
        accessorKey: "BusinessName",
        header: ({ column }) => {
            return (
                <div className="flex items-center justify-start cursor-pointer capitalize" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")} >
                    Business Name
                    <ChevronsUpDown className="h-4 w-4" />
                </div>
            )
        },
    cell: ({ row }) => <div className="capitalize">{row.getValue("BusinessName")}</div>,
    },

    {
        id: "totalInvoices",
        accessorKey: "totalInvoices",
        header: "Total Invoices",
        cell: ({ row }) => (
            <div className="capitalize table-cell">{row.getValue("totalInvoices")}</div>
        ),
    },
    
    {
        id: "revenue",
        accessorKey: "revenue",
        header: ({column}) => <TableColumnHeader column={column} title="Revenue"/>,
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("revenue"))
            const formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "INR",
            }).format(amount)

            return <div className="font-medium">{formatted}</div>
        },
    },

    {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
            const business = row.original
            return (
                <ActionsDropDownRow id={business.id} name="Business" path="/dashboard/business" />
            )
        },
    },
]
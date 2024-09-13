"use client"

import {ColumnDef} from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox"
import { Payment } from "@/lib/type/TableData"
import { ActionsDropDownRow } from "@/components/reusable-table/ActionDropDownRow"
import { TableColumnHeader } from "@/components/reusable-table/TableColumnHaeder"

// This type is used to define the shape of our data.
// we can use a Zod schema here if we want.


export const Invoicecolumns: ColumnDef<Payment>[] = [
    {
        id: "select",
        accessorKey: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },

    {
        id: "id",
        accessorKey: "id",
        header: ({ column }) => {
            return (
                <TableColumnHeader column={column} title="Invoice id" isMobileHidden={false} className="" />
            )
        },
        cell: ({ row }) => <div className="lowercase">{row.getValue("id")}</div>,
    },

    {
        id: "email",
        accessorKey: "email",
        header: ({ column }) => {
            return (
                <TableColumnHeader column={column} title="Email" isMobileHidden className="" />
            )
        },
        cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
    },

    {
        id: "amount",
        accessorKey: "amount",
        header: "Amount",
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("amount"))

            // Format the amount as a dollar amount
            const formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "INR",
            }).format(amount)

            return <div className="font-medium">{formatted}</div>
        },
    },

    {
        id: "status",
        accessorKey: "status",
        header: ({ column }) => {
            return (
                <TableColumnHeader column={column} title="Status" isMobileHidden className="" />
            )
        },
        cell: ({ row }) => {
            return (
                <div className="capitalize">{row.getValue("status")}</div>
            )
        },
    },

    {
        id: "actions",
        accessorKey: "actions",
        enableHiding: false,
        cell: ({ row }) => {
            const payment = row.original
            return (
                <ActionsDropDownRow id={payment.id} name="Invoice" path="/dashboard/invoices" />

            )
        },
    },
]
"use client"

import { ActionsDropDownRow } from "@/components/reusable-table/ActionDropDownRow"
import { TableColumnHeader } from "@/components/reusable-table/TableColumnHaeder"
import { Checkbox } from "@/components/ui/checkbox"
import { Customers } from "@/lib/type/TableData"
import { ColumnDef } from "@tanstack/react-table"

export const Customerscolumns: ColumnDef<Customers>[] = [
    {
        id: "select",
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
        id: "name",
        accessorKey: "name",
        header: ({ column }) => {
            return (
                <TableColumnHeader column={column} title="Customer Name" isMobileHidden={false} />
            )
        },
        cell: ({ row,table }) => {
            // console.log(table.getSelectedRowModel().rowsById)
            const customer = row.original
            return (
                <div>
                    <div className="capitalize">{row.getValue("name")}</div>
                    <p className="text-sm">{customer.email}</p>
                </div>
            )
        },
    },

    {
        id: "city",
        accessorKey: "city",
        header: ({ column }) => {
            return (
                <TableColumnHeader column={column} title="City" isMobileHidden />
            )
        },
        cell: ({ row }) => <div className="capitalize">{row.getValue("city")}</div>,
    },

    {
        id: "GSTIN",
        accessorKey: "GSTIN",
        header: ({ column }) => {
            return (
                <TableColumnHeader column={column} title="GSTIN" isMobileHidden NotSortable />
            )
        },
        cell: ({ row }) => <div className="capitalize">{row.getValue("GSTIN")}</div>,
    },
    {
        id: "phone",
        accessorKey: "phone",
        header: ({ column }) => {
            return (
                <TableColumnHeader column={column} title="Phone No" isMobileHidden NotSortable />
            )
        },
        cell: ({ row }) => <div className="capitalize">{row.getValue("phone")}</div>,
    },
    {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
            const payment = row.original
            return (
                <ActionsDropDownRow id={payment.id} name="Customer" path="/dashboard/customers" />
            )
        },
    },
]



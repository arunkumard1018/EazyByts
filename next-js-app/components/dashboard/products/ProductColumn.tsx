"use client"

import {
    ColumnDef
} from "@tanstack/react-table"

import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Product } from "@/lib/type/TableData"
import { TableColumnHeader } from "@/components/reusable-table/TableColumnHaeder"
import { ActionsDropDownRow } from "@/components/reusable-table/ActionDropDownRow"

// This type is used to define the shape of our data.
// we can use a Zod schema here if we want.


export const ProductColumns: ColumnDef<Product>[] = [
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
        id: "SKU",
        accessorKey: "SKU",
        header: ({ column }) => {
            return (
                <TableColumnHeader column={column} title="SKU"  NotSortable />
            )
        },
        cell: ({ row }) => <div className="uppercase">{row.getValue("SKU")}</div>,
    },

    {
        id: "name",
        accessorKey: "name",
        header: ({ column }) => {
            return (
                <TableColumnHeader column={column} title="Product Name"  />
            )
        },
        cell: ({ row }) => <div className="capitalize">{row.getValue("name")}</div>,
    },

    {
        id: "price",
        accessorKey: "price",
        header: ({ column }) => {
            return (
                <TableColumnHeader column={column} title="Price" />
            )
        },
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("price"))
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
        header: ({ column }) => (
            <TableColumnHeader column={column} title="Status"  NotSortable />
        ),
        cell: ({ row }) => (
            <Badge className="text-xs capitalize" variant="outline">
                {row.getValue("status")}
            </Badge>
        ),
    },

    {
        id: "GST",
        accessorKey: "GST",
        header: ({ column }) => (
            <TableColumnHeader column={column} title="GST" NotSortable />
        ),
        cell: ({ row }) => {
            const product = row.original
            return (
                <div className="flex space-x-2">
                    <div className="capitalize">{row.getValue("GST")}</div>
                    <div>
                        <Badge className="text-xs capitalize" variant="outline">
                            {product.GST_VALUE}%
                        </Badge>
                    </div>

                </div>
            )
        },
    },

    {
        id: "discount",
        accessorKey: "discount",
        header: ({ column }) => (
            <TableColumnHeader column={column} title="Discount"  NotSortable />
        ),
        cell: ({ row }) => (
            <div className=" capitalize ">
                {row.getValue("discount")}%
            </div>
        ),
    },

    {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
            const product = row.original
            return (
                <ActionsDropDownRow id={product.SKU} name="product" path="/dashboard/products" />
            )
        },
    },
]




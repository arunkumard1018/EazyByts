"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { Column } from "@tanstack/react-table"
import { ArrowDown, ArrowUpIcon, ChevronsUpDown, EyeOff } from "lucide-react"


/**
 * Data Table Column Options
 */

interface DataTableColumnHeaderProps<TData, TValue>
    extends React.HTMLAttributes<HTMLDivElement> {
    column: Column<TData, TValue>
    title: string
    isMobileHidden?: boolean
    NotSortable?: boolean
}

export function TableColumnHeader<TData, TValue>({
    column,
    title,
    isMobileHidden,
    className,
    NotSortable = false,
}: DataTableColumnHeaderProps<TData, TValue>) {
    if (!column.getCanSort()) {
        return <div className={cn(className)}>{title}</div>
    }


    return (
        <div className={cn("flex items-center space-x-2", className)}>
            {NotSortable && <span>{title}</span>}
            {!NotSortable &&
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="ghost"
                            size="sm"
                            className="-ml-3 h-8 data-[state=open]:bg-accent"
                        >
                            <div className="flex items-center">
                                <span>{title}</span>
                                {column.getIsSorted() === "desc" ? (
                                    <ArrowDown className="ml-2 h-4 w-4" />
                                ) : column.getIsSorted() === "asc" ? (
                                    <ArrowUpIcon className="ml-2 h-4 w-4" />
                                ) : (
                                    <ChevronsUpDown className="ml-2 h-3 w-3" />
                                )}
                            </div>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                        <DropdownMenuItem onClick={() => column.toggleSorting(false)}>
                            <ArrowUpIcon className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
                            Asc
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => column.toggleSorting(true)}>
                            <ArrowDown className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
                            Desc
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => column.toggleVisibility(false)}>
                            <EyeOff className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
                            Hide
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            }
        </div>
    )
}
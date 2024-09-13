"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreHorizontal } from "lucide-react"
import Link from "next/link"

export function ActionsDropDownRow({ id, name, path }: { id: string, name: string, path: string }) {
    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem
                        onClick={() => navigator.clipboard.writeText(id)}>
                        Copy {name} ID
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <Link href={`${path}/${id}`} ><DropdownMenuItem>View {name}</DropdownMenuItem></Link>
                    <Link href={`${path}/${id}`} ><DropdownMenuItem>Delete {name}</DropdownMenuItem></Link>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}
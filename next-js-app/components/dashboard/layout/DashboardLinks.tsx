'use client'
import { DASHBOARD_SIDE_BAR_LINKS } from "@/config/DashboardConfig";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";


function DashboardLinks({ navClassName, LinkClassName, onLinkClick }:
    { navClassName?: string, LinkClassName?: string, onLinkClick?: () => void }) {
    const pathname = usePathname();
    return (
        <div className="flex-1">
            <nav className={cn("grid items-start px-2 text-sm font-medium lg:px-4 gap-y-2", navClassName)}>
                {DASHBOARD_SIDE_BAR_LINKS.map((item) => (
                    <Link
                        key={item.pathname}
                        href={item.pathname}
                        onClick={onLinkClick}
                        className={cn("flex items-center gap-3 rounded-lg px-3 py-2  transition-all hover:text-primary",
                            LinkClassName,
                            {
                                'bg-green-500 text-white': pathname === item.pathname,
                            },)}>
                        <item.icon className="h-4 w-4" />
                        {item.title}
                    </Link>
                ))}
            </nav>
        </div>
    )
}

export default DashboardLinks
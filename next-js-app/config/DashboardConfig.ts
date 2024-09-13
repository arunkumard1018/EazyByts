import {FileText,Home,Landmark,LineChart,Package,Users} from "lucide-react";

export const BUSINESS_CATEGORY = ["Retail", "Finance", "Technology","Transpost","service Sector"];

export const DASHBOARD_SIDE_BAR_LINKS = [
    {
        title: "Dashboard",
        pathname: "/dashboard",
        icon: Home,
    },
    {
        title: "Invoices",
        pathname: "/dashboard/invoices",
        icon: FileText,
    },
    {
        title: "Customers",
        pathname: "/dashboard/customers",
        icon: Users,
    },
    {
        title: "Business",
        pathname: "/dashboard/business",
        icon: Landmark,
    },
    {
        title: "Products",
        pathname: "/dashboard/products",
        icon: Package,
    },
    {
        title: "Analytics",
        pathname: "/dashboard/analytics",
        icon: LineChart,
    },
];

import { inter } from "@/components/fonts/fonts";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Strix Invoice",
  description: "Create, send, and track invoices effortlessly while keeping your business organized and on track—all from one powerful app.",
};

export default function RootLayout({ children, }:
  Readonly<{ children: React.ReactNode; }>) {

  return (
    <html lang="en" suppressHydrationWarning >
      
        <body className={cn("min-h-screen bg-background antialiased", inter.className)} suppressHydrationWarning>
          {children}
        </body>
    </html>
  );
}

























// import { inter } from "@/components/fonts/fonts";
// import { cn } from "@/lib/utils";
// import "./globals.css";



// export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
//   return (
//     <html lang="en">
//       <body className={cn(inter.className, "antialiased")}>
//         <div className="">
//           {children}
//         </div>
//       </body>
//     </html>
//   );
// }

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { HERO_PAGE_CONTENT } from '@/config/HeroPageConfig';
import { cn } from '@/lib/utils';
import { Menu, Package2 } from "lucide-react";
import Image from 'next/image';
import Link from "next/link";
function AppLogo({ className }: { className?: string }) {
    return (
        <div className={cn("flex space-x-1 items-center justify-center", className)}>
            <div className='w-[40px] h-[40px] relative z-10'><Image src="/icons/nav-logo.jpg" alt='' fill sizes='w-40px h-40px' quality={100} /></div>
            <div className='hidden md:block w-[100px] h-[45px] relative'><Image src="/icons/nav-logo-text-black.png" alt='' fill sizes='w-100px h-45px' quality={100} /></div>
            <div className='md:hidden flex flex-col p-0 m-0 justify-center text-left'>
                <span className='p-0 m-0 leading-snug font-bold'>Strix</span>
                <span className='p-0 m-0 text-3xl leading-[20px] font-extrabold'>Invoice</span>
            </div>
        </div>
    )
}

export function NavList({ className, LinkClassName }: { className?: string, LinkClassName?: string }) {
    const lst = ["Pricing", "Invoicing", "Product", "Blog"]
    return (
        <div className={cn(className)}>
            {lst.map((item) => (
                <Link href="/" className={cn(LinkClassName)} key={item}>{item}</Link>
            ))}
        </div>
    )
}


export function SheetComponent({ side = "right" }:
    { side?: 'left' | 'right' | 'bottom' | 'top' }) {
    return (
        <Sheet >
            <SheetTrigger asChild>
                <Button
                    variant="outline"
                    size="icon"
                    className="shrink-0 md:hidden"
                >
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle navigation menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side={side} className="flex flex-col">
                <nav className="grid  text-lg font-medium">
                    <Link href="#"
                        className="flex items-center  text-lg font-semibold mb-4">
                        <SheetTitle className="flex items-center space-x-3">
                            <Package2 className="h-6 w-6" />
                            <span className="text-3xl" >StrixInvoice</span>
                        </SheetTitle>
                    </Link>
                    <SheetDescription />

                </nav>
            </SheetContent>
        </Sheet>
    )
}



export function SecondaryHeroSection() {
    return (
        <>
            <div className='p-6 space-y-2 h-[20vh] mt-10' >
                <h2 className='text font-medium text-black text-center  text-2xl sm:text-3xl'>{HERO_PAGE_CONTENT.secondaryHeroContent.mainText}</h2>

                <p className='text-sm text-center'>{HERO_PAGE_CONTENT.secondaryHeroContent.description}</p>
            </div>
            {/* Card Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {HERO_PAGE_CONTENT.secondaryCardDetails.map((card, index) => (
                    <CustomDeatisCard icon={card.icon}
                        key={index * 5}
                        title={card.title}
                        description={card.description}
                        className='p-6 rounded-lg shadow-none border-b bg-white' />
                ))}
            </div>

        </>
    )
}

export function CustomDeatisCard({ icon, title, description, className }:
    { icon: string, title: string, description: string, className?: string }) {
    return (
        <div>
            <div className={cn("bg-gray-100 p-6 rounded-lg shadow-md", className)} >
                <div className='flex space-x-4 items-center'>
                    <div className="text-4xl mb-4">{icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{title}</h3>
                </div>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    )
}

export { AppLogo };

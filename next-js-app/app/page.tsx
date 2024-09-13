import { AppLogo, NavList, SecondaryHeroSection, SheetComponent } from "@/components/custom/elements";
import ShinyButton from "@/components/magicui/shiny-button";
import WordRotate from "@/components/magicui/word-rotate";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/providers/ThemeSelect";
import Image from "next/image";
import Link from "next/link";


function  Page() {
  return (
    <div className="px-4 md:px-36">
      <nav className="h-12 flex justify-between items-center">
        <div><AppLogo className="" /></div>
        <div className="hidden md:block"><NavList className="space-x-6 mt-2 text-lg  "
          LinkClassName="hover:bg-muted py-2 px-4 rounded-full" /></div>
        <div className="flex justify-between items-center space-x-4 mt-2">
          <Link href="/login"><Button className="p-4 rounded-full hidden md:flex" variant={"ghost"}>Login</Button></Link>
          <Link href="/register"><Button className="p-4 rounded-full" variant={"default"}>Register</Button></Link>
          {/* <AlignJustify className="md:hidden" /> */}
          <SheetComponent />
        </div>
      </nav>
      <main>
        <div className="mt-20 md:mt-24 flex-col items-center justify-center space-y-4">
          <h1 className="text-5xl md:text-7xl font-extrabold text-center md:flex items-center justify-center">
            Create
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-red-500">
              Invoice.</span>
            <div className="flex justify-center items-center">
              <div className="relative"><WordRotate
                className="text-5xl md:text-7xl font-extrabold inline-block w-[6ch] text-center"
                words={["Manage", "Get Paid"]} />
              </div>
            </div>
          </h1>
          <p className="text-center text-xl text-muted-foreground">Free Invoice Software to create Invoices in Seconds</p>
          <div className="flex justify-center items-center space-x-4">
            <ShinyButton text="Get Started Now" className="rounded-full bg-black text-foreground" textClassName="text-white" />
            <ShinyButton text="Explore Demo" className="rounded-full" />
          </div>
        </div>
        <div className="mt-20">
          <div className="hidden md:flex items-center justify-center">
            <div className="relative md:w-full md:h-[90vh] pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
              <Image src="/img/primary-image.jpg" alt="" fill objectFit="fit" />
            </div>
          </div>
          <div className="flex items-center justify-center md:hidden">
            <div className="relative  w-[80vw] h-[70vh]">
              <Image src="/img/primary-image-mob.jpg" alt="" fill objectFit="fit" />
            </div>
          </div>
        </div>
        <SecondaryHeroSection/>
      </main>
    </div>
  );
}



export default Page;
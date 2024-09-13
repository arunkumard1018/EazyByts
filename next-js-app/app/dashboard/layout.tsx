import AsideBar from '@/components/dashboard/layout/AsideBar'
import NavBar from '@/components/dashboard/layout/NavBar'
import AuthProvider from '@/providers/AuthProvider'
import { ThemeProvider } from '@/providers/ThemeProvider'
import React from 'react'

function Dashboardlayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider >
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
          <AsideBar className="fixed inset-y-0 left-0 z-10 hidden  w-[16vw] flex-col border-r bg-background md:flex" />
          <div className="flex flex-col ">
            <NavBar className='w-screen  sticky top-0 z-30 md:ml-[16vw] md:w-[82.9vw]  h-14 md:h-[60px]' />
            <main className="w-screen md:ml-[16vw] md:w-[82.7vw] md:pr-4">
              {children}
            </main>
          </div>
        </div>
      </ThemeProvider>
    </AuthProvider>
  )
}

export default Dashboardlayout
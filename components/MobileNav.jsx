"use client"
import { usePathname } from 'next/navigation'
import React from 'react'
import { Sheet, SheetClose, SheetContent, SheetTrigger } from './ui/sheet'
import {CiMenuFries} from "react-icons/ci"
import Link from 'next/link'

const links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "resume",
        path: "/resume",
    },
    {
        name: "projects",
        path: "/work",
    },
    {
        name: "shriekseek",
        path: "/shriekseek",
    },
    {
        name: "contact",
        path: "/contact",
    },
]

const MobileNav = () => {
  const pathname = usePathname()
  return <Sheet>
    <SheetTrigger className='flex justify-center items-center'>
        <CiMenuFries className='text-[32px] text-accent'/>
    </SheetTrigger>
    <SheetContent className="flex flex-col">
        <div className='mt-32 mb-40 text-center text-2xl'>
            <SheetClose asChild>
                <Link href="/">
                    <h1 className='text-4xl font-semibold'>
                        Sajed<span className='text-accent'>.</span>
                    </h1>
                </Link>
            </SheetClose>
        </div>
        <nav className='flex flex-col justify-center items-center gap-8'>
            {links.map((link, index) =>{
                const isActive = link.path === pathname || (link.path !== "/" && pathname === `${link.path}/`);
                const isFeatured = link.path === "/shriekseek";
                return(
                    <SheetClose asChild key={index}>
                        <Link 
                            href={link.path} 
                            className={`${
                                isActive 
                                ? "text-accent border-b-2 border-accent" 
                                : ""
                            } ${
                                isFeatured
                                ? "relative text-accent after:absolute after:-right-4 after:top-1 after:h-2 after:w-2 after:rounded-full after:bg-accent after:shadow-[0_0_12px_rgba(46,230,166,0.8)]"
                                : "hover:text-accent"
                            } text-xl capitalize font-semibold transition-all hover:text-accent`}
                        >
                            {link.name}
                        </Link>
                    </SheetClose>
                )
            })}
        </nav>
    </SheetContent>
  </Sheet>
}

export default MobileNav

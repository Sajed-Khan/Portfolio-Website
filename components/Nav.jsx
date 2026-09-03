"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

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
        name: "shattered rites",
        path: "/shattered-rites",
    },
    {
        name: "contact",
        path: "/contact",
    },
]

const Nav = () => {
  const pathname = usePathname()
  return (
        <nav className='flex gap-8'>
            {links.map((link, index) =>{
                const isActive = link.path === pathname || (link.path !== "/" && pathname === `${link.path}/`);
                const isFeatured = link.path === "/shattered-rites";
                return(
                    <Link 
                        href={link.path} 
                        key={index} 
                        className={`${
                            isActive 
                            ? "text-accent border-b-2 border-accent" 
                            : ""
                        } ${
                            isFeatured
                            ? "relative text-accent after:absolute after:-right-3 after:top-0 after:h-2 after:w-2 after:rounded-full after:bg-accent after:shadow-[0_0_12px_rgba(46,230,166,0.8)]"
                            : "hover:text-accent"
                        } capitalize font-semibold transition-all hover:text-accent`}
                    >
                        {link.name}
                    </Link>
                )
            })}
        </nav>
  )
}

export default Nav

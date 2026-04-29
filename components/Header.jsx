"use client";
import Link from 'next/link'
import React from 'react'
import Nav from './Nav'
import { Button } from './ui/button'
import MobileNav from './MobileNav'
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  const isContactPage = pathname === "/contact" || pathname === "/contact/";

  return (
    <header className='py-8 xl:py-12 text-white'>
        <div className='container mx-auto flex justify-between items-center'>
            <Link href="/">
                <h1 className='text-4xl font-semibold'>
                    Sajed<span className='text-accent'>.</span>
                </h1>
            </Link>

            <div className='hidden xl:flex items-center gap-8'>
                <Nav />
                {isContactPage ? (
                    <a href="mailto:sajed619007@gmail.com">
                        <Button>Let&apos;s talk</Button>
                    </a>
                ) : (
                    <Link href="/contact">
                        <Button>Let&apos;s talk</Button>
                    </Link>
                )}
            </div>

            <div className='xl:hidden'>
                <MobileNav/>
            </div>

        </div>
    </header>
  )
}

export default Header

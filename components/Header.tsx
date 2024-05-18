'use client';

import React, { useState, useEffect } from 'react';
import ThemeToggler from './ThemeToggler';
import Image from 'next/image';
import Nav from './Nav';
import MobileNav from './MobileNav';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [header, setHeader] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const scrollYPos = () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    };
    window.addEventListener('scroll', scrollYPos);
    return () => {
      window.removeEventListener('scroll', scrollYPos);
    };
  }, []);

  return (
    <header
      className={`${
        header
          ? 'py-4 bg-white shadow-lg dark:bg-accent'
          : 'py-6 dark:bg-transparent'
      } sticky top-0 z-30 transition-all ${pathname === '/' && 'bg-[#fff]'} `}>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Image src="logo.svg" width={55} height={55} priority alt="" />
          <div className="flex items-center gap-x-6">
            <Nav
              containerStyles="hidden xl:flex gap-x-8 items-center"
              linkStyles="relative hover:text-primary transition-all"
              underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
            />
            <ThemeToggler />
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

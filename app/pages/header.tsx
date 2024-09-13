'use client';

import { ModeToggle } from "@/components/ui/modeToggle";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {

  const { theme } = useTheme();
  const [themeLogo, setThemeLogo] = useState("/logo.png");

  useEffect(() => {
    if (theme === "dark") {
      setThemeLogo("/logo.png");
    } else {
      setThemeLogo("/logo-dark.png");
    }
  }, [theme])

  const navLinks = [
    {
      name: "Home",
      href: "#home"
    },
    {
      name: "Tech Stack",
      href: "#tech-stack"
    },
    {
      name: "Projects",
      href: "#projects"
    },
    {
      name: "Experience",
      href: "#experience"
    },
    {
      name: "Contact",
      href: "#contact"
    }
    // ,
    // {
    //   name:"Resume",
    //   href:"#resume"
    // }
  ]

  return (
    <header className="fixed top-0 z-20 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container flex justify-between align-middle h-14 items-center">
        <Link href="/" replace>
          <div className="flex align-middle text-center">
            <Image
              src={themeLogo}
              alt="icon"
              width={30}
              height={30}
              className='inline-block me-1'
            />
            <h3 className='text-xl font-bold'>
              Ved Asole
            </h3>
          </div>
        </Link>
        <nav className="flex items-center space-x-4 lg:space-x-6">
          {
            navLinks.map((link) => (
              <a href={link.href} key={link.href} className="text-sm hidden sm:block font-medium transition-colors hover:text-primary">
                {link.name}
              </a>
            ))
          }
          <a href="#resume" className="text-sm font-medium transition-colors hover:text-primary">
            Resume
          </a>
          <ModeToggle />
        </nav>
      </div>
    </header>
  )
}
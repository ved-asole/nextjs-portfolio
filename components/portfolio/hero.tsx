'use client';
import Link from 'next/link';
import { Mail, Github } from 'lucide-react'
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import BlurFade from '../magicui/blur-fade';
import ShineBorder from '../magicui/shine-border';
// import Particles from '@/components/magicui/particles';
// import { useTheme } from 'next-themes';
// import { useState, useEffect } from 'react';

export default function Hero() {

  // const { theme } = useTheme();
  // const [color, setColor] = useState("#ffffff");

  // useEffect(() => {
  //   setColor(theme === "dark" ? "#ffffff" : "#000000");
  // }, [theme]);

  return (
    <section id="home" className="flex min-h-screen items-center justify-center bg-background md:px-20 pt-16 md:pt-24 md:py-16">
      <div className="container grid items-center gap-8 lg:grid-cols-2">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <BlurFade inView>
            <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl lg:text-5xl">
              Ved Asole
            </h1>
          </BlurFade>
          <BlurFade delay={0.25} inView>
            <h2 className="text-xl text-muted-foreground md:text-2xl">
              Software Engineer and Designer
            </h2>
          </BlurFade>
          <BlurFade delay={0.50} inView>
            <p className="max-w-[700px] text-lg text-muted-foreground">
              Crafting elegant solutions to complex problems with clean, efficient code.
            </p>
          </BlurFade>
          <BlurFade delay={0.75} inView>
            <div className="mt-4 flex space-x-4">
              <Link href='mailto:vedasole001@gmail.com'>
                <Button>
                  <Mail className="mr-2 h-4 w-4" /> Contact Me
                </Button>
              </Link>
              <ShineBorder
                className="relative flex min-w-[30px] min-h-[30px] flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl p-0"
                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
              >
                <Link href='https://github.com/ved-asole'>
                  <Button variant="outline">
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </Button>
                </Link>
              </ShineBorder>
            </div>
          </BlurFade>
        </div>
        <div className="flex justify-center lg:justify-end order-first md:order-last">
          <BlurFade delay={0.25} inView>
            <div className="h-64 w-64 overflow-hidden rounded-full border-4 border-primary md:h-80 md:w-80 lg:h-96 lg:w-96">
              <Image
                src="/profile.png"
                alt="Ved Asole - Software Engineer"
                className="object-contain"
                width={400}
                height={400}
                priority={true}
              />
            </div>
          </BlurFade>
        </div>
      </div >
      {/* <Particles
        className="absolute inset-0 -z-10 min-h-full min-w-full mt-30"
        quantity={500}
        ease={50}
        color={color}
        refresh
      /> */}
    </section >
  )
}
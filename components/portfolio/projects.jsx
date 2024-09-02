'use client';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BorderBeam } from "../magicui/border-beam";
import ShineBorder from "../magicui/shine-border";
// import Particles from '@/components/magicui/particles';
import { useTheme } from 'next-themes';
import { MagicCard } from "../magicui/magic-card";
// import { useState, useEffect } from 'react';

export default function Projects() {

  const { theme } = useTheme();
  // const [color, setColor] = useState("#ffffff");

  // useEffect(() => {
  //   setColor(theme === "dark" ? "#ffffff" : "#000000");
  // }, [theme]);

  const projects = [
    {
      id: 1,
      name: 'EKart Shopping',
      description: 'An E-Commerce App',
      image: '/ekart.jpeg',
      website: 'https://ekart.vedasole.cloud/',
      github: 'https://github.com/ved-asole/eKart-ecommerce-app'
    },
    {
      id: 2,
      name: 'Project 2',
      description: 'A brief description of the project',
      image: '/ekart.jpeg',
      website: 'https://ekart.vedasole.cloud/',
      github: 'https://github.com/ved-asole/eKart-ecommerce-app'
    },
    {
      id: 3,
      name: 'Project 3',
      description: 'A brief description of the project',
      image: '/ekart.jpeg',
      website: 'https://ekart.vedasole.cloud/',
      github: 'https://github.com/ved-asole/eKart-ecommerce-app'
    },
    {
      id: 4,
      name: 'Project 4',
      description: 'A brief description of the project',
      image: '/ekart.jpeg',
      website: 'https://ekart.vedasole.cloud/',
      github: 'https://github.com/ved-asole/eKart-ecommerce-app'
    }
  ]

  return (
    <section id="projects" className="flex min-h-screen items-center justify-center bg-background px-4 py-16">
      <div className="container">
        <h2 className="mb-8 text-3xl font-bold md:text-4xl">Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {
            projects.map((project) => (
              <ShineBorder
                // className="text-center text-2xl font-bold capitalize mt-20 p-0"
                className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl mt-20 p-0"
                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
              >
                < Card key={project.id} className="flex flex-col" >
                  <CardHeader>
                    <CardTitle>{project.name}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Image
                      src={project.image}
                      alt={project.name}
                      className="mb-4 w-full rounded-lg object-cover"
                      height={200}
                      width={200}
                    />
                    <p className="text-sm text-muted-foreground">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Link href={project.website}>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Website
                      </Button>
                    </Link>
                    <Link href={project.github}>
                      <Button variant="outline" size="sm">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </ShineBorder>
            ))}
        </div>
      </div >
      {/* <Particles
        className="absolute inset-0 -z-20 min-h-full min-w-full"
        quantity={500}
        ease={100}
        color={color}
        refresh
      /> */}
    </section >
  )
}
'use client';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ShineBorder from "../magicui/shine-border";
// import Particles from '@/components/magicui/particles';
import { useTheme } from 'next-themes';
import BlurFade from "../magicui/blur-fade";
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
      title: 'An E-Commerce App',
      description: 'An E-Commerce App made with React, Java, Spring Boot, AWS',
      image: '/ekart.jpeg',
      website: 'https://ekart.vedasole.cloud/',
      github: 'https://github.com/ved-asole/eKart-ecommerce-app'
    },
    {
      id: 2,
      name: 'Blog Application API',
      title: 'An Blog Appication Backend',
      description: 'An Blog Appication API made with Java, Spring Boot and AWS RDS',
      image: '/blog-application-api.png',
      website: 'https://ekart.vedasole.cloud/',
      github: 'https://github.com/ved-asole/eKart-ecommerce-app'
    },
    {
      id: 3,
      name: 'Ved Veera Academy',
      title: 'An Online Teaching Academy',
      description: 'An Online Teaching Academy made with Java, Spring Boot and Thymeleaf',
      image: '/vedveera-academy.png',
      website: 'https://ekart.vedasole.cloud/',
      github: 'https://github.com/ved-asole/ved-veera-academy'
    },
    {
      id: 4,
      name: 'Project 4',
      title: 'Project 4 Title',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: '/blog-application-api.png',
      website: 'https://ekart.vedasole.cloud/',
      github: 'https://github.com/ved-asole/blog-application-api'
    }
  ]

  return (
    <section id="projects" className="flex min-h-screen items-center justify-center bg-background px-4 py-16">
      <div className="container">
        <BlurFade delay={0.25} inView>
          <h2 className="mb-8 text-3xl font-bold md:text-4xl">Projects</h2>
        </BlurFade>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {
            projects.map((project) => (
              <BlurFade delay={0.50} key={project.id} inView>
                <ShineBorder
                  // className="text-center text-2xl font-bold capitalize mt-20 p-0"
                  className="relative flex h-[500px] w-full shadow-sm flex-col items-center justify-center overflow-hidden rounded-lg border bg-card 
                md:shadow-xl md:mt-20 p-0"
                  color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                >
                  <Card className="flex z-10 flex-col bg-transparent shadow-none border-0" >
                    <CardHeader>
                      <CardTitle>{project.name}</CardTitle>
                      <CardDescription>{project.title}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Image
                        src={project.image}
                        alt={project.name}
                        className="mb-4 mx-auto rounded-lg object-cover"
                        height={160}
                        width={240}
                      />
                      <p className="text-sm text-muted-foreground mt-2">
                        {project.description}
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
              </BlurFade>
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
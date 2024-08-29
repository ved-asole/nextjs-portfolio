'use client';
import { Linkedin, Github, Mail } from "lucide-react";

export default function Footer() {

  return (
    <footer className="border-t bg-muted">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-10 md:h-16 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 md:px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2024 Ved Asole. All rights reserved.
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <a href="mailto:vedasole001@gmail.com" className="text-muted-foreground hover:text-foreground">
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </a>
          <a href="https://www.github.com/ved-asole" className="text-muted-foreground hover:text-foreground">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/vedasole" className="text-muted-foreground hover:text-foreground">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
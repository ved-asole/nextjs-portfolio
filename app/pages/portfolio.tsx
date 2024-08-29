'use client';
import Hero from '../../components/portfolio/hero';
import Technologies from '../../components/portfolio/techstack';
import Projects from '../../components/portfolio/projects';
import Experience from '../../components/portfolio/experience';
import Contact from '../../components/portfolio/contact';
import Footer from '../pages/footer';

export default function Portfolio() {

  return (
    // <div className="relative flex min-h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <div className="min-h-screen">

        <main className="flex-1 z-1">
          {/* Hero Section */}
          <Hero />

          {/* Tech Stack Section */}
          <Technologies />

          {/* Projects Section */}
          <Projects />

          {/* Work Experience Section */}
          <Experience />

          {/* Contact Form Section */}
          <Contact />

          <Footer />

        </main>

      </div>
    // </div>
  )
}
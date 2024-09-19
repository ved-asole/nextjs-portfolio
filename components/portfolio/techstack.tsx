'use client';
import { Card, CardContent } from "@/components/ui/card"
import BlurFade from '../magicui/blur-fade';

export default function Technologies() {

  const techStack = [
    { name: 'Java', icon: '☕' },
    { name: 'Spring Boot', icon: '🚀' },
    { name: 'JavaScript', icon: '🌟' },
    { name: 'TypeScript', icon: '⚡' },
    { name: 'React', icon: '⚛️' },
    { name: 'Python', icon: '🐍' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Kubernetes', icon: '👻' },
    { name: 'GraphQL', icon: '◼️' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'Redis', icon: '🔴' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Azure', icon: '☁️' },
    { name: 'Git', icon: '🔀' },
    { name: 'HTML5', icon: '🌐' },
    { name: 'CSS3', icon: '🎨' }
  ]

  return (
    <section id="tech-stack" className="flex min-h-screen items-center justify-center bg-muted px-4 py-16">
      <div className="container">
        <BlurFade delay={0.25} inView>
          <h2 className="mb-8 text-3xl font-bold md:text-4xl">Tech Stack</h2>
        </BlurFade>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-16">
          {techStack.map((tech) => (
            <BlurFade delay={0.50} inView>
              <Card key={tech.name} className="flex items-center justify-center p-4 text-center">
                <CardContent className="p-0">
                  <p className="text-2xl mb-2">{tech.icon}</p>
                  <p className="font-semibold">{tech.name}</p>
                </CardContent>
              </Card>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  )
}
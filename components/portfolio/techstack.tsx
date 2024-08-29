'use client';
import { Card, CardContent } from "@/components/ui/card"

export default function Technologies() {
  
  const techStack = [
    { name: 'JavaScript', icon: '🟨' },
    { name: 'TypeScript', icon: '🔵' },
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟩' },
    { name: 'Python', icon: '🐍' },
    { name: 'Docker', icon: '🐳' },
    { name: 'GraphQL', icon: '◼️' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'Redis', icon: '🔴' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Git', icon: '🔀' },
    { name: 'HTML5', icon: '🌐' },
    { name: 'CSS3', icon: '🎨' },
    { name: 'Sass', icon: '💅' },
    { name: 'Webpack', icon: '📦' },
    { name: 'Jest', icon: '🃏' },
    { name: 'Cypress', icon: '🌲' }
  ]
  
  return (
    <section id="tech-stack" className="flex min-h-screen items-center justify-center bg-muted px-4 py-16">
      <div className="container">
        <h2 className="mb-8 text-3xl font-bold md:text-4xl">Tech Stack</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {techStack.map((tech) => (
            <Card key={tech.name} className="flex items-center justify-center p-4 text-center">
              <CardContent>
                <p className="text-2xl mb-2">{tech.icon}</p>
                <p className="font-semibold">{tech.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
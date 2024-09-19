'use client';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export default function Experience() {

  const experiences = [
    {
      title: 'Software Engineer',
      company: 'HCLTech',
      period: 'Nov 2021 - Present',
      description: [
        "Developed and Maintained: Actively developed and maintained Java Spring Boot applications, ensuring high performance and scalability.",
        "Code Quality and Collaboration: Performed rigorous code checks and collaborated closely with developers to enhance application quality and performance.",
        "Debugging and Issue Resolution: Efficiently debugged application bugs and analyzed logs to expedite issue resolution, improving system reliability.",
        "Application Management: Managed Financial Enterprise applications, ensuring high availability for 1 million+ monthly requests.",
        "Knowledge Transfer and Mentorship: Provided knowledge transfer (KT) to new team members as an Application SME, boosting their performance and fostering a strong and capable team.",
        "Process Automation: Received the Spot Award for reducing manual efforts by 50% through process automation and the Livewire R&R Award for exceptional project performance."
      ]
    },
    {
      title: 'Software Engineer Intern',
      company: 'HCLTech',
      period: 'July 2021 - Nov 2021',
      description: [
        "Developed and Maintained: Actively developed and maintained Java Spring Boot applications, ensuring high performance and scalability.",
        "Code Quality and Collaboration: Performed rigorous code checks and collaborated closely with developers to enhance application quality and performance.",
        "Debugging and Issue Resolution: Efficiently debugged application bugs and analyzed logs to expedite issue resolution, improving system reliability.",
        "Application Management: Managed Financial Enterprise applications, ensuring high availability for 1 million+ monthly requests.",
        "Knowledge Transfer and Mentorship: Provided knowledge transfer (KT) to new team members as an Application SME, boosting their performance and fostering a strong and capable team.",
        "Process Automation: Received the Spot Award for reducing manual efforts by 50% through process automation and the Livewire R&R Award for exceptional project performance."
      ]
    }
  ]

  return (
    <section id="experience" className="flex min-h-screen items-center justify-center bg-muted md:px-4 py-16">
      <div className="container">
        <h2 className="mb-8 text-3xl font-bold md:text-4xl">Work Experience</h2>
        <div className="space-y-6">
          {experiences.map((job, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{job.title}</CardTitle>
                <CardDescription>{job.company}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-semibold">{job.period}</p>
                <div className="mt-2 ps-5 text-sm text-muted-foreground">
                  <ol className="list-disc list-inside">
                    {job.description.map((desc, index) => (
                      <li key={index}>{desc}</li>
                    ))}
                  </ol>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )

}
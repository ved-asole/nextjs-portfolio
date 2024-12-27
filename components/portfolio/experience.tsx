'use client';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import BlurFade from "../magicui/blur-fade";

export default function Experience() {

  const experiences = [
    {
      title: 'Senior Software Engineer',
      company: 'HCLTech',
      period: 'Oct 2024 - Present',
      description: [
        "Engineered Java Spring Boot backend services, resulting in a 10-15% improvement in application performance through code optimizationand refactoring.",
        "Developed React-based frontend components with Redux, enhancing user experience and increasing engagement metrics by 10%",
        "Implemented RESTful APIs and microservices, supporting 1M+ monthly requests and reducing API response times by 15-20%",
        "Refined code quality and performance through advanced debugging and optimization, decreasing bug reports by 20%.",
        "Established CI/CD pipelines with Jenkins and Docker, reducing deployment time by 25%",
        "Boosted application performance and scalability, contributing to a 15% increase in system reliability and a 5% reduction in downtime.",
        "Received the Spot Award and Livewire R&R Award for exceptional performance and impactful optimizations, increasing application performance by 10-15%"
      ]
    },
    {
      title: 'Software Engineer',
      company: 'HCLTech',
      period: 'Nov 2021 - Oct 2024',
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
        <BlurFade delay={0.25} inView>
          <h2 className="mb-8 text-3xl font-bold md:text-4xl">Work Experience</h2>
        </BlurFade>
        <div className="space-y-6">
          {experiences.map((job, index) => (
            <BlurFade key={index} delay={0.25} inView>
              <Card>
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
            </BlurFade>
          ))}
        </div>
        {/* </BlurFade> */}
      </div>
    </section>
  )

}
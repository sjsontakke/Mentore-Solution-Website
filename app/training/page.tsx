import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Code,
  Cloud,
  TrendingUp,
  Database,
  Palette,
  TestTube,
  ShoppingCart,
  Users,
  CheckCircle,
  Award,
} from "lucide-react"
import Link from "next/link"

export default function TrainingPage() {
  const courses = [
    {
      icon: Code,
      title: "Full Stack Development",
      subtitle: "MERN / Java Stack",
      duration: "4-6 months",
      level: "Beginner to Advanced",
      description: "Master both frontend and backend development with hands-on projects.",
      modules: [
        "HTML, CSS, JavaScript & React",
        "Node.js, Express.js & MongoDB",
        "RESTful APIs & Authentication",
        "Deployment & Version Control",
      ],
      eligibility: "Any Graduate / Working Professional",
      careers: ["Full Stack Developer", "MERN Stack Developer", "Software Engineer"],
    },
    {
      icon: Cloud,
      title: "DevOps & Cloud Computing",
      subtitle: "AWS, Azure, Docker, Kubernetes",
      duration: "3-4 months",
      level: "Intermediate",
      description: "Learn modern DevOps practices and cloud infrastructure management.",
      modules: [
        "Linux & Shell Scripting",
        "Docker & Kubernetes",
        "AWS / Azure Cloud Services",
        "CI/CD Pipelines & Jenkins",
      ],
      eligibility: "Basic IT Knowledge Required",
      careers: ["DevOps Engineer", "Cloud Architect", "Site Reliability Engineer"],
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing Masterclass",
      subtitle: "SEO, SEM, Social Media & Content",
      duration: "2-3 months",
      level: "Beginner Friendly",
      description: "Comprehensive digital marketing training with real campaign experience.",
      modules: [
        "SEO & Content Marketing",
        "Google Ads & Facebook Ads",
        "Social Media Marketing",
        "Analytics & Performance Tracking",
      ],
      eligibility: "Any Graduate / Entrepreneur",
      careers: ["Digital Marketing Manager", "SEO Specialist", "Social Media Manager"],
    },
    {
      icon: Database,
      title: "Data Analytics & Power BI",
      subtitle: "Transform Data into Insights",
      duration: "2-3 months",
      level: "Beginner to Intermediate",
      description: "Learn to analyze data and create powerful visualizations.",
      modules: [
        "Excel Advanced & SQL",
        "Power BI & Tableau",
        "Data Visualization Techniques",
        "Business Intelligence Concepts",
      ],
      eligibility: "Any Graduate",
      careers: ["Data Analyst", "Business Analyst", "BI Developer"],
    },
    {
      icon: Code,
      title: "Python Programming",
      subtitle: "From Basics to Advanced",
      duration: "2-3 months",
      level: "Beginner Friendly",
      description: "Master Python for web development, automation, and data science.",
      modules: [
        "Python Fundamentals",
        "Object-Oriented Programming",
        "Web Scraping & Automation",
        "Django / Flask Framework",
      ],
      eligibility: "Any Graduate / Student",
      careers: ["Python Developer", "Automation Engineer", "Backend Developer"],
    },
    {
      icon: TestTube,
      title: "Software Testing",
      subtitle: "Manual + Automation",
      duration: "2-3 months",
      level: "Beginner Friendly",
      description: "Comprehensive testing training with Selenium and modern tools.",
      modules: [
        "Manual Testing Fundamentals",
        "Selenium WebDriver",
        "API Testing with Postman",
        "Test Automation Frameworks",
      ],
      eligibility: "Any Graduate",
      careers: ["QA Engineer", "Test Automation Engineer", "SDET"],
    },
    {
      icon: Palette,
      title: "UI/UX Design Course",
      subtitle: "Design Thinking & Prototyping",
      duration: "2-3 months",
      level: "Beginner Friendly",
      description: "Create stunning user interfaces and exceptional user experiences.",
      modules: [
        "Design Principles & Theory",
        "Figma & Adobe XD",
        "User Research & Testing",
        "Prototyping & Wireframing",
      ],
      eligibility: "Any Graduate / Creative Professional",
      careers: ["UI/UX Designer", "Product Designer", "Interaction Designer"],
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Website Development",
      subtitle: "Build Complete Online Stores",
      duration: "2 months",
      level: "Intermediate",
      description: "Learn to build and manage e-commerce platforms.",
      modules: [
        "E-commerce Fundamentals",
        "WordPress & WooCommerce",
        "Payment Gateway Integration",
        "SEO for E-commerce",
      ],
      eligibility: "Basic Web Knowledge",
      careers: ["E-commerce Developer", "Web Developer", "Freelancer"],
    },
    {
      icon: Users,
      title: "Corporate Training & Workshops",
      subtitle: "Customized for Your Team",
      duration: "Flexible",
      level: "All Levels",
      description: "Tailored training programs for corporate teams and organizations.",
      modules: [
        "Custom Curriculum Design",
        "On-site / Online Training",
        "Technology Upskilling",
        "Team Building Workshops",
      ],
      eligibility: "Corporate Teams",
      careers: ["Team Upskilling", "Technology Adoption", "Skill Enhancement"],
    },
  ]

  const features = [
    {
      icon: Award,
      title: "100% Placement Assistance",
      description: "Dedicated placement support with interview preparation",
    },
    {
      icon: Code,
      title: "Real-time Projects",
      description: "Work on live projects to build your portfolio",
    },
    {
      icon: Users,
      title: "Expert Mentors",
      description: "Learn from industry professionals with years of experience",
    },
    {
      icon: CheckCircle,
      title: "Certification",
      description: "Industry-recognized certificates upon completion",
    },
  ]

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6" variant="secondary">
              Industry-Ready Training Programs
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Transform Your Career with Expert Training
            </h1>
            <p className="text-lg text-muted-foreground text-pretty">
              Hands-on, job-ready courses designed by industry experts. Get 100% placement assistance and lifetime
              career support.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 px-4 border-b border-border">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <feature.icon className="w-10 h-10 text-primary mb-3 mx-auto" />
                <h3 className="font-semibold mb-1">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Training Programs</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Choose from our comprehensive range of courses designed to make you job-ready
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {courses.map((course, index) => (
              <Card key={index} className="flex flex-col h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <course.icon className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{course.subtitle}</p>
                  <div className="flex gap-2 mt-3">
                    <Badge variant="secondary">{course.duration}</Badge>
                    <Badge variant="outline">{course.level}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <p className="text-sm text-muted-foreground mb-4">{course.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-sm mb-2">Key Modules:</h4>
                    <ul className="space-y-1">
                      {course.modules.map((module, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{module}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-sm mb-1">Eligibility:</h4>
                    <p className="text-sm text-muted-foreground">{course.eligibility}</p>
                  </div>

                  <div className="mb-6 flex-grow">
                    <h4 className="font-semibold text-sm mb-2">Career Opportunities:</h4>
                    <div className="flex flex-wrap gap-2">
                      {course.careers.map((career, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {career}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <a href="tel:+919881922922" className="mt-auto">
                    <Button className="w-full">Enroll Now</Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Learning Journey?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Get in touch with our career counselors for a free consultation and course guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919881922922">
              <Button size="lg" variant="secondary">
                Call Now: +91-98819 22922
              </Button>
            </a>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Request Callback
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

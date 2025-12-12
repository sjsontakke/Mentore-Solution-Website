import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Award, Briefcase, FileText, Users, Target, TrendingUp, Building } from "lucide-react"
import Link from "next/link"

export default function PlacementPage() {
  const placementFeatures = [
    {
      icon: Award,
      title: "100% Placement Assistance",
      description: "Dedicated placement support for all our students until they get placed.",
    },
    {
      icon: FileText,
      title: "Resume Building",
      description: "Professional resume creation and optimization to stand out to employers.",
    },
    {
      icon: Users,
      title: "Mock Interviews",
      description: "Practice interviews with industry experts to build confidence.",
    },
    {
      icon: Target,
      title: "Interview Preparation",
      description: "Technical and HR interview preparation with real-world scenarios.",
    },
    {
      icon: Briefcase,
      title: "Job Referrals",
      description: "Direct referrals to our network of 50+ hiring partner companies.",
    },
    {
      icon: TrendingUp,
      title: "Career Guidance",
      description: "Personalized career counseling and growth path planning.",
    },
  ]

  const placementStats = [
    { value: "95%", label: "Placement Rate" },
    { value: "50+", label: "Hiring Partners" },
    { value: "₹4.5L", label: "Average Package" },
    { value: "2 Months", label: "Average Placement Time" },
  ]

  const hiringPartners = [
    "TCS",
    "Infosys",
    "Wipro",
    "Cognizant",
    "Tech Mahindra",
    "Capgemini",
    "Accenture",
    "HCL",
    "LTI",
    "Persistent Systems",
    "Zensar",
    "Cybage",
    "Synechron",
    "Mphasis",
    "Hexaware",
  ]

  const successStories = [
    {
      name: "Amit Kulkarni",
      course: "Full Stack Development",
      company: "TCS",
      package: "₹4.2 LPA",
      story:
        "The placement support was exceptional. From resume building to interview prep, everything was covered. Got placed within 1 month of course completion!",
    },
    {
      name: "Pooja Desai",
      course: "DevOps & Cloud",
      company: "Infosys",
      package: "₹5.5 LPA",
      story:
        "Mock interviews really helped me gain confidence. The mentors guided me throughout the placement process. Highly grateful!",
    },
    {
      name: "Rohan Patil",
      course: "Data Analytics",
      company: "Cognizant",
      package: "₹4.8 LPA",
      story:
        "Career guidance sessions helped me understand my strengths. The job referrals were spot on. Thank you Mentore Solution!",
    },
  ]

  const placementProcess = [
    {
      step: "1",
      title: "Course Completion",
      description: "Successfully complete your training program with all projects.",
    },
    {
      step: "2",
      title: "Resume Building",
      description: "Work with our experts to create a professional, ATS-friendly resume.",
    },
    {
      step: "3",
      title: "Interview Preparation",
      description: "Attend mock interviews and technical preparation sessions.",
    },
    {
      step: "4",
      title: "Job Applications",
      description: "Apply to relevant positions through our hiring partner network.",
    },
    {
      step: "5",
      title: "Interview Support",
      description: "Get guidance and tips for each interview round.",
    },
    {
      step: "6",
      title: "Placement Success",
      description: "Land your dream job with our continuous support.",
    },
  ]

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6" variant="secondary">
              100% Placement Assistance
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Your Success is Our Mission</h1>
            <p className="text-lg text-muted-foreground text-pretty">
              Comprehensive placement support with resume building, mock interviews, and direct job referrals to 50+
              hiring partners.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 border-b border-border">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {placementStats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Features */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Placement Support Services</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              End-to-end career support to help you land your dream job
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {placementFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <feature.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Process */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Placement Process</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              A structured approach to ensure your successful placement
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {placementProcess.map((item, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Partners */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Building className="w-16 h-16 text-primary mb-4 mx-auto" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Hiring Partners</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              We've partnered with leading companies to provide you with the best job opportunities
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <div className="grid grid-cols-3 md:grid-cols-5 gap-4 text-center">
                  {hiringPartners.map((partner, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-lg bg-muted/50 font-medium text-sm hover:bg-muted transition-colors"
                    >
                      {partner}
                    </div>
                  ))}
                </div>
                <p className="text-center text-sm text-muted-foreground mt-6">
                  And many more companies across various industries...
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Student Success Stories</h2>
            <p className="text-lg text-muted-foreground text-pretty">Real students, real placements, real success</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {successStories.map((story, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary mb-3 mx-auto">
                      {story.name.charAt(0)}
                    </div>
                    <h3 className="font-semibold text-lg text-center">{story.name}</h3>
                    <p className="text-sm text-muted-foreground text-center">{story.course}</p>
                  </div>
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <Badge variant="secondary">{story.company}</Badge>
                    <Badge className="bg-green-500 text-white">{story.package}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground italic text-center">"{story.story}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Launch Your IT Career?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Join our training programs and get 100% placement assistance. Your dream job is just a call away!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919881922922">
              <Button size="lg" variant="secondary">
                Call Now: +91-98819 22922
              </Button>
            </a>
            <Link href="/training">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                View Training Programs
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

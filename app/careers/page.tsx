import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Briefcase,
  MapPin,
  Clock,
  Users,
  TrendingUp,
  Heart,
  Award,
  Target,
  DollarSign,
  GraduationCap,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function CareersPage() {
  const openings = [
    {
      title: "Full Stack Developer",
      department: "Development",
      location: "Pune, Maharashtra",
      type: "Full-time",
      experience: "2-4 years",
      description:
        "We're looking for a skilled Full Stack Developer to join our dynamic team and work on cutting-edge web applications.",
      requirements: [
        "Strong proficiency in React, Node.js, and MongoDB",
        "Experience with Next.js and modern web technologies",
        "Good understanding of RESTful APIs and authentication",
        "Excellent problem-solving and communication skills",
      ],
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Pune, Maharashtra",
      type: "Full-time",
      experience: "3-5 years",
      description:
        "Join our infrastructure team to build and maintain scalable cloud solutions using modern DevOps practices.",
      requirements: [
        "Expertise in AWS/Azure and cloud infrastructure",
        "Strong knowledge of Docker, Kubernetes, and CI/CD",
        "Experience with Infrastructure as Code (Terraform)",
        "Linux administration and shell scripting skills",
      ],
    },
    {
      title: "Digital Marketing Specialist",
      department: "Marketing",
      location: "Pune, Maharashtra",
      type: "Full-time",
      experience: "1-3 years",
      description:
        "Help businesses grow their online presence through strategic digital marketing campaigns and SEO optimization.",
      requirements: [
        "Proven experience in SEO, SEM, and social media marketing",
        "Google Ads and Facebook Ads certification preferred",
        "Strong analytical skills and data-driven approach",
        "Excellent content creation and copywriting abilities",
      ],
    },
    {
      title: "Technical Trainer",
      department: "Training",
      location: "Pune, Maharashtra",
      type: "Full-time",
      experience: "2-5 years",
      description:
        "Share your expertise and passion for technology by training the next generation of IT professionals.",
      requirements: [
        "Strong knowledge in Full Stack, DevOps, or Data Science",
        "Excellent presentation and communication skills",
        "Industry experience in software development",
        "Passion for teaching and mentoring students",
      ],
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Pune, Maharashtra",
      type: "Full-time",
      experience: "2-4 years",
      description: "Create beautiful and intuitive user experiences for our clients' web and mobile applications.",
      requirements: [
        "Proficiency in Figma, Adobe XD, and design tools",
        "Strong portfolio demonstrating UI/UX projects",
        "Understanding of user-centered design principles",
        "Experience with prototyping and user testing",
      ],
    },
    {
      title: "Business Development Executive",
      department: "Sales",
      location: "Pune, Maharashtra",
      type: "Full-time",
      experience: "1-3 years",
      description: "Drive business growth by identifying new opportunities and building strong client relationships.",
      requirements: [
        "Excellent communication and negotiation skills",
        "Understanding of IT services and training industry",
        "Proven track record in B2B sales",
        "Self-motivated with strong networking abilities",
      ],
    },
  ]

  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Salary",
      description: "Industry-leading compensation packages with performance bonuses",
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Clear career progression paths and continuous learning opportunities",
    },
    {
      icon: Heart,
      title: "Work-Life Balance",
      description: "Flexible working hours and hybrid work options",
    },
    {
      icon: Award,
      title: "Recognition & Rewards",
      description: "Regular appreciation and rewards for outstanding performance",
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Work with talented professionals in a supportive environment",
    },
    {
      icon: GraduationCap,
      title: "Learning & Development",
      description: "Free access to training programs and skill development courses",
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 px-4 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop"
            alt="Careers Hero"
            fill
            className="object-cover opacity-40"
          />
        </div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6 bg-[#fbbf24] text-black hover:bg-[#f59e0b]" variant="secondary">
              Join Our Team
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Build Your Career With Us</h1>
            <p className="text-lg text-gray-200 text-pretty">
              Join a dynamic team that's transforming careers and building innovative digital solutions. We're always
              looking for passionate individuals who want to make a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Work at Mentore Solution?</h2>
            <p className="text-muted-foreground">
              We believe in creating an environment where talent thrives and innovation flourishes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index}>
                <CardContent className="pt-6 text-center">
                  <benefit.icon className="w-12 h-12 text-primary mb-4 mx-auto" />
                  <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Current Openings</h2>
            <p className="text-muted-foreground">
              Explore exciting opportunities to grow your career with Mentore Solution
            </p>
          </div>

          <div className="space-y-6 max-w-5xl mx-auto">
            {openings.map((job, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {job.type}
                        </span>
                        <Badge variant="secondary">{job.experience}</Badge>
                      </div>
                      <p className="text-muted-foreground mb-4">{job.description}</p>

                      <div className="mb-4">
                        <h4 className="font-semibold mb-2">Requirements:</h4>
                        <ul className="space-y-1">
                          {job.requirements.map((req, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                              <Target className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link href="/contact" className="flex-1">
                      <Button className="w-full">Apply Now</Button>
                    </Link>
                    <a href="tel:+919881922922" className="flex-1">
                      <Button variant="outline" className="w-full bg-transparent">
                        Call HR: +91-98819 22922
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Culture</h2>
            <p className="text-muted-foreground">Experience life at Mentore Solution</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
                alt="Team collaboration"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop"
                alt="Office environment"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop"
                alt="Team celebration"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Don't See Your Role?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future
            opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                Send Your Resume
              </Button>
            </Link>
            <a href="mailto:info@mentoresolution.com">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Email: info@mentoresolution.com
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

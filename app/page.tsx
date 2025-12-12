import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Code,
  Globe,
  Cloud,
  Headphones,
  TrendingUp,
  Zap,
  Users,
  Award,
  Target,
  CheckCircle,
  ArrowRight,
  Star,
} from "lucide-react"
import Link from "next/link"
import { HeroCarousel } from "@/components/hero-carousel"
import Image from "next/image"

export default function HomePage() {
  const stats = [
    { value: "5000+", label: "Students Trained" },
    { value: "300+", label: "IT Projects Delivered" },
    { value: "100%", label: "Placement Assistance" },
    { value: "50+", label: "Corporate Clients" },
  ]

  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description:
        "Tailored software solutions built with cutting-edge technologies to meet your unique business needs.",
    },
    {
      icon: Globe,
      title: "Website Development",
      description: "Professional, responsive websites that drive engagement and deliver exceptional user experiences.",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps Services",
      description: "Scalable cloud infrastructure and DevOps automation for seamless deployment and operations.",
    },
    {
      icon: Headphones,
      title: "IT Consulting & Support",
      description: "Expert guidance and 24/7 support to optimize your IT infrastructure and business processes.",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Data-driven marketing strategies to boost your online presence and drive business growth.",
    },
    {
      icon: Zap,
      title: "Automation & Integration",
      description: "Streamline operations with intelligent automation and seamless system integrations.",
    },
  ]

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Full Stack Developer",
      company: "Tech Solutions Pvt Ltd",
      content:
        "Mentore Solution transformed my career. The hands-on training and placement support helped me land my dream job within 2 months of course completion.",
      rating: 5,
    },
    {
      name: "Rahul Deshmukh",
      role: "DevOps Engineer",
      company: "Cloud Innovations",
      content:
        "The DevOps training was exceptional. Real-world projects and expert mentors made all the difference. Highly recommend for anyone serious about their career.",
      rating: 5,
    },
    {
      name: "Sneha Patil",
      role: "Digital Marketing Manager",
      company: "Growth Marketing Co",
      content:
        "Best decision I made was joining the Digital Marketing course. The practical approach and industry insights helped me grow my career exponentially.",
      rating: 5,
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroCarousel />

      {/* Stats */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold">{stat.value}</div>
                <div className="text-primary-foreground/80 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Mentore Solution</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              We are committed to helping individuals and businesses transform potential into performance through
              industry-aligned training programs and comprehensive IT solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Award className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">Best IT Solutions</h3>
                <p className="text-sm text-muted-foreground">Premium services with 1 year free support</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Target className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">Industry-Relevant Training</h3>
                <p className="text-sm text-muted-foreground">Courses designed by industry experts</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">1000+ Satisfied Clients</h3>
                <p className="text-sm text-muted-foreground">Students and businesses trust us</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <CheckCircle className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">Real Mentorship</h3>
                <p className="text-sm text-muted-foreground">Personalized guidance for your success</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* IT Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our IT Services</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Comprehensive technology solutions to drive your business forward
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-none shadow-md">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                  <Link
                    href="/services"
                    className="text-sm text-primary font-medium inline-flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button size="lg" variant="outline">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Training Programs Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Training Programs</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Industry-ready courses with hands-on projects and 100% placement assistance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Full Stack Development",
                description: "Master MERN/Java stack with hands-on projects",
                duration: "4-6 months",
                image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
              },
              {
                title: "DevOps & Cloud Computing",
                description: "AWS, Azure, Docker, Kubernetes & CI/CD",
                duration: "3-4 months",
                image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=2072&auto=format&fit=crop",
              },
              {
                title: "Digital Marketing",
                description: "SEO, SEM, Social Media & Content Marketing",
                duration: "2-3 months",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
              },
              {
                title: "Data Analytics & Power BI",
                description: "Transform data into actionable insights",
                duration: "2-3 months",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
              },
            ].map((program, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl bg-card shadow-md hover:shadow-xl transition-all"
              >
                <div className="aspect-video relative">
                  <Image
                    src={program.image || "/placeholder.svg"}
                    alt={program.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{program.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{program.description}</p>
                  <Badge variant="secondary">{program.duration}</Badge>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/training">
              <Button size="lg">Explore All Courses</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Real stories from our students and clients who transformed their careers and businesses
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Career or Business?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Get in touch with us today for a free consultation. Let's discuss how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919881922922">
              <Button size="lg" variant="secondary">
                Call Us Now: +91-98819 22922
              </Button>
            </a>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Get Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

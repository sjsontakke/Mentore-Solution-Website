import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Eye, Heart, Award, Users, TrendingUp, Shield, Zap } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in every project and training program we deliver.",
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "Honesty and transparency are at the core of everything we do.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of teamwork and building strong partnerships.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Constantly evolving with the latest technologies and methodologies.",
    },
  ]

  const whyChooseUs = [
    {
      icon: Award,
      title: "Industry Expertise",
      description: "Over 10 years of combined experience in IT training and software development.",
    },
    {
      icon: Users,
      title: "Expert Mentors",
      description: "Learn from professionals actively working in top tech companies.",
    },
    {
      icon: TrendingUp,
      title: "Proven Track Record",
      description: "5000+ successful students and 300+ completed IT projects.",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "1 year free support on all IT services and lifetime career guidance.",
    },
  ]

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6" variant="secondary">
              About Mentore Solution
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Transforming Potential Into Performance
            </h1>
            <p className="text-lg text-muted-foreground text-pretty">
              At Mentore Solution, Pune, we are committed to helping individuals and businesses alike turn potential
              into performance through industry-aligned training programs and comprehensive IT solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-primary/20">
              <CardContent className="pt-6">
                <Target className="w-12 h-12 text-primary mb-4" />
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground">
                  To empower individuals with industry-ready skills and provide businesses with innovative IT solutions
                  that drive growth and digital transformation. We aim to bridge the gap between education and
                  employment while delivering technology solutions that create real business value.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/20">
              <CardContent className="pt-6">
                <Eye className="w-12 h-12 text-secondary mb-4" />
                <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                <p className="text-muted-foreground">
                  To become India's most trusted partner for IT education and digital transformation, recognized for
                  creating successful careers and building scalable technology solutions that help businesses thrive in
                  the digital age.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground text-pretty">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card key={index}>
                <CardContent className="pt-6 text-center">
                  <value.icon className="w-12 h-12 text-primary mb-4 mx-auto" />
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Mentore Solution?</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              What sets us apart in the competitive IT training and services landscape
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <item.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Our Story</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground mb-4">
                    Mentore Solution was founded with a simple yet powerful vision: to create a bridge between aspiring
                    professionals and their dream careers while helping businesses leverage technology for growth.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Starting in Pune, we recognized a critical gap in the market - quality IT training that actually
                    prepares students for real-world challenges, and IT services that truly understand business needs.
                    We set out to fill that gap.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Today, we're proud to have trained over 5,000 students, delivered 300+ successful IT projects, and
                    built lasting relationships with both individuals and businesses. Our success is measured not just
                    in numbers, but in the careers we've launched and the businesses we've helped transform.
                  </p>
                  <p className="text-muted-foreground">
                    As we continue to grow, our commitment remains unchanged: providing exceptional training and IT
                    solutions that create real, measurable impact. Whether you're a student looking to start your tech
                    career or a business seeking digital transformation, Mentore Solution is your trusted partner for
                    success.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
            <p className="text-lg text-muted-foreground text-pretty mb-8">
              A dedicated team of industry experts, passionate educators, and technology enthusiasts committed to your
              success. Our trainers and consultants bring years of real-world experience from leading tech companies and
              are dedicated to mentoring the next generation of IT professionals.
            </p>
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <Users className="w-16 h-16 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">Meet Our Experts</h3>
                <p className="text-muted-foreground">
                  Our team consists of certified professionals with expertise in Full Stack Development, DevOps, Cloud
                  Computing, Digital Marketing, Data Science, and more. Each member is committed to providing
                  personalized mentorship and ensuring your success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}

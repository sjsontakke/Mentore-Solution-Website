import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Star } from "lucide-react"

export default function PortfolioPage() {
  const projects = [
    {
      title: "E-commerce Platform for Fashion Retailer",
      category: "Web Development",
      client: "Fashion Boutique Pvt Ltd",
      description:
        "Built a complete e-commerce solution with inventory management, payment gateway integration, and admin dashboard.",
      technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      results: ["300% increase in online sales", "Reduced cart abandonment by 45%", "Improved page load time by 60%"],
      testimonial:
        "Mentore Solution delivered beyond our expectations. The platform is fast, secure, and our customers love it!",
      rating: 5,
    },
    {
      title: "Cloud Migration for Healthcare Provider",
      category: "Cloud & DevOps",
      client: "HealthCare Solutions",
      description: "Migrated legacy infrastructure to AWS cloud with automated CI/CD pipelines and monitoring.",
      technologies: ["AWS", "Docker", "Kubernetes", "Jenkins"],
      results: [
        "40% reduction in infrastructure costs",
        "99.9% uptime achieved",
        "Deployment time reduced from days to hours",
      ],
      testimonial: "The migration was seamless. Our operations are now more efficient and cost-effective.",
      rating: 5,
    },
    {
      title: "CRM System for Real Estate Company",
      category: "Custom Software",
      client: "Prime Properties",
      description: "Custom CRM with lead management, property listings, and automated follow-up system.",
      technologies: ["React", "Python", "PostgreSQL", "Redis"],
      results: [
        "Lead conversion increased by 55%",
        "Sales team productivity up by 70%",
        "Customer satisfaction improved significantly",
      ],
      testimonial: "This CRM has transformed how we manage our clients and properties. Highly recommended!",
      rating: 5,
    },
    {
      title: "Mobile App for Food Delivery Service",
      category: "Mobile Development",
      client: "QuickBite Delivery",
      description: "Cross-platform mobile app with real-time tracking, payment integration, and rating system.",
      technologies: ["React Native", "Firebase", "Google Maps API"],
      results: [
        "10,000+ downloads in first month",
        "4.8 star rating on app stores",
        "Order processing time reduced by 50%",
      ],
      testimonial: "The app is intuitive and our customers love the real-time tracking feature.",
      rating: 5,
    },
    {
      title: "Digital Marketing Campaign for EdTech Startup",
      category: "Digital Marketing",
      client: "LearnHub Online",
      description: "Comprehensive SEO and PPC campaign to increase brand visibility and student enrollments.",
      technologies: ["Google Ads", "Facebook Ads", "SEO Tools", "Analytics"],
      results: [
        "250% increase in organic traffic",
        "Cost per acquisition reduced by 35%",
        "500+ new student enrollments",
      ],
      testimonial: "Our online presence has grown tremendously. The ROI has been exceptional.",
      rating: 5,
    },
    {
      title: "ERP System for Manufacturing Company",
      category: "Enterprise Software",
      client: "Industrial Solutions Ltd",
      description: "Complete ERP solution for inventory, production, sales, and financial management.",
      technologies: ["Java", "Spring Boot", "MySQL", "Angular"],
      results: [
        "Inventory accuracy improved to 98%",
        "Production efficiency up by 40%",
        "Real-time reporting and analytics",
      ],
      testimonial: "The ERP has streamlined our entire operation. Worth every penny!",
      rating: 5,
    },
  ]

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6" variant="secondary">
              Our Work
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Success Stories & Case Studies</h1>
            <p className="text-lg text-muted-foreground text-pretty">
              Explore how we've helped businesses transform digitally and achieve measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 border-b border-border">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">300+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Real projects, real results, real impact on businesses
            </p>
          </div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <Badge variant="secondary" className="mb-3">
                        {project.category}
                      </Badge>
                      <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">Client: {project.client}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{project.description}</p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Key Results:</h4>
                    <ul className="space-y-2">
                      {project.results.map((result, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <ExternalLink className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Testimonial */}
                  <Card className="bg-muted/50">
                    <CardContent className="pt-6">
                      <div className="flex gap-1 mb-3">
                        {[...Array(project.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="text-sm italic text-muted-foreground">"{project.testimonial}"</p>
                      <p className="text-sm font-medium mt-3">- {project.client}</p>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Success Story?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss your project and create a solution that delivers real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919881922922">
              <Button size="lg" variant="secondary">
                Call Now: +91-98819 22922
              </Button>
            </a>
            <a href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Get a Free Consultation
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

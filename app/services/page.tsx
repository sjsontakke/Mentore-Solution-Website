import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Code,
  Globe,
  Cloud,
  Headphones,
  TrendingUp,
  Zap,
  Smartphone,
  Database,
  Shield,
  Settings,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description:
        "Tailored software solutions built with cutting-edge technologies to meet your unique business requirements.",
      features: [
        "Enterprise Application Development",
        "SaaS Product Development",
        "Legacy System Modernization",
        "API Development & Integration",
      ],
      technologies: ["React", "Node.js", "Python", "Java", ".NET"],
      benefits: [
        "Scalable & Secure Architecture",
        "Agile Development Process",
        "Post-Launch Support",
        "1 Year Free Maintenance",
      ],
    },
    {
      icon: Globe,
      title: "Website Development Services",
      description: "Professional, responsive websites that drive engagement and deliver exceptional user experiences.",
      features: [
        "Corporate Website Development",
        "E-commerce Platforms",
        "CMS-based Websites",
        "Progressive Web Apps (PWA)",
      ],
      technologies: ["Next.js", "WordPress", "Shopify", "React", "Vue.js"],
      benefits: ["Mobile-First Design", "SEO Optimized", "Fast Loading Speed", "Conversion Focused"],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps Services",
      description: "Scalable cloud infrastructure and DevOps automation for seamless deployment and operations.",
      features: [
        "Cloud Migration & Setup",
        "Infrastructure as Code",
        "CI/CD Pipeline Implementation",
        "Container Orchestration",
      ],
      technologies: ["AWS", "Azure", "Docker", "Kubernetes", "Jenkins"],
      benefits: ["Reduced Operational Costs", "Improved Scalability", "Faster Deployment", "99.9% Uptime SLA"],
    },
    {
      icon: Headphones,
      title: "IT Consulting & Support",
      description: "Expert guidance and 24/7 support to optimize your IT infrastructure and business processes.",
      features: ["IT Strategy & Planning", "Technology Assessment", "System Integration", "24/7 Technical Support"],
      technologies: ["Multi-Platform", "Cross-Technology", "Vendor Agnostic"],
      benefits: ["Expert Guidance", "Cost Optimization", "Risk Mitigation", "Continuous Improvement"],
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing Services",
      description: "Data-driven marketing strategies to boost your online presence and drive business growth.",
      features: [
        "Search Engine Optimization (SEO)",
        "Pay-Per-Click Advertising (PPC)",
        "Social Media Marketing",
        "Content Marketing & Strategy",
      ],
      technologies: ["Google Ads", "Facebook Ads", "Analytics", "SEO Tools"],
      benefits: ["Increased Online Visibility", "Higher Conversion Rates", "Measurable ROI", "Brand Building"],
    },
    {
      icon: Zap,
      title: "Automation & Integration Solutions",
      description: "Streamline operations with intelligent automation and seamless system integrations.",
      features: [
        "Business Process Automation",
        "Third-Party API Integration",
        "Workflow Automation",
        "Data Synchronization",
      ],
      technologies: ["Zapier", "Make", "Custom APIs", "Webhooks"],
      benefits: ["Increased Efficiency", "Reduced Manual Errors", "Time Savings", "Better Data Flow"],
    },
    {
      icon: Smartphone,
      title: "Application Development Services",
      description: "Native and cross-platform mobile applications that deliver seamless user experiences.",
      features: [
        "iOS & Android Development",
        "Cross-Platform Apps",
        "App Maintenance & Updates",
        "App Store Optimization",
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
      benefits: ["Native Performance", "Intuitive UI/UX", "Offline Functionality", "Push Notifications"],
    },
    {
      icon: Database,
      title: "Custom CRM & ERP Systems",
      description: "Tailored business management systems to streamline your operations and improve efficiency.",
      features: [
        "Customer Relationship Management",
        "Enterprise Resource Planning",
        "Inventory Management",
        "Sales & Analytics Dashboard",
      ],
      technologies: ["Custom Built", "Salesforce", "Odoo", "SAP"],
      benefits: ["Centralized Data", "Process Automation", "Better Decision Making", "Improved Productivity"],
    },
  ]

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6" variant="secondary">
              Professional IT Services
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Comprehensive Technology Solutions for Your Business
            </h1>
            <p className="text-lg text-muted-foreground text-pretty">
              From custom software development to digital marketing, we provide end-to-end IT services with 1 year free
              support.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our IT Services</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Comprehensive solutions designed to drive your business forward
            </p>
          </div>

          <div className="space-y-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Features */}
                    <div>
                      <h4 className="font-semibold mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h4 className="font-semibold mb-3">Benefits:</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mt-6">
                    <h4 className="font-semibold mb-3">Technologies We Use:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6">
                    <a href="tel:+919881922922">
                      <Button>Get a Free Consultation</Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our IT Services?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card>
              <CardContent className="pt-6 text-center">
                <Shield className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="font-semibold text-lg mb-2">1 Year Free Support</h3>
                <p className="text-sm text-muted-foreground">Comprehensive maintenance and support included</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Settings className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="font-semibold text-lg mb-2">Agile Methodology</h3>
                <p className="text-sm text-muted-foreground">Flexible development with regular updates</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <CheckCircle className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="font-semibold text-lg mb-2">Quality Assurance</h3>
                <p className="text-sm text-muted-foreground">Rigorous testing for bug-free delivery</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Headphones className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="font-semibold text-lg mb-2">24/7 Support</h3>
                <p className="text-sm text-muted-foreground">Round-the-clock technical assistance</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss your project requirements and create a customized solution for your business.
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
                Request a Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

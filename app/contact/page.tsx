"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Youtube } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Thank you for contacting us! We will get back to you soon.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6" variant="secondary">
              Get in Touch
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Let's Talk Growth — For Your Career or Your Business
            </h1>
            <p className="text-lg text-muted-foreground text-pretty">
              We are here to assist you move forward, whether you're searching for professional IT services, training
              programs, or guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <Phone className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Call Us</h3>
                  <a href="tel:+919881922922" className="text-muted-foreground hover:text-primary transition-colors">
                    +91-98819 22922
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <Mail className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Email Us</h3>
                  <a
                    href="mailto:mentoresolution@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors break-all"
                  >
                    mentoresolution@gmail.com
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <MapPin className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Visit Us</h3>
                  <p className="text-muted-foreground">
                    Karve Nagar, Pune
                    <br />
                    Maharashtra, India
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <Clock className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Operating Hours</h3>
                  <p className="text-muted-foreground">
                    Monday - Saturday
                    <br />
                    9:00 AM - 7:00 PM
                    <br />
                    <span className="text-sm">Sunday: By Appointment</span>
                  </p>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
                  <div className="flex gap-3">
                    <a
                      href="https://www.facebook.com/profile.php?id=61557326613720"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.instagram.com/mentore_solution24/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Youtube className="w-5 h-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91-XXXXXXXXXX"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="interest">I'm Interested In *</Label>
                      <select
                        id="interest"
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-input rounded-md bg-background"
                        required
                      >
                        <option value="">Select an option</option>
                        <option value="training">Training Programs</option>
                        <option value="software">Software Development</option>
                        <option value="web">Website Development</option>
                        <option value="cloud">Cloud & DevOps</option>
                        <option value="marketing">Digital Marketing</option>
                        <option value="consulting">IT Consulting</option>
                        <option value="other">Other Services</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your requirements..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Find Us on Map</h2>
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video w-full h-[400px] bg-muted">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.566366877788!2d73.8173!3d18.5032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sKarve%20Nagar%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1708425600000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mentore Solution Location"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}

import Link from "next/link"
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="font-bold text-2xl tracking-tight">
                <span className="text-foreground">Mentore</span>
                <span className="text-[#fbbf24]">Solution</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Empowering Businesses & Careers with Smart IT Solutions and Industry-Ready Training
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61557326613720"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/mentore_solution24/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/training" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Training Program
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Training Programs */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Popular Courses</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Full Stack Development</li>
              <li className="text-sm text-muted-foreground">DevOps & Cloud Computing</li>
              <li className="text-sm text-muted-foreground">Digital Marketing</li>
              <li className="text-sm text-muted-foreground">Data Analytics & Power BI</li>
              <li className="text-sm text-muted-foreground">Python Programming</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                <a
                  href="tel:+919881922922"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  +91-98819 22922
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                <a
                  href="mailto:mentoresolution@gmail.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  mentoresolution@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Karve Nagar, Pune, Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Mentore Solution. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/training", label: "Training" },
    { href: "/services", label: "IT Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/placement", label: "Placement" },
    { href: "/careers", label: "Careers" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-md" : isHome ? "bg-black/30 backdrop-blur-sm" : "bg-white shadow-md",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.jpg" alt="Mentore Solution Logo" width={50} height={50} className="object-contain" />
            <div className="font-bold text-2xl tracking-tight">
              <span className={cn(isScrolled || !isHome ? "text-black" : "text-white")}>Mentore</span>
              <span className="text-[#fbbf24]">Solution</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-base font-medium transition-colors hover:text-primary",
                  pathname === link.href ? "text-primary font-bold" : "",
                  isScrolled || !isHome ? "text-gray-700" : "text-white/90 hover:text-white",
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+919881922922">
              <Button className="gap-2 bg-[#fbbf24] hover:bg-[#f59e0b] text-black font-bold">
                <Phone className="w-4 h-4" />
                +91-98819 22922
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={cn("lg:hidden p-2", isScrolled || !isHome ? "text-black" : "text-white")}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border bg-white">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-base font-medium transition-colors py-2",
                    pathname === link.href
                      ? "text-primary bg-primary/10 px-3 rounded-md"
                      : "text-gray-700 hover:text-primary",
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a href="tel:+919881922922" className="mt-2">
                <Button className="w-full gap-2 bg-[#fbbf24] hover:bg-[#f59e0b] text-black font-bold">
                  <Phone className="w-4 h-4" />
                  +91-98819 22922
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

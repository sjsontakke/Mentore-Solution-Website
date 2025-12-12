import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Building, Play, Phone } from "lucide-react"
import Image from "next/image"

export default function GalleryPage() {
  const galleryCategories = [
    {
      title: "Training Sessions",
      description: "Our students learning and growing in state-of-the-art classrooms",
      icon: Users,
      images: 8,
      cover: "https://images.unsplash.com/photo-1524178232363-1fb2b075b644?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "Workshops & Events",
      description: "Industry expert sessions and technical workshops",
      icon: Award,
      images: 6,
      cover: "https://images.unsplash.com/photo-1544531586807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "Infrastructure",
      description: "Modern facilities and learning environment",
      icon: Building,
      images: 5,
      cover: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "Success Celebrations",
      description: "Celebrating student achievements and placements",
      icon: Award,
      images: 7,
      cover: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop",
    },
  ]

  const galleryImages = [
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop", // Team meeting
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop", // Students studying
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop", // Coding workshop
    "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop", // Team success
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop", // Conference room
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop", // Happy team
    "https://images.unsplash.com/photo-1504384308090-c54be3855833?q=80&w=800&auto=format&fit=crop", // Modern office
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop", // Business analysis
    "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=800&auto=format&fit=crop", // DevOps cloud
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop", // Server racks
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop", // Tech infrastructure
    "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop", // Collaboration
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop", // Team meeting
    "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=800&auto=format&fit=crop", // Presentation
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=800&auto=format&fit=crop", // Team brainstorming
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop", // Virtual meeting
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 px-4 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2000&auto=format&fit=crop"
            alt="Gallery Hero"
            fill
            className="object-cover opacity-40"
          />
        </div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6 bg-[#fbbf24] text-black hover:bg-[#f59e0b]" variant="secondary">
              Gallery
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Life at Mentore Solution</h1>
            <p className="text-lg text-gray-200 text-pretty">
              Explore our vibrant learning environment, training sessions, workshops, and success celebrations.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Categories */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {galleryCategories.map((category, index) => (
              <Card key={index} className="group overflow-hidden border-none shadow-lg">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={category.cover || "/placeholder.svg"}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Badge className="bg-[#fbbf24] text-black">{category.images} Photos</Badge>
                  </div>
                </div>
                <CardContent className="pt-6 bg-white relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                      <category.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">{category.title}</h3>
                      <p className="text-sm text-muted-foreground">{category.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Captured Moments</h2>
              <p className="text-muted-foreground">A glimpse into our daily activities and special events</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {galleryImages.map((src, index) => (
                <div
                  key={index}
                  className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all"
                >
                  <Image
                    src={src || "/placeholder.svg"}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Video Tour</h2>
              <p className="text-lg text-muted-foreground">
                Take a virtual tour of our facilities and see what makes Mentore Solution special
              </p>
            </div>
            <Card className="overflow-hidden border-none shadow-2xl">
              <div className="relative aspect-video bg-black group cursor-pointer">
                <Image
                  src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2000&auto=format&fit=crop"
                  alt="Video Thumbnail"
                  fill
                  className="object-cover opacity-60 group-hover:opacity-40 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-[#fbbf24] rounded-full flex items-center justify-center pl-2 shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-black fill-black" />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Visit Us CTA */}
      <section className="py-20 px-4 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Visit Our Campus</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Experience our world-class facilities in person. Schedule a visit to see our classrooms, labs, and meet our
            team.
          </p>
          <a href="tel:+919881922922" className="inline-block">
            <button className="bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg inline-flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Schedule a Visit: +91-98819 22922
            </button>
          </a>
        </div>
      </section>
    </main>
  )
}

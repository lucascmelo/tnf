import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Eye, Clock, MessageSquare, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-primary">
      {/* Header */}
      <header className="border-b border-border/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="True North Fortress" width={180} height={60} className="h-12 w-auto" />
          </div>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
            Book Consultation
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary to-primary/95" />
        <div className="container mx-auto px-4 py-24 md:py-32 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm text-primary-foreground/90">Limited Time Offer — Save $250</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 text-balance leading-tight">
              Don't livestream your robbery.
            </h1>

            <p className="text-xl md:text-2xl text-primary-foreground/80 mb-4 font-medium">
              Know the Path. Fear No Threat.
            </p>

            <p className="text-lg text-primary-foreground/70 mb-10 max-w-2xl mx-auto leading-relaxed">
              True North Fortress helps Ontario homeowners fortify their houses using the same principles taught in
              Brazilian and Canadian self-defense systems — practical, calm, and always within the law.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6 h-auto"
              >
                Book Your Consultation — $249
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-sm text-primary-foreground/60">
                <span className="line-through">Regular $499</span> • One-time flat fee
              </p>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="container mx-auto px-4 pb-16">
          <div className="max-w-5xl mx-auto">
            <div className="relative aspect-[16/9] rounded-lg overflow-hidden border border-border/20 shadow-2xl">
              <Image
                src="/canadian-suburban-home-at-night-with-warm-exterior.jpg"
                alt="Secure Canadian home at night"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Promo Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-accent/20 bg-card/50 backdrop-blur">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-full bg-accent/10 flex items-center justify-center border-2 border-accent">
                    <ShieldCheck className="w-12 h-12 text-accent" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-card-foreground mb-3">
                    Flat Home Defense Consultation — $249
                  </h3>
                  <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                    During one visit, our expert inspects doors, windows, lighting, cameras, and escape routes, and
                    delivers a written plan to make your home safer.
                  </p>
                  <div className="flex flex-wrap gap-3 mb-6">
                    <div className="flex items-center gap-2 text-card-foreground">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                      <span>Comprehensive written report</span>
                    </div>
                    <div className="flex items-center gap-2 text-card-foreground">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                      <span>Free door reinforcement plate</span>
                    </div>
                    <div className="flex items-center gap-2 text-card-foreground">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                      <span>Optional hardware installation</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground italic">
                    Buy recommended hardware directly from True North Fortress or install it yourself. We're here to
                    fortify your home, not sell fear.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 5D Layers Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4 text-balance">
              The 5D Layers of Defense™
            </h2>
            <p className="text-xl text-primary-foreground/70 leading-relaxed">
              A simple method that turns panic into preparation.
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid gap-6">
            {[
              {
                number: "1",
                title: "Deter",
                description:
                  "Make your home the one they skip. Proper lighting, visibility, and posture make criminals choose elsewhere.",
                icon: Shield,
              },
              {
                number: "2",
                title: "Detect",
                description:
                  "Early awareness saves lives. Smart alerts, cameras, and sound cues give you time to react calmly and legally.",
                icon: Eye,
              },
              {
                number: "3",
                title: "Delay",
                description:
                  "Every second counts. Reinforced doors, window films, and strong frames buy you precious time.",
                icon: Clock,
              },
              {
                number: "4",
                title: "De-Escalate",
                description:
                  "Avoid confrontation legally and safely. Verbal strategies and positioning that calm instead of provoke.",
                icon: MessageSquare,
              },
              {
                number: "5",
                title: "Defend & Recover",
                description:
                  "Know exactly what you can do — and what you must avoid. Legal self-defense training and post-incident guidance.",
                icon: ShieldCheck,
              },
            ].map((layer, index) => (
              <Card
                key={index}
                className="border-border/20 bg-card/50 backdrop-blur hover:bg-card/70 transition-colors"
              >
                <CardContent className="p-6 md:p-8">
                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center border-2 border-accent">
                        <layer.icon className="w-8 h-8 text-accent" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline gap-3 mb-2">
                        <span className="text-5xl font-bold text-accent/30">{layer.number}</span>
                        <h3 className="text-2xl font-bold text-card-foreground">{layer.title}</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed text-lg">{layer.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why True North Fortress */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-card-foreground mb-12 text-center text-balance">
              Why True North Fortress
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {[
                {
                  title: "Prevention, not panic",
                  description: "We focus on practical, calm preparation rather than fear-based tactics.",
                },
                {
                  title: "Rooted in Canadian self-defense law",
                  description: "Every recommendation complies with Ontario and Canadian legal standards.",
                },
                {
                  title: "Flat $249 transparent pricing",
                  description: "No hidden fees, no upsells. One consultation, one price.",
                },
                {
                  title: "Serving Ontario communities",
                  description: "GTA, Kitchener-Waterloo, London, Windsor, Chatham-Kent, Tillsonburg.",
                },
                {
                  title: "Optional product installation",
                  description: "Buy hardware from us or install it yourself — your choice.",
                },
                {
                  title: "Expert training available",
                  description: "Optional self-defense training rooted in Brazilian and Canadian systems.",
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative aspect-[16/9] rounded-lg overflow-hidden border border-border/20 shadow-xl">
              <Image
                src="/professional-security-consultant-reviewing-home-de.jpg"
                alt="True North Fortress consultation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 text-balance">
              Book Your Home Defense Consultation
            </h2>
            <p className="text-xl text-primary-foreground/70 mb-8 leading-relaxed">
              Take the first step toward a safer home. Flat $249 fee includes comprehensive assessment, written report,
              and free door reinforcement installation.
            </p>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-10 py-7 h-auto"
            >
              Schedule Your Consultation Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="text-sm text-primary-foreground/60 mt-6">
              Serving Ontario: GTA, Kitchener-Waterloo, London, Windsor, Chatham-Kent, Tillsonburg
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/20 py-12 bg-primary">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="True North Fortress" width={160} height={53} className="h-10 w-auto" />
            </div>
            <div className="text-center md:text-right">
              <p className="text-primary-foreground/60 text-sm">
                © 2025 True North Fortress. Professional home defense consulting.
              </p>
              <p className="text-primary-foreground/50 text-xs mt-1">Know the Path. Fear No Threat.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

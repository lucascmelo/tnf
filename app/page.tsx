"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import AssessmentForm from "@/components/assessment-form"
import TopBar from "@/components/top-bar"
import HeroSection from "@/components/sections/hero-section"
import LocalReality from "@/components/sections/local-reality"
import IncludedSection from "@/components/sections/included-section"
import HowItWorks from "@/components/sections/how-it-works"
// import WhyThisWorks from "@/components/sections/why-this-works"
import ProofAndTrust from "@/components/sections/proof-and-trust"
import FaqSection from "@/components/sections/faq-section"
import FinalCta from "@/components/sections/final-cta"

export default function Page() {
  const [showAssessment, setShowAssessment] = useState(false)

  const handleCtaClick = () => {
    window.open("https://forms.gle/zGqHpfub8BJEMi1M7", "_blank");
  }

  return (
    <main className="min-h-screen bg-background">
      <TopBar onCtaClick={handleCtaClick} />
      <HeroSection onCtaClick={handleCtaClick} />
      <LocalReality />
      <IncludedSection onCtaClick={handleCtaClick} />
      <HowItWorks />
      {/* <WhyThisWorks /> */}
      <ProofAndTrust />
      <FaqSection />
      <FinalCta onCtaClick={handleCtaClick} />

      <Dialog open={showAssessment} onOpenChange={setShowAssessment}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Start Your Home Safety Assessment</DialogTitle>
          </DialogHeader>
          <AssessmentForm onClose={() => setShowAssessment(false)} />
        </DialogContent>
      </Dialog>
    </main>
  )
}

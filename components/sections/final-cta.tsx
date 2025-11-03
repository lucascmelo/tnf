"use client"

import { Button } from "@/components/ui/button"

interface FinalCtaProps {
  onCtaClick: () => void
}

export default function FinalCta({ onCtaClick }: FinalCtaProps) {
  return (
    <section id="cta" className="py-16 md:py-24 px-4 md:px-6 bg-background" data-section="cta">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#101315] leading-tight text-balance">
          One visit. One plan. Confidence for your family.
        </h2>

        <Button
          onClick={onCtaClick}
          size="lg"
          className="bg-[#9D8356] text-white hover:bg-[#876F48] focus:ring-2 focus:ring-[#B39567] h-12 text-lg"
          data-cta="footer"
        >
          Start My Home Safety Assessment
        </Button>

        <p className="text-sm text-[#3B4147] italic">We're coaches, not installers. Buy gear from us — or anywhere.</p>
      </div>
    </section>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

interface IncludedSectionProps {
  onCtaClick: () => void
}

export default function IncludedSection({ onCtaClick }: IncludedSectionProps) {
  return (
    <section id="included" className="py-16 md:py-24 px-4 md:px-6 bg-background" data-section="included">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#101315] leading-tight text-balance">
            What's included in your visit
          </h2>

          <ul className="space-y-4">
            <li className="flex gap-4 items-start">
              <Check className="w-6 h-6 text-[#9D8356] flex-shrink-0 mt-0.5" />
              <span className="text-base text-[#101315]">
                <strong>Full home audit</strong> — doors, windows, lighting, camera angles, approach routes
              </span>
            </li>
            <li className="flex gap-4 items-start">
              <Check className="w-6 h-6 text-[#9D8356] flex-shrink-0 mt-0.5" />
              <span className="text-base text-[#101315]">
                <strong>Written action plan</strong> — prioritized from "do today" to "contractor later"
              </span>
            </li>
            <li className="flex gap-4 items-start">
              <Check className="w-6 h-6 text-[#9D8356] flex-shrink-0 mt-0.5" />
              <span className="text-base text-[#101315]">
                <strong>Family response training</strong> — safety-first actions that prioritize de-escalation.
              </span>
            </li>
            <li className="flex gap-4 items-start">
              <Check className="w-6 h-6 text-[#9D8356] flex-shrink-0 mt-0.5" />
              <span className="text-base text-[#101315]">
                <strong>Unbiased gear list</strong> — we recommend; you decide where to purchase.
              </span>
            </li>
            <li className="flex gap-4 items-start">
              <Check className="w-6 h-6 text-[#9D8356] flex-shrink-0 mt-0.5" />
              <span className="text-base text-[#101315]">
                <strong>Immediate win on the spot</strong> — at least one improvement.
              </span>
            </li>
          </ul>

          {/* <div className="bg-[#F4EFE4] border border-[#DAD3C5] rounded-full px-4 py-2 w-fit">
            <p className="text-sm font-semibold text-[#3B4147]">One visit. One plan. One coach.</p>
          </div> */}

          <Button
            onClick={onCtaClick}
            className="bg-[#9D8356] text-white hover:bg-[#876F48] focus:ring-2 focus:ring-[#B39567] cursor-pointer"
            data-cta="included"
          >
            Plan My Visit
          </Button>
        </div>

        {/* Right: Image */}
        <div className="relative h-96 md:h-full rounded-lg overflow-hidden bg-gradient-to-br from-[#DAD3C5] to-[#F4EFE4]">
          <img
            src="floorplan.png"
            alt="Security consultant with homeowners at kitchen island reviewing floor plan"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { useEffect, useRef, useState } from "react"

interface HeroSectionProps {
  onCtaClick: () => void
}

export default function HeroSection({ onCtaClick }: HeroSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [showTopMask, setShowTopMask] = useState(true)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Ensure video plays
    const playVideo = async () => {
      try {
        video.muted = true
        video.playbackRate = 0.8
        await video.play()
      } catch {}
    }

    playVideo()

    // Hide mask after video starts loading
    const maskTimeout = setTimeout(() => setShowTopMask(false), 800)
    return () => {
      clearTimeout(maskTimeout)
    }
  }, [])
  return (
    <section id="hero" className="py-16 md:py-24 px-4 md:px-6 bg-background" data-section="hero">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#101315] leading-tight text-balance">
              Know exactly what to do. Before and during a break-in.
            </h2>
            <h1 className="text-xl md:text-2xl text-[#9D8356] font-semibold">
              Home Security Consulting & Training in Southwestern Ontario
            </h1>
          </div>

          <p className="text-lg md:text-xl text-[#3B4147] leading-relaxed max-w-md">
            We guide you on what to fix, buy, and how to act under stress.<br />One in-home visit. No contracts.
          </p>

          <div className="flex flex-col gap-2 text-base text-[#101315]">
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-[#9D8356]" />
              <span>In-home audit</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-[#9D8356]" />
              <span>Written action plan</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-[#9D8356]" />
              <span>Family response training</span>
            </div>
          </div>

          <Button
            onClick={onCtaClick}
            className="bg-[#9D8356] text-white hover:bg-[#876F48] focus:ring-2 focus:ring-[#B39567] h-12 text-lg cursor-pointer"
            data-cta="hero"
          >
            Make My Home the One They Skip
          </Button>

          <p className="text-sm text-[#3B4147] italic">
            We're home defence advisors, not installers. Buy gear from us — or anywhere. Our advice is unbiased.
          </p>
        </div>

        {/* Right: Image */}
        <div className="relative h-96 md:h-full rounded-lg overflow-hidden bg-gradient-to-br from-[#DAD3C5] to-[#F4EFE4]">
          <video
            ref={videoRef}
            src="video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full"
          />
          <div
            className={`pointer-events-none absolute inset-0 h-full bg-black z-10 transition-opacity duration-300 ${
              showTopMask ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>
      </div>
    </section>
  )
}

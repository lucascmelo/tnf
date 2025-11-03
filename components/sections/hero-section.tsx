"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { useEffect, useRef, useState } from "react"

interface HeroSectionProps {
  onCtaClick: () => void
}

export default function HeroSection({ onCtaClick }: HeroSectionProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [showTopMask, setShowTopMask] = useState(true)

  const forcePlay = () => {
    try {
      const win = iframeRef.current?.contentWindow
      if (!win) return
      win.postMessage(JSON.stringify({ event: "command", func: "mute", args: [] }), "*")
      win.postMessage(JSON.stringify({ event: "command", func: "setPlaybackRate", args: [0.5] }), "*")
      win.postMessage(JSON.stringify({ event: "command", func: "playVideo", args: [] }), "*")
    } catch {}
  }

  useEffect(() => {
    const iframe = iframeRef.current
    if (!iframe) return

    const ensurePlayback = () => {
      try {
        const post = (payload: any) =>
          iframe.contentWindow?.postMessage(JSON.stringify(payload), "*")

        // Force muted inline playback then set rate and play
        post({ event: "command", func: "mute", args: [] })
        post({ event: "command", func: "setPlaybackRate", args: [0.5] })
        post({ event: "command", func: "playVideo", args: [] })
      } catch {}
    }

    ensurePlayback()
    const id = setInterval(ensurePlayback, 800)
    const timeout = setTimeout(() => clearInterval(id), 5000)

    // Fallback: hide the mask after a short delay in case onLoad doesn't fire in time
    const maskTimeout = setTimeout(() => setShowTopMask(false), 3200)
    return () => {
      clearInterval(id)
      clearTimeout(timeout)
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
        <div className="relative h-96 md:h-full rounded-lg overflow-hidden bg-gradient-to-br from-[#DAD3C5] to-[#F4EFE4]" onClick={forcePlay}>
          {/* <img
            src="/ontario-home-exterior-at-dusk-with-layered-warm-li.jpg"
            alt="Ontario home exterior at dusk with layered warm lighting"
            className="w-full h-full object-cover"
          /> */}
          <iframe
            ref={iframeRef}
            className="absolute inset-0 w-full h-full pointer-events-none transform scale-[1.15] -translate-y-6 md:-translate-y-10"
            src="https://www.youtube.com/embed/-kWxVXELkLU?autoplay=1&mute=1&loop=1&playlist=-kWxVXELkLU&controls=0&modestbranding=1&rel=0&playsinline=1&iv_load_policy=3&disablekb=1&enablejsapi=1"
            title="Homes being attack by intruders"
            allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            onLoad={() => {
              // Hide soon after the iframe content loads
              setTimeout(() => setShowTopMask(false), 800)
              // Kick playback once more on load for mobile
              try {
                const win = iframeRef.current?.contentWindow
                win?.postMessage(
                  JSON.stringify({ event: "command", func: "mute", args: [] }),
                  "*",
                )
                win?.postMessage(
                  JSON.stringify({ event: "command", func: "playVideo", args: [] }),
                  "*",
                )
              } catch {}
            }}
            allowFullScreen
          ></iframe>
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

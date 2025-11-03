"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

interface TopBarProps {
  onCtaClick: () => void
}

export default function TopBar({ onCtaClick }: TopBarProps) {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`top-0 left-0 right-0 z-40 border-b transition-all ${isSticky ? "fixed bg-background/95 backdrop-blur-sm" : "relative"
        } border-[#DAD3C5]`}
      data-section="utility"
    >
      <div
        className={`px-4 py-3 md:px-6 md:py-4 flex items-center justify-between max-w-7xl mx-auto ${
          !isSticky ? 'justify-self-center md:justify-self-auto' : ''
        }`}
      >
        <div className="text-xs md:text-sm text-[#3B4147] leading-relaxed">
          <span className={`${isSticky ? 'inline' : 'hidden'}`}>
            🇨🇦 Serving Southwestern Ontario
          </span>
          <img
            className={`${isSticky ? 'hidden' : 'inline'} h-md-20 h-16 w-auto object-cover`}
            src="true-north-fortress-logo.png"
            alt="True North Fortress Logo"
          />
        </div>
        <Button
          onClick={onCtaClick}
          className={`${!isSticky ? 'hidden' : 'inline-flex'} md:inline-flex bg-[#9D8356] text-white hover:bg-[#876F48] focus:ring-2 focus:ring-[#B39567] ml-auto cursor-pointer`}
          data-cta="top"
          size="sm"
        >
          Book Your Visit
        </Button>
      </div>
    </div>
  )
}

"use client"

import { Shield, BookOpen, TrendingUp } from "lucide-react"
import { useEffect, useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProofAndTrust() {
  const testimonials = [
    {
      quote: '"I finally feel like we have a real plan. Besides only relying in cameras. Just practical information."',
      author: "— A & C, Woodstock",
    },
    {
      quote: '"The awareness changed everything. Now wife and kids know what to do if I can\'t."',
      author: "— R & G, Kitchener",
    },
    {
      quote: '"Clear, calm, and practical. We fixed the weak points and sleep better."',
      author: "— D, London",
    },
  ]

  const [tab, setTab] = useState("t0")
  useEffect(() => {
    const id = setInterval(() => {
      const idx = testimonials.findIndex((_, i) => `t${i}` === tab)
      const next = (idx + 1) % testimonials.length
      setTab(`t${next}`)
    }, 5000)
    return () => clearInterval(id)
  }, [tab, testimonials.length])
  return (
    <section id="proof" className="py-16 px-4 md:px-6 bg-[#0E1A18]" data-section="proof">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* <h2 className="text-3xl md:text-4xl font-bold text-[#F4EFE4] text-center leading-tight text-balance">
          Testimonials
        </h2> */}

        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center space-y-4">
            <Shield className="w-10 h-10 text-[#B39567]" />
            <div>
              <h3 className="font-semibold text-[#F4EFE4]">Ontario-based & insured</h3>
              <p className="text-sm text-[#DAD3C5] mt-2">Local expertise and full coverage</p>
            </div>
          </div>

          <div className="flex flex-col items-center text-center space-y-4">
            <BookOpen className="w-10 h-10 text-[#B39567]" />
            <div>
              <h3 className="font-semibold text-[#F4EFE4]">Law-aware coaching</h3>
              <p className="text-sm text-[#DAD3C5] mt-2">
                Avoidance, de-escalation, lawful defense aligned with Canadian standards
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center text-center space-y-4">
            <TrendingUp className="w-10 h-10 text-[#B39567]" />
            <div>
              <h3 className="font-semibold text-[#F4EFE4]">Real outcomes</h3>
              <p className="text-sm text-[#DAD3C5] mt-2">
                Reduced vulnerable entries from 6 → 2 in one visit; set a two-step night routine
              </p>
            </div>
          </div>
        </div> */}

        <div className="">
          <Tabs value={tab} onValueChange={setTab} className="max-w-3xl mx-auto">
            
            {testimonials.map((t, i) => (
              <TabsContent
                key={`t${i}`}
                value={`t${i}`}
              >
                <div className="bg-[#fff] border border-[#3B4147] rounded-lg p-6 space-y-2 transition-all duration-500 data-[state=inactive]:opacity-0 data-[state=active]:opacity-100">
                  <p className="text-[#000] font-semibold">{t.quote}</p>
                  <p className="text-sm text-[#000]">{t.author}</p>
                </div>
              </TabsContent>
            ))}
            <TabsList className="bg-transparent gap-2 mx-auto">
              {testimonials.map((_, i) => (
                <TabsTrigger
                  key={`dot-${i}`}
                  value={`t${i}`}
                  className="w-3 h-3 rounded-full p-0 border border-[#3B4147] data-[state=active]:bg-[#B39567] cursor-pointer"
                  aria-label={`Show testimonial ${i + 1}`}
                />
              ))}
            </TabsList>
          </Tabs>
        </div>
      </div>
    </section>
  )
}

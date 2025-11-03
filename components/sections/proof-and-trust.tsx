import { Shield, BookOpen, TrendingUp } from "lucide-react"

export default function ProofAndTrust() {
  return (
    <section id="proof" className="py-16 md:py-24 px-4 md:px-6 bg-[#0E1A18]" data-section="proof">
      <div className="max-w-7xl mx-auto space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#F4EFE4] text-center leading-tight text-balance">
          Testimonials
        </h2>

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-[#101315] border border-[#3B4147] rounded-lg p-6 space-y-2">
            <p className="text-[#F4EFE4] font-semibold">
              "After one session, I finally feel like we have a real plan. Not scary, just practical."
            </p>
            <p className="text-sm text-[#DAD3C5]">— Almir & Carol, Woodstock</p>
          </div>
          <div className="bg-[#101315] border border-[#3B4147] rounded-lg p-6 space-y-2">
            <p className="text-[#F4EFE4] font-semibold">
              "The coaching part changed everything. Now my kids know what to do if I can't."
            </p>
            <p className="text-sm text-[#DAD3C5]">— Rian & Gabriela, Kitchener</p>
          </div>
        </div>
      </div>
    </section>
  )
}

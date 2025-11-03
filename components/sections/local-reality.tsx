import { Card } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

export default function LocalReality() {
  return (
    <section id="local" className="py-16 md:py-24 px-4 md:px-6 bg-[#FFFFFF]" data-section="local">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-12 items-center">
        {/* Left: Image */}
        {/* <div className="relative h-70 rounded-lg overflow-hidden bg-black">
          <img
            src="/southern-ontario-neighborhood-at-dusk.jpg"
            alt="Southern Ontario neighborhood at dusk"
            className="w-full h-full object-cover"
          />
        </div> */}

        {/* Right: Text */}
        <div className="order-1 md:order-2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#101315] leading-tight text-balance text-center">
            Don’t become a statistic
          </h2>

          <p className="text-base md:text-lg text-[#3B4147] leading-relaxed text-center">
            Break and enters is increasing rapidly. Protect your home before it's too late.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-[#F4EFE4] border-[#DAD3C5] p-4 space-y-2">
              <div className="text-2xl font-bold text-[#9D8356]">241 break-ins, Aug 2025</div>
              <p className="text-sm text-[#3B4147]">Only 18 solved.<br />(Peel Regional Police data August 2025, Brampton & Mississauga)</p>
            </Card>
            <Card className="bg-[#F4EFE4] border-[#DAD3C5] p-4 space-y-2">
              <div className="text-2xl font-bold text-[#9D8356]">+105% year-over-year (Toronto)</div>
              <p className="text-sm text-[#3B4147]">Home invasions surged even as car-theft-linked cases dipped.</p>
            </Card>
            <Card className="bg-[#F4EFE4] border-[#DAD3C5] p-4 space-y-2 flex flex-col justify-between">
              <div className="text-2xl font-bold text-[#9D8356]">Nearly 600 break-ins (KW)</div>
              <p className="text-sm text-[#3B4147]">The Waterloo Regional Police Service reports an average of 868 residential break-ins over the same period from 2019–2023.</p>
            </Card>
          </div>

          <p className="text-xs text-[#3B4147]">Sources: Statistics Canada; local police dashboards.</p>
        </div>
      </div>
    </section>
  )
}

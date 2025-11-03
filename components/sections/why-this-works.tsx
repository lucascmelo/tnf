import { Check } from "lucide-react"

export default function WhyThisWorks() {
  const reasons = [
    {
      title: "Clarity under stress",
      description: "Exactly what to do, say, and avoid (lawfully)",
    },
    {
      title: "Faster awareness",
      description: "Small tweaks that buy seconds — and control",
    },
    {
      title: "Harder target",
      description: "Low-cost improvements that deter and delay",
    },
    {
      title: "Unbiased plan",
      description: "No contracts or commissions; you choose where to buy",
    },
  ]

  return (
    <section id="why" className="py-16 md:py-24 px-4 md:px-6 bg-background" data-section="why">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#101315] leading-tight text-balance">Why this works</h2>

          <ul className="space-y-4">
            {reasons.map((reason, idx) => (
              <li key={idx} className="flex gap-4 items-start">
                <Check className="w-6 h-6 text-[#9D8356] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#101315]">{reason.title}</p>
                  <p className="text-sm text-[#3B4147]">— {reason.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Image */}
        <div className="relative h-96 md:h-full rounded-lg overflow-hidden bg-gradient-to-br from-[#DAD3C5] to-[#F4EFE4]">
          <img
            src="/security-consultant-reviewing-floor-plan-with-home.jpg"
            alt="Security consultant reviewing floor plan with homeowners"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}

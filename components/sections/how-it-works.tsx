import { Card } from "@/components/ui/card"
import { FileText, Home, CheckCircle2 } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      icon: FileText,
      title: "Before we arrive",
      description: (
        <>
          Answer the questionnaire for a focused audit.<br />
          <span className="text-xs italic">
            *No name, no address, no exact location. Your responses are anonymous and not tied to your home.
          </span>
        </>
      ),
    },
    {
      icon: Home,
      title: "In-Home Session",
      description: "We visit, audit your space, train you through priorities, and deliver a written action plan.",
    },
    {
      icon: CheckCircle2,
      title: "After the visit",
      description: "Do it yourself, hire your contractor, or work with our team for guidance. The choice is yours.",
    },
  ]

  return (
    <section id="how" className="py-16 md:py-24 px-4 md:px-6 bg-[#FFFFFF]" data-section="how">
      <div className="max-w-7xl mx-auto space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#101315] text-center leading-tight text-balance">
          How it works
        </h2>
        <p className="text-base md:text-lg text-[#3B4147] leading-relaxed text-center">
          Your safety begins here.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <Card key={idx} className="bg-[#F4EFE4] border-[#DAD3C5] p-6 space-y-4 text-center">
                <div className="flex justify-center">
                  <Icon className="w-10 h-10 text-[#9D8356]" />
                </div>
                <h3 className="text-lg font-semibold text-[#101315]">{step.title}</h3>
                <p className="text-sm text-[#3B4147] leading-relaxed">{step.description}</p>
              </Card>
            )
          })}
        </div>

        <p className="text-center text-xs text-[#3B4147] italic">
          We use our proprietary layered method — details provided during your visit.
        </p>
      </div>
    </section>
  )
}

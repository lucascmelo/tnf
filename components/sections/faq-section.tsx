import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FaqSection() {
  const faqs = [
    {
      q: "Are you installers?",
      a: "No. We're independent consultants & coaches. We'll show you exactly what to buy and where, but you decide who installs it—or if you DIY.",
    },
    {
      q: "Do I have to buy gear from you?",
      a: "No. We provide an unbiased SKU list with links. Buy anywhere—our advice doesn't change based on where you shop.",
    },
    {
      q: "Houses, condos, rentals?",
      a: "All of the above. We tailor recommendations to your property type and lease/ownership rules. Rental? We focus on low-cost, non-permanent wins.",
    },
    {
      q: "FAQ legal clarity",
      a: "We do not provide legal advice. We offer practical, de-escalation-focused training and point to public guidance. For legal advice, consult a licensed lawyer.",
    },
  ]

  return (
    <section id="faq" className="py-16 md:py-24 px-4 md:px-6 bg-[#FFFFFF]" data-section="faq">
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-12 items-start">
        {/* Left: Accordion */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#101315] leading-tight text-balance mb-8">
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`faq-${idx}`} className="border border-[#DAD3C5] rounded-lg px-4">
                <AccordionTrigger className="text-left text-base font-semibold text-[#101315] hover:text-[#9D8356]">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-base text-[#3B4147] leading-relaxed">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Right: Image */}
        {/* <div className="relative h-96 md:h-full rounded-lg overflow-hidden bg-gradient-to-br from-[#DAD3C5] to-[#F4EFE4]">
          <img
            src="/calm-family-practicing-simple-at-home-security-dri.jpg"
            alt="Calm family practicing simple at-home security drill"
            className="w-full h-full object-cover"
          />
        </div> */}
      </div>
    </section>
  )
}

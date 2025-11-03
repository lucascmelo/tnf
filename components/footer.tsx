export default function Footer() {
  return (
    <footer className="bg-[#101315] text-[#F4EFE4] py-12 px-4 md:px-6" data-section="footer">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-3">
          <h3 className="font-bold text-lg">True North Fortress</h3>
          <div className="text-sm space-y-1">
            <p>
              Email:{" "}
              <a href="mailto:hello@tnfortress.ca" className="hover:text-[#B39567]">
                hello@tnfortress.ca
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href="tel:+14165551234" className="hover:text-[#B39567]">
                (416) 555-1234
              </a>
            </p>
          </div>
          <p className="text-xs text-[#DAD3C5] italic mt-6">
            We are not a monitoring company or alarm contractor. Training prioritizes avoidance, de-escalation, and
            lawful defense aligned with Canadian standards.
          </p>
        </div>

        {/* Right Column */}
        <div className="space-y-3">
          <h3 className="font-bold text-lg">Service Areas</h3>
          <div className="text-sm space-y-2">
            <p>GTA • Kitchener-Waterloo • London • Windsor • Peel • Chatham-Kent • Tillsonburg</p>
          </div>
          <div className="text-sm space-x-4 mt-6">
            <a href="#" className="hover:text-[#B39567]">
              Privacy
            </a>
            <a href="#" className="hover:text-[#B39567]">
              Terms
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-[#3B4147] mt-8 pt-8 text-center text-xs text-[#DAD3C5]">
        <p>&copy; 2025 True North Fortress. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">🐕</span>
              <span className="text-lg font-bold text-white">
                DosageForDogs
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Educational dosage information for dog owners. Always consult
              your veterinarian.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white mb-3">Site</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-teal-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-teal-400 transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-teal-400 transition">
                  About
                </a>
              </li>
              <li>
                <a href="/sources" className="hover:text-teal-400 transition">
                  Sources
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-teal-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white mb-3">Medications</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/benadryl" className="hover:text-teal-400 transition">
                  Benadryl
                </a>
              </li>
              <li>
                <a href="/trazodone" className="hover:text-teal-400 transition">
                  Trazodone
                </a>
              </li>
              <li>
                <a href="/gabapentin" className="hover:text-teal-400 transition">
                  Gabapentin
                </a>
              </li>
              <li>
                <a href="/carprofen" className="hover:text-teal-400 transition">
                  Carprofen
                </a>
              </li>
              <li>
                <a href="/zyrtec" className="hover:text-teal-400 transition">
                  Zyrtec
                </a>
              </li>
              <li>
                <a href="/meloxicam" className="hover:text-teal-400 transition">
                  Meloxicam
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white mb-3">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/disclaimer"
                  className="hover:text-teal-400 transition"
                >
                  Disclaimer
                </a>
              </li>
              <li>
                <a
                  href="/toxic-foods-and-medicines"
                  className="hover:text-teal-400 transition"
                >
                  Toxic Foods
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  className="hover:text-teal-400 transition"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-teal-400 transition">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500 text-center md:text-left">
            © 2026 DosageForDogs.com — Not veterinary advice. Educational use
            only.
          </p>
          <p className="text-xs text-slate-500">Made for dog parents 🐾</p>
        </div>
      </div>
    </footer>
  );
}
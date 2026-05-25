// ── TotoAfya Digital — Footer ───────────────────────────────────
import { Link } from 'react-router-dom'
import { Activity, MapPin, Mail, Phone, Building2 } from 'lucide-react'

// ── Column data ──────────────────────────────────────────────────
const quickLinks = [
  { label: 'Features', href: '/#features' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Download', href: '/download' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

const resourceLinks = [
  { label: 'User Guide', href: '#' },
  { label: 'Nurse Portal', href: '#' },
  { label: 'Admin Dashboard', href: '#' },
  { label: 'API Documentation', href: '#' },
  { label: 'Privacy Policy', href: '/privacy' },
]

const socialLinks = [
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    label: 'X / Twitter',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
        className="w-5 h-5" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.553 4.12 1.522 5.856L.057 23.887l6.228-1.435A11.933 11.933 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.797 9.797 0 01-5.002-1.374l-.36-.214-3.71.854.888-3.618-.236-.372A9.793 9.793 0 012.182 12c0-5.413 4.405-9.818 9.818-9.818 5.413 0 9.818 4.405 9.818 9.818 0 5.413-4.405 9.818-9.818 9.818z" />
      </svg>
    ),
  },
]

// ── Component ────────────────────────────────────────────────────
export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white" role="contentinfo">
      {/* ── Main footer grid ────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* ── Brand column ──────────────────────────────────── */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <Link to="/" className="flex items-center group w-fit">
              <img
                src="/logo.png"
                alt="TotoAfya Digital Logo"
                className="h-10 w-auto object-contain group-hover:scale-[1.02] transition-transform duration-200"
              />
            </Link>

            <p className="mt-4 font-sans text-sm text-gray-400 leading-relaxed max-w-xs">
              Smarter maternal care at your fingertips. Built in Kenya, for Kenya.
              A product of TerraSept Solutions Ltd.
            </p>

            {/* Social links */}
            <div className="mt-6 flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl bg-gray-800 flex items-center justify-center
                             text-gray-400 hover:bg-forest-600 hover:text-white
                             transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── Quick links ───────────────────────────────────── */}
          <div>
            <h3 className="font-sans font-semibold text-sm text-white uppercase
                           tracking-wider mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  {l.href.startsWith('/') && !l.href.includes('#') ? (
                    <Link
                      to={l.href}
                      className="font-sans text-sm text-gray-400 hover:text-forest-400
                                 transition-colors duration-150 flex items-center gap-1.5 group"
                    >
                      <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-4
                                      group-hover:ml-0 transition-all duration-200"
                        viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
                        <path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5"
                          strokeLinecap="round" fill="none" />
                      </svg>
                      {l.label}
                    </Link>
                  ) : (
                    <a
                      href={l.href}
                      className="font-sans text-sm text-gray-400 hover:text-forest-400
                                 transition-colors duration-150 flex items-center gap-1.5 group"
                    >
                      <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-4
                                      group-hover:ml-0 transition-all duration-200"
                        viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
                        <path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5"
                          strokeLinecap="round" fill="none" />
                      </svg>
                      {l.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* ── Resources ─────────────────────────────────────── */}
          <div>
            <h3 className="font-sans font-semibold text-sm text-white uppercase
                           tracking-wider mb-5">
              Resources
            </h3>
            <ul className="space-y-3">
              {resourceLinks.map((l) => (
                <li key={l.label}>
                  {l.href.startsWith('/') && !l.href.includes('#') ? (
                    <Link
                      to={l.href}
                      className="font-sans text-sm text-gray-400 hover:text-forest-400
                                 transition-colors duration-150 flex items-center gap-1.5 group"
                    >
                      <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-4
                                      group-hover:ml-0 transition-all duration-200"
                        viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
                        <path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5"
                          strokeLinecap="round" fill="none" />
                      </svg>
                      {l.label}
                    </Link>
                  ) : (
                    <a
                      href={l.href}
                      className="font-sans text-sm text-gray-400 hover:text-forest-400
                                 transition-colors duration-150 flex items-center gap-1.5 group"
                    >
                      <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-4
                                      group-hover:ml-0 transition-all duration-200"
                        viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
                        <path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5"
                          strokeLinecap="round" fill="none" />
                      </svg>
                      {l.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact info ──────────────────────────────────── */}
          <div>
            <h3 className="font-sans font-semibold text-sm text-white uppercase
                           tracking-wider mb-5">
              Get In Touch
            </h3>
            <ul className="space-y-3">
              {[
                { icon: <MapPin className="w-4 h-4 text-forest-400" />, text: 'Kisii Town, Kisii County, Kenya' },
                { icon: <Mail className="w-4 h-4 text-forest-400" />, text: 'cto@terraseptsolutions.com' },
                { icon: <Phone className="w-4 h-4 text-forest-400" />, text: '+254 113 242 983' },
                { icon: <Building2 className="w-4 h-4 text-forest-400" />, text: 'TerraSept Solutions Ltd' },
              ].map((c) => (
                <li key={c.text} className="flex items-start gap-2.5">
                  <span className="flex-shrink-0 mt-1">{c.icon}</span>
                  <span className="font-sans text-sm text-gray-400 leading-snug">
                    {c.text}
                  </span>
                </li>
              ))}
            </ul>

            {/* Newsletter stub */}
            <div className="mt-6">
              <p className="font-sans text-xs text-gray-500 mb-2 uppercase tracking-wider">
                Stay updated
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-3 py-2 rounded-lg bg-gray-800 border border-gray-700
                             text-white text-xs font-sans placeholder:text-gray-600
                             focus:border-forest-500 focus:outline-none transition-colors"
                />
                <button
                  className="px-3 py-2 bg-forest-600 hover:bg-forest-500 text-white
                             rounded-lg text-xs font-sans font-semibold transition-colors"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ──────────────────────────────────────── */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5
                        flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-xs text-gray-500 text-center sm:text-left">
            © {year} TerraSept Solutions Ltd. All rights reserved.
            TotoAfya Digital is a registered product of TerraSept Solutions Ltd, Kenya.
          </p>
          <div className="flex items-center gap-4">
            {[
              { label: 'Privacy Policy', href: '/privacy' },
              { label: 'Terms of Use', href: '/terms' },
              { label: 'Disclaimer', href: '/disclaimer' },
            ].map((l) => (
              <Link key={l.label} to={l.href}
                className="font-sans text-xs text-gray-500 hover:text-forest-400
                           transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

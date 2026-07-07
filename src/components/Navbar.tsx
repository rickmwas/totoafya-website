// ── TotoAfya Digital — Navbar (Redesigned) ──────────────────────
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Download, ChevronDown, X, Trophy } from 'lucide-react'

// ── Logo Component ──────────────────────────────────────────────
function Logo() {
  return (
    <Link to="/" className="flex items-center group -ml-2" aria-label="TotoAfya Digital home">
      <img
        src="/logo.png"
        alt="TotoAfya Digital Logo"
        className="h-16 sm:h-20 w-auto object-contain group-hover:scale-[1.03] transition-transform duration-200"
      />
    </Link>
  )
}

// ── Nav items ───────────────────────────────────────────────────
const navItems = [
  { label: 'Product',     href: '/#features',     hasDropdown: true  },
  { label: 'Solutions',   href: '/#how-it-works',  hasDropdown: true  },
  { label: 'Resources',   href: '#',               hasDropdown: true  },
  { label: 'Pricing',     href: '/pricing',        hasDropdown: false },
  { label: 'About Us',    href: '/about',          hasDropdown: false },
]

// ── Component ───────────────────────────────────────────────────
export default function Navbar() {
  const [scrolled,       setScrolled]       = useState(false)
  const [mobileOpen,     setMobileOpen]     = useState(false)
  const [announcementOn, setAnnouncementOn] = useState(true)
  const location = useLocation()

  // Track scroll for background change
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    handler()
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false) }, [location])

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const navBg = scrolled || mobileOpen
    ? 'bg-white/97 backdrop-blur-md shadow-sm border-b border-gray-100'
    : 'bg-white/90 backdrop-blur-sm'

  return (
    <header className="fixed top-0 left-0 right-0 z-50" role="banner">

      {/* ── Announcement bar ──────────────────────────────────── */}
      <AnimatePresence>
        {announcementOn && (
          <motion.div
            key="announcement"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="bg-forest-600 text-white overflow-hidden"
          >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-center gap-3">
              <Trophy className="w-3.5 h-3.5 text-earth-300 flex-shrink-0" />
              <p className="font-sans text-xs font-semibold text-center">
                🏆 <span className="font-bold">Kisii Innovation Week Winner</span>
                <span className="text-forest-200 mx-1.5">·</span>
                Now live in <span className="font-bold">50+ facilities</span> across Kenya
              </p>
              <button
                onClick={() => setAnnouncementOn(false)}
                className="ml-auto flex-shrink-0 text-forest-200 hover:text-white transition-colors"
                aria-label="Dismiss announcement"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Main navbar ───────────────────────────────────────── */}
      <div className={`transition-all duration-300 ${navBg}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* ── Logo ──────────────────────────────────────────── */}
            <Logo />

            {/* ── Desktop Nav ───────────────────────────────────── */}
            <nav className="hidden md:flex items-center gap-1" aria-label="Primary navigation">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="inline-flex items-center gap-1 px-3 py-2 rounded-md font-sans font-medium text-sm text-gray-600 hover:text-forest-700 hover:bg-forest-50 transition-all duration-150 whitespace-nowrap"
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
                  )}
                </a>
              ))}
            </nav>

            {/* ── Desktop CTA ───────────────────────────────────── */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                to="/download"
                className="inline-flex items-center gap-2 font-sans font-medium text-sm text-gray-600 hover:text-forest-700 transition-colors whitespace-nowrap px-2 py-2"
              >
                Log in
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-forest-600 text-white font-sans font-bold text-sm hover:bg-forest-700 active:scale-95 transition-all duration-200 whitespace-nowrap shadow-sm"
              >
                Request a Demo
              </Link>
            </div>

            {/* ── Hamburger ─────────────────────────────────────── */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <span className={`block w-5 h-0.5 bg-gray-700 rounded transition-all duration-200
                                ${mobileOpen ? 'rotate-45 translate-y-1' : 'mb-1.5'}`} />
              <span className={`block w-5 h-0.5 bg-gray-700 rounded transition-all duration-200
                                ${mobileOpen ? 'opacity-0 scale-x-0' : 'mb-1.5'}`} />
              <span className={`block w-5 h-0.5 bg-gray-700 rounded transition-all duration-200
                                ${mobileOpen ? '-rotate-45 -translate-y-1' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile Menu ───────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden border-t border-gray-100 bg-white max-h-[calc(100vh-5rem)] overflow-y-auto"
          >
            <nav className="px-4 pt-4 pb-6 flex flex-col gap-1" aria-label="Mobile navigation">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="px-4 py-3 rounded-xl font-sans font-semibold text-gray-700
                             hover:bg-forest-50 hover:text-forest-700 transition-colors flex items-center justify-between"
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="w-4 h-4 text-gray-400" />}
                </motion.a>
              ))}
              <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-3">
                <Link to="/download" className="btn-secondary w-full justify-center">
                  <Download className="w-4 h-4" />
                  Log in
                </Link>
                <Link to="/contact" className="btn-primary w-full justify-center">
                  Request a Demo
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

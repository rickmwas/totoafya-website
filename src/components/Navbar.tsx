// ── TotoAfya Digital — Navbar ───────────────────────────────────
// Transparent on hero → opaque white on scroll; hamburger on mobile
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Download } from 'lucide-react'

// ── Logo Component ──────────────────────────────────────────────
function Logo() {
  return (
    <Link to="/" className="flex items-center group -ml-2" aria-label="TotoAfya Digital home">
      <img
        src="/logo.png"
        alt="TotoAfya Digital Logo"
        className="h-14 sm:h-20 lg:h-[140px] w-auto object-contain transform translate-y-1 lg:translate-y-6 group-hover:scale-[1.03] transition-transform duration-200"
      />
    </Link>
  )
}

// ── Nav items ───────────────────────────────────────────────────
const navItems = [
  { label: 'Features',     href: '/#features'       },
  { label: 'How It Works', href: '/#how-it-works'   },
  { label: 'About Us',     href: '/about'            },
  { label: 'Pricing',      href: '/pricing'          },
]

// ── Component ───────────────────────────────────────────────────
export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false)
  const [mobileOpen,   setMobileOpen]   = useState(false)
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
    ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
    : 'bg-transparent'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
      role="banner"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* ── Logo ──────────────────────────────────────────── */}
          <Logo />

          {/* ── Desktop Nav ───────────────────────────────────── */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-6" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link px-1 py-2 text-sm font-semibold text-gray-600 hover:text-forest-600 transition-colors whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* ── Desktop CTA ───────────────────────────────────── */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <Link
              to="/download"
              className="inline-flex items-center gap-2 font-sans font-semibold text-sm text-gray-700 hover:text-forest-600 transition-colors whitespace-nowrap"
            >
              <Download className="w-4 h-4 stroke-[2.5]" />
              Download App
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-forest-600 text-white font-sans font-bold text-sm shadow-warm hover:bg-forest-700 active:scale-95 transition-all duration-200 whitespace-nowrap"
            >
              Request a Demo
            </Link>
          </div>

          {/* ── Hamburger ─────────────────────────────────────── */}
          <button
            className="md:hidden flex flex-col justify-center items-center
                       w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors"
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
                             hover:bg-forest-50 hover:text-forest-700 transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
              <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-3">
                <Link to="/download" className="btn-secondary w-full justify-center">
                  <Download className="w-4 h-4" />
                  Download App
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


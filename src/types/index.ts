// ── TotoAfya Digital — Shared Types ────────────────────────────

export interface Feature {
  id: string
  icon: string          // emoji or SVG component key
  title: string
  description: string
  color: string         // tailwind bg class for icon background
  textColor: string     // tailwind text class for icon
}

export interface Step {
  number: number
  title: string
  description: string
  icon: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  location: string
  avatar: string        // URL
  rating: number        // 1-5
  quote: string
  tag?: string          // e.g. "Mother of 2"
}

export interface Stat {
  value: string
  label: string
  icon: string
}

export interface ContactFormData {
  fullName: string
  email: string
  role: 'mother' | 'nurse' | 'admin' | 'other'
  message: string
}

export interface NavItem {
  label: string
  href: string
  isExternal?: boolean
}

export interface AppDownload {
  platform: string
  url: string
  available: boolean
  label: string
}

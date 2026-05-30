// ── TotoAfya Digital — Root Router ─────────────────────────────
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home          from '@/pages/Home'
import About         from '@/pages/About'
import Contact       from '@/pages/Contact'
import Download      from '@/pages/Download'
import Pricing       from '@/pages/Pricing'
import PrivacyPolicy from '@/pages/PrivacyPolicy'
import TermsOfUse    from '@/pages/TermsOfUse'
import Disclaimer    from '@/pages/Disclaimer'
import Promo         from '@/pages/Promo'
import Navbar        from '@/components/Navbar'
import Footer        from '@/components/Footer'

export default function App() {
  return (
    <BrowserRouter>
      {/* Global nav — rendered on every page */}
      <Navbar />

      <main>
        <Routes>
          <Route path="/"           element={<Home />}     />
          <Route path="/about"      element={<About />}    />
          <Route path="/promo"      element={<Promo />}    />
          <Route path="/contact"    element={<Contact />}  />
          <Route path="/download"   element={<Download />} />
          <Route path="/pricing"    element={<Pricing />}  />
          <Route path="/privacy"    element={<PrivacyPolicy />} />
          <Route path="/terms"      element={<TermsOfUse />}    />
          <Route path="/disclaimer" element={<Disclaimer />}    />
          {/* 404 fallback */}
          <Route path="*"           element={<Home />}     />
        </Routes>
      </main>

      {/* Global footer */}
      <Footer />
    </BrowserRouter>
  )
}

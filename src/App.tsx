// ── TotoAfya Digital — Root Router ─────────────────────────────
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Home          from '@/pages/Home'
import About         from '@/pages/About'
import Contact       from '@/pages/Contact'
import Download      from '@/pages/Download'
import Pricing       from '@/pages/Pricing'
import PrivacyPolicy from '@/pages/PrivacyPolicy'
import TermsOfUse    from '@/pages/TermsOfUse'
import Disclaimer    from '@/pages/Disclaimer'
import Pitch         from '@/pages/Pitch'
import Navbar        from '@/components/Navbar'
import Footer        from '@/components/Footer'

function AppContent() {
  const location = useLocation()
  const isPitchPage = location.pathname === '/pitch'

  return (
    <>
      {/* Conditionally render nav — hidden on pitch deck page */}
      {!isPitchPage && <Navbar />}

      <main>
        <Routes>
          <Route path="/"           element={<Home />}     />
          <Route path="/about"      element={<About />}    />
          <Route path="/contact"    element={<Contact />}  />
          <Route path="/download"   element={<Download />} />
          <Route path="/pricing"    element={<Pricing />}  />
          <Route path="/privacy"    element={<PrivacyPolicy />} />
          <Route path="/terms"      element={<TermsOfUse />}    />
          <Route path="/disclaimer" element={<Disclaimer />}    />
          <Route path="/pitch"      element={<Pitch />}         />
          {/* 404 fallback */}
          <Route path="*"           element={<Home />}     />
        </Routes>
      </main>

      {/* Conditionally render footer — hidden on pitch deck page */}
      {!isPitchPage && <Footer />}
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

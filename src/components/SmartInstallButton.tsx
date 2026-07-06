// ── TotoAfya Digital — Smart Install Button ──────────────────────
// Detects whether the Mother Portal PWA is already installed by
// embedding an invisible iframe that points to the PWA's
// /install-bridge route. The bridge page relays `beforeinstallprompt`
// state back via postMessage.
//
// States:
//   loading              → spinner (waiting for iframe message)
//   installable          → "Install App" button (triggers native prompt)
//   installed_or_unsupported → "Open App" button (external link to PWA)
//
import { useState, useEffect, useRef } from 'react'
import { Globe, ExternalLink, Loader2 } from 'lucide-react'

// ── Constants ─────────────────────────────────────────────────────
const PWA_ORIGIN   = 'https://motherapp.terraseptsolutions.com'
const BRIDGE_URL   = `${PWA_ORIGIN}/install-bridge`
const PWA_URL      = PWA_ORIGIN

type InstallState = 'loading' | 'installable' | 'installed_or_unsupported'

// ── Component ─────────────────────────────────────────────────────
export default function SmartInstallButton() {
  const [installState, setInstallState] = useState<InstallState>('loading')
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    // ── Listen for messages from the install-bridge iframe ────────
    const onMessage = (e: MessageEvent) => {
      if (e.origin !== PWA_ORIGIN) return
      const data = e.data as { totoInstallState?: string }
      if (data?.totoInstallState === 'installable') {
        setInstallState('installable')
      } else if (data?.totoInstallState === 'installed_or_unsupported') {
        setInstallState('installed_or_unsupported')
      }
    }

    window.addEventListener('message', onMessage)

    // ── Safety timeout: if no message after 4 s, fall back gracefully
    const safetyTimeout = setTimeout(() => {
      setInstallState((prev) =>
        prev === 'loading' ? 'installed_or_unsupported' : prev
      )
    }, 4000)

    return () => {
      window.removeEventListener('message', onMessage)
      clearTimeout(safetyTimeout)
    }
  }, [])

  // ── Trigger the native install prompt via the iframe ─────────────
  const handleInstall = () => {
    iframeRef.current?.contentWindow?.postMessage('triggerInstall', PWA_ORIGIN)
    // The iframe will message us back when outcome is known
  }

  // ── Render ────────────────────────────────────────────────────────
  return (
    <>
      {/* Hidden bridge iframe — invisible, no dimensions */}
      <iframe
        ref={iframeRef}
        src={BRIDGE_URL}
        title="PWA install bridge"
        aria-hidden="true"
        tabIndex={-1}
        style={{ display: 'none', width: 0, height: 0, border: 0 }}
        // sandbox allows scripts but same-origin messaging
        sandbox="allow-scripts allow-same-origin"
      />

      {/* ── Install state: loading ──────────────────────────── */}
      {installState === 'loading' && (
        <button
          disabled
          aria-label="Checking install status…"
          className="flex items-center gap-4 px-6 py-3.5 rounded-xl bg-forest-600/60 text-white/70 cursor-not-allowed group text-left"
        >
          <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center">
            <Loader2 className="w-6 h-6 animate-spin stroke-[2]" />
          </div>
          <div className="leading-tight">
            <div className="font-sans text-[10px] text-forest-200 font-bold uppercase tracking-wider">
              Checking…
            </div>
            <div className="font-sans font-bold text-base mt-0.5">Web App (PWA)</div>
          </div>
        </button>
      )}

      {/* ── Install state: installable ──────────────────────── */}
      {installState === 'installable' && (
        <button
          id="pwa-install-btn"
          onClick={handleInstall}
          aria-label="Install TotoAfya as a Progressive Web App"
          className="flex items-center gap-4 px-6 py-3.5 rounded-xl bg-forest-600 text-white hover:bg-forest-700 shadow-warm active:scale-95 transition-all duration-200 group text-left"
        >
          <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center text-white">
            <Globe className="w-7 h-7 stroke-[2]" />
          </div>
          <div className="leading-tight">
            <div className="font-sans text-[10px] text-forest-200 font-bold uppercase tracking-wider">
              Add to Home Screen
            </div>
            <div className="font-sans font-bold text-base mt-0.5">Install App</div>
          </div>
        </button>
      )}

      {/* ── Install state: already installed / unsupported ─── */}
      {installState === 'installed_or_unsupported' && (
        <a
          id="pwa-open-btn"
          href={PWA_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open TotoAfya Mother Portal"
          className="flex items-center gap-4 px-6 py-3.5 rounded-xl bg-forest-600 text-white hover:bg-forest-700 shadow-warm active:scale-95 transition-all duration-200 group text-left"
        >
          <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center text-white">
            <ExternalLink className="w-7 h-7 stroke-[2]" />
          </div>
          <div className="leading-tight">
            <div className="font-sans text-[10px] text-forest-200 font-bold uppercase tracking-wider">
              Open Mother Portal
            </div>
            <div className="font-sans font-bold text-base mt-0.5">Launch App</div>
          </div>
        </a>
      )}
    </>
  )
}

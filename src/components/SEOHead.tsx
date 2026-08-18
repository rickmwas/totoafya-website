// ── Dynamic SEO Head Component for TotoAfya Digital ────────────────
import { useEffect } from 'react'
import { SITE_CONFIG } from '@/lib/seoConfig'

export interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string[] | string
  canonicalPath?: string
  ogType?: string
  ogImage?: string
  noindex?: boolean
  jsonLd?: object | object[]
}

function updateMetaTag(attributeName: string, attributeValue: string, content: string) {
  let element = document.querySelector(`meta[${attributeName}="${attributeValue}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attributeName, attributeValue)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

function updateLinkTag(rel: string, href: string) {
  let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null
  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', rel)
    document.head.appendChild(element)
  }
  element.setAttribute('href', href)
}

export default function SEOHead({
  title,
  description = SITE_CONFIG.defaultDescription,
  keywords = SITE_CONFIG.defaultKeywords,
  canonicalPath = '',
  ogType = 'website',
  ogImage = SITE_CONFIG.defaultOgImage,
  noindex = false,
  jsonLd,
}: SEOHeadProps) {
  const fullTitle = title
    ? `${title} | ${SITE_CONFIG.siteName}`
    : SITE_CONFIG.defaultTitle

  const fullCanonicalUrl = canonicalPath.startsWith('http')
    ? canonicalPath
    : `${SITE_CONFIG.siteUrl}${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}`

  const keywordsString = Array.isArray(keywords) ? keywords.join(', ') : keywords

  useEffect(() => {
    // 1. Document Title
    document.title = fullTitle

    // 2. Primary Meta Tags
    updateMetaTag('name', 'description', description)
    updateMetaTag('name', 'keywords', keywordsString)
    updateMetaTag('name', 'author', SITE_CONFIG.companyLegalName)
    updateMetaTag('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow')

    // 3. Canonical URL Link
    updateLinkTag('canonical', fullCanonicalUrl)

    // 4. Open Graph Tags
    updateMetaTag('property', 'og:title', fullTitle)
    updateMetaTag('property', 'og:description', description)
    updateMetaTag('property', 'og:type', ogType)
    updateMetaTag('property', 'og:url', fullCanonicalUrl)
    updateMetaTag('property', 'og:image', ogImage)
    updateMetaTag('property', 'og:site_name', SITE_CONFIG.siteName)
    updateMetaTag('property', 'og:locale', SITE_CONFIG.locale)

    // 5. Twitter Card Meta Tags
    updateMetaTag('name', 'twitter:card', 'summary_large_image')
    updateMetaTag('name', 'twitter:site', SITE_CONFIG.twitterHandle)
    updateMetaTag('name', 'twitter:title', fullTitle)
    updateMetaTag('name', 'twitter:description', description)
    updateMetaTag('name', 'twitter:image', ogImage)

    // 6. JSON-LD Structured Data Injection
    const existingScript = document.getElementById('json-ld-schema')
    if (existingScript) {
      existingScript.remove()
    }

    if (jsonLd) {
      const script = document.createElement('script')
      script.id = 'json-ld-schema'
      script.type = 'application/ld+json'
      script.text = JSON.stringify(jsonLd)
      document.head.appendChild(script)
    }

    return () => {
      // Cleanup dynamically injected JSON-LD script when component unmounts
      const script = document.getElementById('json-ld-schema')
      if (script) {
        script.remove()
      }
    }
  }, [fullTitle, description, keywordsString, fullCanonicalUrl, ogType, ogImage, noindex, jsonLd])

  return null
}

import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Script from 'next/script'
import { useTheme } from 'next-themes'

const Logo = () => {
  const { theme } = useTheme()
  
  return (
    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5em' }}>
      <img 
        src={theme === 'dark' ? '/Ruby-white.png' : '/Ruby.png'} 
        alt="Ruby logo" 
        width="100px" 
        style={{ display: 'inline-block', verticalAlign: 'middle' }} 
      />
      <span>AI Glossary</span>
    </span>
  )
}

const config: DocsThemeConfig = {
  logo: <Logo />,
  project: {
    link: 'https://github.com/rubychilds/ai-glossary',
  },
  chat: {
    link: 'https://www.linkedin.com/in/rubychilds1',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    )
  },
  docsRepositoryBase: 'https://github.com/rubychilds/ai-glossary/tree/main',
  footer: {
    text: 'AI Glossary © 2025 by Ruby Childs',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Ruby: AI Glossary'
    }
  },
  head: (
    <>
      <title>Ruby: AI Glossary</title>
      <meta name="viewport" content="width=device-width, 
  initial-scale=1" />
      <meta property="og:title" content="Ruby: AI Glossary" />
      <meta property="og:description" content="A comprehensive glossary of AI terms, concepts, and technologies designed to help everyone understand and navigate the world of artificial intelligence. Clear, accessible definitions without sacrificing accuracy." />
      <meta property="og:image" content="/opengraph-ai-glossary.png" />
      <meta property="og:type" content="website" />
      <meta name="author" content="Ruby Childs" />
      <meta name="publish_date" content="2025-01-08" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="/opengraph-ai-glossary.png" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="msapplication-TileImage" 
  content="/mstile-150x150.png" />
      <link rel="icon" type="image/x-icon" 
  href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Libre+Franklin:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      <style dangerouslySetInnerHTML={{
        __html: `
          :root {
            --nextra-primary-hue: 189;
            --nextra-primary-saturation: 96%;
            --nextra-primary-lightness: 64%;
          }
          /* Font Face Declarations */
          @font-face {
            font-family: 'GT Flexa Standard';
            src: url('/GT-Flexa-Standard-Regular.bf7ad42b.otf') format('opentype');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: 'GT Flexa Standard';
            src: url('/GT-Flexa-Standard-Bold.1.otf') format('opentype');
            font-weight: bold;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: 'GT Flexa Standard';
            src: url('/GT-Flexa-Standard-Black.1.otf') format('opentype');
            font-weight: 900;
            font-style: normal;
            font-display: swap;
          }
          /* Font family */
          body, html {
            font-family: 'Libre Franklin', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          }
          /* All headings use GT Flexa Standard */
          h1, h2, h3, h4, h5, h6 {
            font-family: 'GT Flexa Standard', 'Libre Franklin', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          }
          /* Button and interactive element styling */
          .nx-bg-primary-600,
          .nx-bg-blue-600,
          button:focus,
          button:hover,
          .nx-border-primary-500:hover,
          .nx-border-blue-500:hover {
            background-color: #44DCFD !important;
          }
          /* Active/pressed states */
          button:active,
          .nx-bg-primary-700,
          .nx-bg-blue-700 {
            background-color: #3BC5E8 !important;
          }
          /* Highlight and selection colors */
          ::selection {
            background-color: #44DCFD40 !important;
          }
          .nx-border-primary-500,
          .nx-border-blue-500 {
            border-color: #44DCFD !important;
          }
        `
      }} />
      <script async src={`https://www.googletagmanager.com/gtag/js?id=G-HYYDYDV6Z3`} />
      <script dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-HYYDYDV6Z3');
        `
      }} />
      
    </>
  )
}
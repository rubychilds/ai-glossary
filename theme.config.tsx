import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Script from 'next/script'

const config: DocsThemeConfig = {
  logo: (
    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5em' }}>
      <img src="/Ruby.png" alt="Ruby logo" width="100px" style={{ display: 'inline-block', verticalAlign: 'middle' }} />
      <span>AI Glossary</span>
    </span>
  ),
  project: {
    link: 'https://github.com/rubychilds/ai-glossary',
  },
  docsRepositoryBase: 'https://github.com/rubychilds/ai-glossary',
  footer: {
    text: 'AI Glossary',
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, 
  initial-scale=1" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="msapplication-TileImage" 
  content="/mstile-150x150.png" />
      <link rel="icon" type="image/x-icon" 
  href="/favicon.ico" />
      <script async src={`https://www.googletagmanager.com/gtag
  /js?id=${process.env.GOOGLE_ANALYTICS_ID}`} />
      <script dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.GOOGLE_ANALYTICS_ID}');
        `
      }} />
    </>
  )
}

export default config

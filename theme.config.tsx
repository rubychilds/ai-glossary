import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

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
}

export default config

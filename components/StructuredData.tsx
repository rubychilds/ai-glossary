import { FC } from 'react'
import Head from 'next/head'

interface StructuredDataProps {
  title: string
  description: string
  url: string
  datePublished?: string
  dateModified?: string
}

const StructuredData: FC<StructuredDataProps> = ({
  title,
  description,
  url,
  datePublished = '2025-01-08',
  dateModified = new Date().toISOString().split('T')[0],
}) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    name: title,
    description: description,
    url: url,
    inDefinedTermSet: {
      '@type': 'DefinedTermSet',
      name: 'Ruby: AI Glossary',
      description: 'A comprehensive glossary of AI terms, concepts, and technologies',
      url: 'https://ai-glossary.com',
      publisher: {
        '@type': 'Person',
        name: 'Ruby Childs',
        url: 'https://ai-glossary.com',
        sameAs: ['https://www.linkedin.com/in/rubychilds1']
      }
    },
    datePublished: datePublished,
    dateModified: dateModified,
    author: {
      '@type': 'Person',
      name: 'Ruby Childs',
      url: 'https://ai-glossary.com',
      sameAs: ['https://www.linkedin.com/in/rubychilds1']
    },
    license: 'GPL-3.0',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Ruby: AI Glossary',
      url: 'https://ai-glossary.com',
      description: 'A comprehensive glossary of AI terms, concepts, and technologies designed to help everyone understand and navigate the world of artificial intelligence.',
      publisher: {
        '@type': 'Person',
        name: 'Ruby Childs'
      }
    }
  }

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData, null, 2)
        }}
      />
    </Head>
  )
}

export default StructuredData
import { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

const SITE_URL = 'https://ai-glossary.com'

function getAllPages(): string[] {
  const pagesDir = path.join(process.cwd(), 'pages')
  const pages: string[] = []
  
  function scanDirectory(dir: string, basePath: string = '') {
    const entries = fs.readdirSync(dir, { withFileTypes: true })
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name)
      
      if (entry.isDirectory() && !entry.name.startsWith('_') && entry.name !== 'api') {
        scanDirectory(fullPath, path.join(basePath, entry.name))
      } else if (entry.isFile() && (entry.name.endsWith('.md') || entry.name.endsWith('.mdx'))) {
        const pagePath = path.join(basePath, entry.name.replace(/\.(md|mdx)$/, ''))
        pages.push(pagePath)
      }
    }
  }
  
  scanDirectory(pagesDir)
  return pages
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const pages = getAllPages()
  const currentDate = new Date().toISOString()
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE_URL}</loc>
    <lastmod>${currentDate}</lastmod>
    <priority>1.0</priority>
    <changefreq>daily</changefreq>
  </url>
  ${pages
    .map(page => {
      const url = page === 'index' ? '' : `/${page}`
      return `<url>
    <loc>${SITE_URL}${url}</loc>
    <lastmod>${currentDate}</lastmod>
    <priority>0.8</priority>
    <changefreq>weekly</changefreq>
  </url>`
    })
    .join('\n  ')}
</urlset>`

  res.setHeader('Content-Type', 'application/xml')
  res.write(sitemap)
  res.end()
}
export function extractMetaDescription(content: string): string {
  // Remove markdown headers and get the first paragraph
  const lines = content.split('\n')
  
  // Find the first non-empty line after the title that's not a header
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim()
    
    // Skip empty lines and headers
    if (!line || line.startsWith('#')) continue
    
    // Clean up the line - remove markdown formatting
    const cleanLine = line
      .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold
      .replace(/\*(.*?)\*/g, '$1') // Remove italic
      .replace(/`(.*?)`/g, '$1') // Remove code
      .replace(/\[(.*?)\]\(.*?\)/g, '$1') // Remove links
      .trim()
    
    // If it's a substantial description (more than 20 chars), use it
    if (cleanLine.length > 20) {
      // Truncate to ~160 characters for SEO
      return cleanLine.length > 160 
        ? cleanLine.substring(0, 157) + '...' 
        : cleanLine
    }
  }
  
  return 'Learn about this AI concept in our comprehensive glossary.'
}

export function getPageUrl(path: string): string {
  const baseUrl = 'https://ai-glossary.com'
  return `${baseUrl}${path}`
}
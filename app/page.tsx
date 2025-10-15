// app/page.tsx
import { client} from '@/sanity/client'
import ClientApp from '@/components/ClientApp'
import { aboutQuery, portfolioQuery, resumeQuery } from '@/sanity/queries'

// Force revalidation on every request (no caching)
export const revalidate = 0
export const dynamic = 'force-dynamic'

export default async function HomePage() {

  // Fetch data from Sanity
  const aboutData = await client.fetch(aboutQuery)
  const portfolioData = await client.fetch(portfolioQuery)
  const resumeData = await client.fetch(resumeQuery)

  const initialData = {
    about: aboutData,
    portfolio: portfolioData,
    resume: resumeData,
  }

  return <ClientApp initialData={initialData} />
}
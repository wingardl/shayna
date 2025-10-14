// app/page.tsx
import { client } from '@/sanity/client'
import { draftMode } from 'next/headers'
import ClientApp from '@/components/ClientApp'
import { aboutQuery, portfolioQuery, resumeQuery } from '@/sanity/queries'

export default async function HomePage() {
  // Fetch data from Sanity
  const aboutData = await client.fetch(aboutQuery)
  const portfolioData = await client.fetch(portfolioQuery)
  const resumeData = await client.fetch(resumeQuery)

  // Structure it like MOCK_DATA
  const initialData = {
    about: aboutData,
    portfolio: portfolioData,
    resume: resumeData,
  }

  // Pass both initial data AND queries to the client component
  return <ClientApp initialData={initialData} />
}
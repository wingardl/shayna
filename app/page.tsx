// app/page.tsx
import { client, draftClient } from '@/sanity/client'
import { draftMode } from 'next/headers'
import ClientApp from '@/components/ClientApp'
import { aboutQuery, portfolioQuery, resumeQuery } from '@/sanity/queries'

export default async function HomePage() {
  const { isEnabled } = await draftMode()
  const sanityClient = isEnabled ? draftClient : client

  // Fetch data from Sanity
  const aboutData = await sanityClient.fetch(aboutQuery)
  const portfolioData = await sanityClient.fetch(portfolioQuery)
  const resumeData = await sanityClient.fetch(resumeQuery)

  const initialData = {
    about: aboutData,
    portfolio: portfolioData,
    resume: resumeData,
  }

  return <ClientApp initialData={initialData} />
}
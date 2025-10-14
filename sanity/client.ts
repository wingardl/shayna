// sanity/client.ts
import { createClient } from 'next-sanity'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION!

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,  // Changed from true to false
  perspective: 'published',
  stega: {
    enabled: true,  // Changed from false to true
    studioUrl: 'https://shayna.sanity.studio',
  },
})
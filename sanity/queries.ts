// sanity/queries.ts
import { groq } from 'next-sanity'

export const aboutQuery = groq`*[_type == "about"][0]{..., "imageUrl": image.asset->url}`
export const portfolioQuery = groq`*[_type == "project"]{..., "imageUrl": image.asset->url}`
export const resumeQuery = groq`*[_type == "resume"][0]{"pdfUrl": pdfFile.asset->url}`
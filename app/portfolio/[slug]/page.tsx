// app/portfolio/[slug]/page.tsx
import { client } from '@/sanity/client'
import { groq } from 'next-sanity'
import { notFound } from 'next/navigation'
import { PortableText } from '@portabletext/react'
import Link from 'next/link'

const projectQuery = groq`*[_type == "project" && slug.current == $slug][0]{
  title,
  category,
  "imageUrl": image.asset->url,
  content,
  excerpt
}`

export default async function ProjectPage({ 
  params 
}: { 
  params: { slug: string } 
}) {
  const project = await client.fetch(projectQuery, { slug: params.slug })

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[#F0EFEB]">
      <div className="w-full max-w-4xl mx-auto p-8 md:p-12">
        <Link 
          href="/" 
          className="text-[#588157] hover:text-[#3A5A40] mb-6 inline-block"
        >
          ← Back to Home
        </Link>
        
        <article className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md overflow-hidden p-8 md:p-12">
          <p className="text-sm text-[#847765] font-semibold mb-2">
            {project.category}
          </p>
          <h1 className="text-4xl md:text-5xl font-serif text-slate-800 mb-6">
            {project.title}
          </h1>
          
          {project.imageUrl && (
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="w-full h-96 object-cover rounded-lg mb-8"
            />
          )}
          
          <div className="prose prose-lg max-w-none">
            {project.content && <PortableText value={project.content} />}
          </div>
        </article>
      </div>
    </div>
  )
}
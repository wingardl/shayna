// COMPONENTS
function AboutPage({ content }) {
  return (
    <div className="w-full max-w-5xl mx-auto p-8 md:p-12">
      <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center">
        <div className="md:col-span-1">
          <img 
            src={content.imageUrl} 
            alt={content.name}
            className="rounded-lg shadow-lg w-full h-auto object-cover aspect-[3/4] border-4 border-white transform -rotate-2 hover:rotate-1 transition-transform duration-300"
          />
        </div>
        <div className="md:col-span-2">
          <h1 className="text-4xl md:text-5xl font-serif text-slate-800 mb-2">{content.name}</h1>
          <p className="text-xl text-[#847765] font-semibold mb-6">{content.title}</p>
          <div className="prose prose-lg text-slate-700 max-w-none">
            <p>{content.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutPage;
function PortfolioCard({ project }) {
    return (
        <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
            <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover"/>
            <div className="p-6">
                <p className="text-sm text-[#847765] font-semibold mb-1">{project.category}</p>
                <h3 className="text-2xl font-serif text-slate-800 mb-3">{project.title}</h3>
                <p className="text-slate-600 mb-4">{project.excerpt}</p>
                <a href={project.link} className="font-semibold text-[#588157] hover:text-[#3A5A40] transition-colors group-hover:underline">
                    Read More &rarr;
                </a>
            </div>
        </div>
    );
}
export default PortfolioCard;
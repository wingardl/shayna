import PortfolioCard from "./PortfolioCard";

function PortfolioPage({ projects }) {
  return (
    <div className="w-full max-w-6xl mx-auto p-8 md:p-12">
      <h1 className="text-5xl font-serif text-slate-800 text-center mb-4">Portfolio</h1>
      <p className="text-lg text-slate-600 text-center max-w-2xl mx-auto mb-12">
        A collection of projects and collaborations that showcase my passion for building stronger, healthier communities through food and gardening.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-10">
        {/* In a real Next.js app, you would fetch this data from Sanity and map over it */}
        {projects.map((project) => (
          <PortfolioCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
export default PortfolioPage;
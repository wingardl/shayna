import { ArrowDown } from "lucide-react";

function ResumePage({ resume }) {
  return (
    <div className="w-full max-w-5xl mx-auto p-8 md:p-12 flex flex-col items-center">
      <h1 className="text-5xl font-serif text-slate-800 mb-4">Resume</h1>
      <p className="text-lg text-slate-600 mb-8">
        Here is my professional experience. You can download it below.
      </p>
      <a 
        href={resume.pdfUrl} 
        download
        className="mb-8 inline-flex items-center gap-2 bg-[#588157] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-[#3A5A40] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#588157]"
      >
        <ArrowDown size={20}/>
        Download PDF
      </a>
      <div className="w-full h-[80vh] bg-white rounded-lg shadow-2xl overflow-hidden border">
        <iframe
          src={resume.pdfUrl}
          title="Shayna Leibowitz Resume"
          className="w-full h-full"
          frameBorder="0"
        >
        </iframe>
      </div>
    </div>
  );
}
export default ResumePage;
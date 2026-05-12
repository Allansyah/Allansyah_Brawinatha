import { PROJECTS } from '../constants';
import SectionWrapper from './SectionWrapper';
import { ExternalLink, Share2, TrendingUp } from 'lucide-react';
import { useTiltCard } from "./Uienhancements"; // ✅ FIX 1: casing benar (UI bukan Ui)
// ✅ FIX 3: hapus useState — tidak dipakai

// ✅ FIX 2: projectColors didefinisikan — sebelumnya hilang
const projectColors = [
  'from-[#4285f4] to-[#1a73e8]',
  'from-[#ea4335] to-[#c5221f]',
  'from-[#34a853] to-[#1e8e3e]',
  'from-[#fbbc05] to-[#f29900]',
  'from-[#a142f4] to-[#8ab4f8]',
];

// ✅ FIX 4: tambah type annotation
function ProjectItem({ project, colorIndex }: { project: any; colorIndex: number }) {
  const cardRef = useTiltCard(6);

  return (
    <div
      ref={cardRef}
      className="tilt-card flex flex-col md:flex-row gap-6 group py-4 transition-all hover:bg-gray-50/50 rounded-xl px-2 -mx-2"
    >
      {/* Project Thumbnail */}
      <div className="md:w-32 lg:w-48 h-32 md:h-40 shrink-0 rounded-xl overflow-hidden shadow-sm relative group-hover:shadow-md transition-all border border-[#dfe1e5]">
        <div className={`absolute inset-0 bg-gradient-to-br ${projectColors[colorIndex % projectColors.length]} opacity-90`} />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white">
          <div className="text-[10px] font-bold uppercase tracking-widest opacity-80 mb-2">Case Study</div>
          <div className="w-12 h-12 border-2 border-white/40 rounded-lg flex items-center justify-center bg-white/10 backdrop-blur-sm group-hover:scale-110 transition-transform">
            <span className="text-xl font-bold">{project.title.charAt(0)}</span>
          </div>
        </div>
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <a
            href={project.links.demo}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 bg-white text-black text-[12px] font-bold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform flex items-center gap-2"
          >
            Live Preview <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start mb-2">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[#f1f3f4] flex items-center justify-center text-[#4285f4] font-bold text-[10px] shrink-0">
              {project.title.charAt(0)}
            </div>
            <div className="flex items-center gap-1.5 text-[12px] text-[#70757a]">
              <span className="font-medium text-[#202124]">{project.category}</span>
              <span>›</span>
              <span className="truncate">{project.title.toLowerCase().split(' ')[0]}</span>
            </div>
          </div>
          <a href={project.links.demo} target="_blank" rel="noreferrer" className="text-[#70757a] hover:text-[#1a73e8] transition-colors">
            <Share2 className="w-4 h-4" />
          </a>
        </div>

        <a href={project.links.demo} target="_blank" rel="noreferrer" className="block mb-2 group/title">
          <h3 className="text-[18px] md:text-[22px] text-[#1a0dab] font-medium group-hover/title:underline leading-tight">
            {project.title}
          </h3>
        </a>

        <p className="text-[14px] md:text-[15px] text-[#4d5156] leading-[1.58] mb-4">
          {project.description}
        </p>

        {project.features && (
          <div className="bg-gray-50 rounded-lg p-4 mb-4 border border-[#f1f3f4] group-hover:border-[#d2e3fc] transition-colors">
            <div className="flex items-center gap-2 mb-3 text-[13px] font-bold text-[#202124] uppercase tracking-wider">
              <TrendingUp className="w-4 h-4 text-[#34a853]" />
              Business Impact & Results
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
              {project.features.map((feature: string, i: number) => (
                <li key={i} className="text-[13px] text-[#5b5e62] flex items-start gap-2">
                  <span className="text-[#34a853] mt-0.5 shrink-0">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech: string) => (
              <span
                key={tech}
                className="px-3 py-1 bg-white rounded-full border border-[#dfe1e5] text-[11px] font-medium text-[#5f6368] hover:border-[#1a73e8] hover:text-[#1a73e8] transition-all cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
          <a
            href={project.links.demo}
            target="_blank"
            rel="noreferrer"
            className="hidden md:flex items-center gap-1.5 text-[13px] font-bold text-[#1a73e8] hover:underline uppercase tracking-tight group-hover:translate-x-1 transition-transform"
          >
            Case Study <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function PortfolioSection() {
  return (
    <SectionWrapper id="portfolio">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-8 h-8 rounded-full bg-[#fbbc05] flex items-center justify-center text-white font-bold text-sm">
          P
        </div>
        <div className="flex flex-col">
          <span className="text-[12px] text-[#202124] leading-none mb-0.5">allansyah.dev</span>
          <span className="text-[12px] text-[#70757a] leading-none">allansyah.dev › portfolio</span>
        </div>
      </div>
      <h2 className="text-[20px] text-[#1a0dab] font-normal mb-6 leading-tight">
        Portfolio — Featured Projects
      </h2>

      <div className="space-y-8">
        {PROJECTS.map((project, idx) => (
          <ProjectItem key={idx} project={project} colorIndex={idx} />
        ))}
      </div>
    </SectionWrapper>
  );
}
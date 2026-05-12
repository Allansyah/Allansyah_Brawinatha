import { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { EXPERIENCES, SKILLS, CERTIFICATES } from "../constants";
import {
  ChevronDown,
  ChevronUp,
  Star,
  CheckCircle2,
  Info,
  Briefcase,
  Award,
  // ✅ FIX: hapus ExternalLink — diimport tapi tidak dipakai
  MessageSquare,
  Lightbulb,
  Palette,
  Code2,
  Server,
  ShieldCheck,
  Rocket,
  Wrench,
} from "lucide-react";

const PHILOSOPHY_PARAGRAPHS = [
  "Di era perkembangan teknologi yang semakin cepat, bisnis dituntut untuk mampu beradaptasi agar tetap kompetitif dan berkembang. Karena itu, pemilihan solusi digital yang tepat menjadi faktor penting dalam meningkatkan efisiensi, produktivitas, dan kemudahan operasional bisnis.",
  "Berawal dari ketertarikan terhadap dunia teknologi sejak lebih dari 3 tahun terakhir, saya terus mengembangkan kemampuan di bidang pengembangan web dan mobile modern. Selain aktif menempuh pendidikan di bidang Teknik Informatika, saya juga membuka layanan pengembangan solusi digital yang berfokus pada kebutuhan bisnis, khususnya UMKM dan perusahaan yang ingin berkembang melalui teknologi.",
  "Dengan pengalaman mengerjakan berbagai proyek, mengikuti pelatihan dan sertifikasi, serta terlibat langsung dalam pengembangan sistem digital, saya berkomitmen menghadirkan solusi IT yang modern, fungsional, dan mudah digunakan. Bagi saya, teknologi bukan hanya tentang membangun aplikasi, tetapi tentang menciptakan solusi yang benar-benar membantu bisnis bertumbuh dan mempermudah aktivitas penggunanya.",
  "Setiap proyek dikembangkan melalui proses yang terstruktur, mulai dari konsultasi ide, perancangan desain, pengembangan sistem, hingga tahap deployment dan maintenance. Dengan pendekatan yang kolaboratif dan berorientasi pada kebutuhan klien, saya berusaha memastikan setiap solusi yang dibangun dapat memberikan pengalaman terbaik dan dampak yang nyata.",
];

const WORKFLOW_STEPS = [
  { num: "01", title: "Konsultasi & Analisis", desc: "Anda dapat menceritakan ide, kebutuhan, ataupun permasalahan bisnis yang ingin diselesaikan. Saya akan membantu menganalisis serta menyusun solusi digital yang sesuai.", icon: MessageSquare, color: "#4285f4" },
  { num: "02", title: "Perencanaan & Penawaran", desc: "Menyusun estimasi biaya, timeline pengerjaan, roadmap pengembangan, serta ruang lingkup proyek secara jelas dan transparan.", icon: Lightbulb, color: "#ea4335" },
  { num: "03", title: "UI/UX Design", desc: "Perancangan tampilan dengan fokus pada kenyamanan pengguna, desain modern, dan pengalaman penggunaan yang optimal.", icon: Palette, color: "#fbbc05" },
  { num: "04", title: "Frontend Development", desc: "Desain dikembangkan menjadi tampilan interaktif, responsif, dan dapat diakses melalui browser maupun perangkat mobile.", icon: Code2, color: "#34a853" },
  { num: "05", title: "Backend Development", desc: "Integrasi sistem dengan database, server, dan berbagai fitur utama agar aplikasi berjalan optimal sesuai kebutuhan.", icon: Server, color: "#4285f4" },
  { num: "06", title: "QA & Testing", desc: "Setiap fitur diuji secara detail untuk memastikan performa, stabilitas, dan fungsionalitas sebelum digunakan pengguna akhir.", icon: ShieldCheck, color: "#ea4335" },
  { num: "07", title: "Deployment & Launch", desc: "Aplikasi dipublikasikan ke server production, Play Store, atau App Store sesuai kebutuhan termasuk konfigurasi dan pelatihan.", icon: Rocket, color: "#fbbc05" },
  { num: "08", title: "Maintenance & Support", desc: "Dukungan maintenance, monitoring, serta pengembangan fitur lanjutan agar sistem tetap optimal mengikuti kebutuhan bisnis.", icon: Wrench, color: "#34a853" },
];

export function AboutSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  const previewText =
    "Di era perkembangan teknologi yang semakin cepat, bisnis dituntut untuk mampu beradaptasi agar tetap kompetitif dan berkembang. Karena itu, pemilihan solusi digital yang tepat menjadi faktor penting dalam meningkatkan efisiensi, produktivitas, dan kemudahan operasional bisnis...";

  return (
    <SectionWrapper id="about">
      {/*
        ✅ FIX: gradient-border + overflow-hidden konflik.
        - overflow-hidden memotong ::before pseudo-element dari gradient-border
        - Solusi: hapus overflow-hidden, ganti dengan isolate agar z-index tetap benar
        - Efek glow di pojok kanan atas tetap bisa pakai filter blur tanpa overflow-hidden
      */}
      <div className="gradient-border bg-[#f0f4f9] rounded-2xl p-6 mb-8 border border-transparent relative isolate group">
        {/* Glow pojok kanan atas — pakai clip manual bukan overflow-hidden */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-blue-500/10 transition-colors -z-10" />

        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#4285f4] via-[#ea4335] to-[#fbbc05] p-0.5 shadow-sm">
            <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
              <Star className="w-4 h-4 text-[#4285f4] fill-current" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-[14px] font-bold text-[#202124] leading-none mb-0.5">
              AI Insights & Overview
            </span>
            <span className="text-[10px] text-[#70757a] uppercase tracking-widest font-bold">
              Generated from verified datasets
            </span>
          </div>
        </div>

        <div className="space-y-5">
          <div className="text-[16px] text-[#202124] leading-[1.6]">
            <p className="mb-4">
              <span className="font-bold text-[#1a73e8]">Allansyah Brawinatha</span>{" "}
              Saya adalah mahasiswa Teknik Informatika yang berfokus pada pengembangan web dan
              mobile modern. Memiliki pengalaman dalam membangun berbagai proyek fullstack dan
              membantu bisnis berkembang melalui solusi digital yang fungsional, efisien, dan
              mudah digunakan. Dengan pendekatan problem solving, user experience, dan teknologi
              modern, saya percaya bahwa teknologi bukan hanya tentang membangun aplikasi, tetapi
              juga tentang menciptakan solusi yang memberikan dampak nyata dan mempermudah banyak orang.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[14px]">
              <div className="flex items-center gap-2 p-2 rounded-lg bg-white/50 border border-gray-100">
                <CheckCircle2 className="w-4 h-4 text-[#34a853]" />
                <span>Keahlian di Laravel, Next.js, & Flutter</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-white/50 border border-gray-100">
                <CheckCircle2 className="w-4 h-4 text-[#34a853]" />
                <span>Fokus pada Skalabilitas & Keamanan</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {["System Architect", "Full-stack Developer", "Performance Optimizer", "Product Minded"].map((chip) => (
              <div
                key={chip}
                className="px-3 py-1.5 bg-white border border-[#dadce0] rounded-full text-[12px] text-[#3c4043] font-bold shadow-sm hover:border-[#1a73e8] transition-colors"
              >
                {chip}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-[#dadce0] flex justify-between items-center text-[12px] text-[#5f6368]">
          <div className="flex items-center gap-1.5">
            <Info className="w-4 h-4" />
            <span>Dirangkum secara profesional dari allansyah.dev</span>
          </div>
          <ChevronDown className="w-4 h-4 cursor-pointer hover:text-[#1a73e8]" />
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="flex flex-col gap-1 px-2">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-7 h-7 rounded-full bg-[#4285f4] flex items-center justify-center text-white font-bold text-[13px] shadow-sm">
            A
          </div>
          <div className="flex flex-col">
            <span className="text-[12px] text-[#202124] leading-none mb-0.5">allansyah.dev</span>
            <span className="text-[12px] text-[#70757a] leading-none">allansyah.dev › philosophy</span>
          </div>
        </div>

        <h2 className="text-[20px] md:text-[22px] text-[#1a0dab] font-medium mb-3 leading-tight hover:underline cursor-pointer decoration-2 underline-offset-4">
          Building Impactful Digital Solutions — Allansyah Brawinatha
        </h2>

        {!isExpanded && (
          <div className="text-[15px] text-[#4d5156] leading-[1.62] max-w-3xl">
            <span className="italic">"{previewText}"</span>
            <button
              onClick={() => setIsExpanded(true)}
              className="ml-2 text-[#1a0dab] font-bold hover:underline inline-flex items-center gap-0.5"
            >
              Selengkapnya
            </button>
          </div>
        )}

        {isExpanded && (
          <div className="max-w-3xl">
            <div className="space-y-4 mb-8">
              {PHILOSOPHY_PARAGRAPHS.map((para, idx) => (
                <p key={idx} className="text-[15px] text-[#4d5156] leading-[1.62]">{para}</p>
              ))}
            </div>

            <div className="flex items-center gap-4 my-8">
              <div className="flex-1 h-px bg-[#dadce0]" />
              <span className="text-[12px] font-bold text-[#70757a] uppercase tracking-widest whitespace-nowrap">
                Alur Pengembangan Project
              </span>
              <div className="flex-1 h-px bg-[#dadce0]" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {WORKFLOW_STEPS.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div
                    key={idx}
                    className="group/step relative bg-white rounded-xl border border-[#dfe1e5] p-4 hover:shadow-md hover:border-[#dadce0] transition-all duration-200"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-bold tracking-wider opacity-40" style={{ color: step.color }}>
                        STEP {step.num}
                      </span>
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center transition-transform group-hover/step:scale-110"
                        style={{ backgroundColor: step.color + "12", color: step.color }}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>
                    <h4 className="text-[14px] font-bold text-[#202124] mb-2 leading-snug group-hover/step:text-[#1a73e8] transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-[13px] text-[#70757a] leading-[1.55]">{step.desc}</p>
                    <div
                      className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full opacity-0 group-hover/step:opacity-100 transition-opacity"
                      style={{ backgroundColor: step.color }}
                    />
                  </div>
                );
              })}
            </div>

            <div className="sm:hidden flex items-center justify-center gap-2 mb-6 text-[11px] text-[#70757a]">
              <div className="flex-1 h-px bg-[#dadce0]" />
              <span>8 langkah terstruktur</span>
              <div className="flex-1 h-px bg-[#dadce0]" />
            </div>

            <button
              onClick={() => setIsExpanded(false)}
              className="text-[#1a0dab] font-bold hover:underline inline-flex items-center gap-1 text-[14px]"
            >
              <ChevronUp className="w-4 h-4" />
              Tampilkan lebih sedikit
            </button>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}

function ExperienceItem({ exp, isLast }: { exp: any; isLast: boolean }) {
  return (
    <div className={`relative pl-8 ${!isLast ? "border-l-2 border-[#f1f3f4] pb-10" : "border-l-2 border-transparent"}`}>
      <div className={`absolute left-[-11px] top-1.5 w-[20px] h-[20px] rounded-full ring-4 ring-white flex items-center justify-center shadow-sm ${exp.period.includes("Present") ? "bg-[#34a853]" : "bg-[#dadce0]"}`}>
        {exp.period.includes("Present") && <CheckCircle2 className="w-3 h-3 text-white" />}
      </div>

      <div className="group/item">
        <div className="flex flex-col mb-4">
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2 py-0.5 bg-gray-100 rounded text-[11px] font-bold text-[#5f6368] transition-colors group-hover/item:text-[#1a73e8]">
              {exp.period}
            </span>
          </div>
          <div className="flex flex-wrap items-baseline gap-2 mb-1">
            <h3 className="text-[18px] md:text-[20px] font-bold text-[#202124] group-hover/item:text-[#1a73e8] transition-colors">
              {exp.role}
            </h3>
            <span className="text-[#1a73e8] font-medium text-[15px] md:text-[16px]">@ {exp.company}</span>
          </div>
          {exp.division && (
            <div className="flex items-center gap-1.5 text-[14px] text-[#5b5e62] italic">
              <Briefcase className="w-3.5 h-3.5 opacity-60" />
              <span>{exp.division}</span>
            </div>
          )}
        </div>

        <ul className="space-y-3 mb-6">
          {exp.descriptions.map((desc: string, i: number) => (
            <li key={i} className="text-[14px] md:text-[15px] text-[#4d5156] leading-[1.62] flex items-start gap-3">
              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1a73e8] shrink-0 opacity-40" />
              <span>{desc}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function ExperienceSection() {
  return (
    <SectionWrapper id="experience">
      <div className="flex items-center gap-2 mb-1.5">
        <div className="w-7 h-7 rounded-full bg-[#ea4335] flex items-center justify-center text-white font-bold text-[13px] shadow-sm">E</div>
        <div className="flex flex-col">
          <span className="text-[12px] text-[#202124] leading-none mb-0.5">allansyah.dev</span>
          <span className="text-[12px] text-[#70757a] leading-none">allansyah.dev › experience</span>
        </div>
      </div>
      <h2 className="text-[20px] text-[#1a0dab] font-normal mb-6 leading-tight">
        Work Experience — Software Engineer & Freelance Developer
      </h2>
      <div className="space-y-2">
        {EXPERIENCES.map((exp, idx) => (
          <ExperienceItem key={idx} exp={exp} isLast={idx === EXPERIENCES.length - 1} />
        ))}
      </div>
    </SectionWrapper>
  );
}

export function SkillsSection() {
  const getIcon = (skill: string) => {
    const s = skill.toLowerCase().replace(/ /g, "");
    const mapping: Record<string, string> = {
      laravel: "laravel/laravel-original.svg",
      php: "php/php-original.svg",
      javascript: "javascript/javascript-original.svg",
      flutter: "flutter/flutter-original.svg",
      mysql: "mysql/mysql-original.svg",
      tailwindcss: "tailwindcss/tailwindcss-original.svg",
      react: "react/react-original.svg",
      git: "git/git-original.svg",
      restapi: "googlecloud/googlecloud-original.svg",
      python: "python/python-original.svg",
      fastapi: "fastapi/fastapi-original.svg",
      nodejs: "nodejs/nodejs-original.svg",
    };
    const path = mapping[s] || `${s}/${s}-original.svg`;
    return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}`;
  };

  return (
    <SectionWrapper id="skills">
      <div className="flex items-center gap-2 mb-1.5">
        <div className="w-7 h-7 rounded-full bg-[#34a853] flex items-center justify-center text-white font-bold text-[13px] shadow-sm">S</div>
        <div className="flex flex-col">
          <span className="text-[12px] text-[#202124] leading-none mb-0.5">allansyah.dev</span>
          <span className="text-[12px] text-[#70757a] leading-none">allansyah.dev › skills</span>
        </div>
      </div>
      <h2 className="text-[20px] text-[#1a0dab] font-normal mb-6 leading-tight">
        Skills & Technologies — Web, Mobile & Backend
      </h2>
      <div className="flex flex-wrap gap-3">
        {SKILLS.map((skill) => (
          <div
            key={skill}
            className="skill-tag flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-[#dfe1e5] hover:bg-white hover:shadow-sm hover:border-[#1a73e8] transition-all cursor-default group"
          >
            <img
              src={getIcon(skill)}
              alt={skill}
              className="w-5 h-5 object-contain group-hover:scale-110 transition-transform"
              onError={(e) => (e.currentTarget.style.opacity = "0")}
            />
            <span className="text-[14px] md:text-[15px] font-medium text-[#202124]">{skill}</span>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

export function CertificatesSection() {
  return (
    <SectionWrapper id="certificates">
      <div className="flex items-center gap-2 mb-1.5">
        <div className="w-7 h-7 rounded-full bg-[#4285f4] flex items-center justify-center text-white font-bold text-[13px] shadow-sm">C</div>
        <div className="flex flex-col">
          <span className="text-[12px] text-[#202124] leading-none mb-0.5">allansyah.dev</span>
          <span className="text-[12px] text-[#70757a] leading-none">allansyah.dev › certificates</span>
        </div>
      </div>
      <h2 className="text-[20px] text-[#1a0dab] font-normal mb-6 leading-tight">
        Sertifikat Profesional & Lisensi
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
        {CERTIFICATES.map((cert, idx) => (
          <div key={idx} className="group cursor-pointer">
            <div className="aspect-video w-full rounded-xl overflow-hidden border border-[#dfe1e5] bg-gray-50 mb-3 relative">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
            </div>
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <h3 className="text-[16px] font-medium text-[#1a0dab] group-hover:underline leading-snug line-clamp-2">
                  {cert.title}
                </h3>
                <div className="flex items-center gap-2 mt-1 text-[13px] text-[#70757a]">
                  <span className="font-bold">{cert.issuer}</span>
                  <span>•</span>
                  <span>{cert.date}</span>
                </div>
              </div>
              <div className="shrink-0 w-8 h-8 rounded-full border border-[#dfe1e5] flex items-center justify-center text-gray-400 group-hover:text-[#1a73e8] group-hover:border-[#1a73e8] transition-colors">
                <Award className="w-4 h-4" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

export function ContactSection() {
  return (
    <SectionWrapper id="contact">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2 mb-1.5">
          <div className="w-7 h-7 rounded-full bg-[#fbbc05] flex items-center justify-center text-white font-bold text-[13px] shadow-sm">C</div>
          <div className="flex flex-col">
            <span className="text-[12px] text-[#202124] leading-none mb-0.5">allansyah.dev</span>
            <span className="text-[12px] text-[#70757a] leading-none">allansyah.dev › contact</span>
          </div>
        </div>
        <h2 className="text-[20px] text-[#1a0dab] font-normal mb-2 leading-tight cursor-pointer hover:underline">
          Hubungi Saya untuk Kerjasama dan Kolaborasi
        </h2>
        <p className="text-[14px] text-[#4d5156] leading-[1.58]">
          Saya selalu terbuka untuk mendiskusikan proyek baru, ide kreatif, atau peluang untuk menjadi bagian dari visi Anda. Mari terhubung dan bangun sesuatu yang luar biasa bersama!
        </p>
        <div className="flex gap-4 mt-5">
          {[
            { label: "Kirim Email", href: "mailto:allanwinatha@gmail.com" },
            { label: "LinkedIn", href: "https://linkedin.com/in/allanwinatha" },
            { label: "WhatsApp", href: "https://wa.me/62812345678" },
          ].map((link) => (
            <a key={link.label} href={link.href} className="text-[14px] md:text-[15px] text-[#1a0dab] hover:underline font-medium">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
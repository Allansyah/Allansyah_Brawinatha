import { CONTACT } from "../constants";
const applImage = new URL(
  "./assets/dokumentasi/appl.JPG",
  import.meta.url
).href;
const indoImage = new URL("./assets/dokumentasi/indo.jpg", import.meta.url).href;
const hack = new URL("./assets/dokumentasi/image.png", import.meta.url).href;
import { AnimatedStat } from "./Animatedstat";

import {
  Linkedin,
  Github,
  MessageSquare,
  Globe,
  Briefcase,
  Share2,
  Info,
  CheckCircle2,
  ExternalLink,
  Download,
  GraduationCap,
  Calendar,
  Instagram,
  Mail,
  Phone,
} from "lucide-react";

export default function KnowledgePanel() {
  return (
    <div className="knowledge-panel-float w-full max-w-[420px] lg:max-w-none">
      <div className="bg-white border border-[#dadce0] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        {/* Header Media - Kolase Gambar (siap untuk diisi gambar) */}
        <div className="flex gap-0.5 h-[200px] relative">
          {/* Gambar Utama - nanti ganti dengan src gambar */}
          <div className="flex-1 relative overflow-hidden group">
            <img
              src={applImage}
              alt="apple developer"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/20"></div>

            <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
              <span className="text-[10px] text-white/90 font-bold tracking-widest uppercase">
                Portfolio 2025
              </span>
            </div>
          </div>

          {/* Dua Gambar Kecil - nanti ganti dengan src gambar */}
          <div className="w-[130px] flex flex-col gap-0.5">
            <div className="flex-1 relative overflow-hidden group">
              <img
                src={indoImage}
                alt="Project 1"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/10"></div>

              <div className="absolute bottom-2 left-2">
                <Globe className="w-5 h-5 text-white" />
              </div>
            </div>

            <div className="flex-1 relative overflow-hidden group">
              <img
                src={hack}
                alt="Project 2"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/10"></div>

              <div className="absolute bottom-2 left-2">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Title Section */}
        <div className="p-5 border-b border-[#dadce0]">
          <div className="flex justify-between items-start">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <h2 className="text-[32px] font-medium text-[#202124] leading-tight">
                  Allansyah Brawinatha
                </h2>
                <CheckCircle2 className="w-5 h-5 text-[#1a73e8]" />
              </div>
              <p className="text-[15px] text-[#70757a] font-medium">
                Software Engineer & Full-Stack Web
              </p>
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-green-50 border border-green-200 rounded text-[11px] font-bold text-green-700 uppercase tracking-tight">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Tersedia untuk Kolaborasi Peluang Baru
              </div>
            </div>
            <div className="p-2.5 border border-[#dadce0] rounded-full hover:bg-gray-50 transition-colors cursor-pointer group">
              <Share2 className="w-5 h-5 text-[#5f6368] group-hover:text-[#1a73e8]" />
            </div>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-3 border-b border-[#dadce0]">
  <AnimatedStat value="2+" label="Tahun Pengalaman" />
  <AnimatedStat value="9+" label="Proyek Berhasil" />
  <div className="p-4 text-center">
    <div className="text-[18px] font-bold text-[#202124]">24/7</div>
    <div className="text-[11px] text-[#70757a] uppercase font-bold tracking-tighter">
      Learning & Building
    </div>
  </div>
</div>

        {/* Info Content */}
        <div className="p-5 space-y-5">
          {/* <p className="text-[15px] text-[#202124] leading-[1.58]">
            Allansyah Brawinatha adalah seorang <span className="font-bold">Software Engineer</span> yang berfokus pada pembangunan sistem backend skalabel tinggi dan arsitektur produk digital modern. Spesialis dalam ekosistem <span className="text-blue-600">Laravel, Next.js, dan Flutter</span>.
          </p> */}

          {/* Pendidikan Section */}
          <div className="space-y-3">
            <h4 className="text-[14px] font-bold text-[#202124] flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-[#1a73e8]" />
              Pendidikan
            </h4>

            {/* Universitas */}
            <div className="pl-2 border-l-2 border-[#1a73e8]">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[14px] font-semibold text-[#202124]">
                    Teknik Informatika
                  </p>
                  <p className="text-[13px] text-[#70757a]">
                    Universitas Dr. Soetomo
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[12px] font-medium text-[#1a73e8]">
                    2023 - Sekarang
                  </p>
                  <p className="text-[12px] text-[#70757a]">Semester 6</p>
                </div>
              </div>
              <div className="mt-1 inline-flex items-center gap-1 px-2 py-0.5 bg-blue-50 rounded text-[12px] font-medium text-blue-700">
                <span>⭐ IPK 3.61 / 4.00</span>
              </div>
            </div>

            {/* SMA */}
            <div className="pl-2 border-l-2 border-gray-200">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[14px] font-semibold text-[#202124]">
                    Ilmu Pengetahuan Alam (IPA)
                  </p>
                  <p className="text-[13px] text-[#70757a]">
                    SMA NEGERI 14 SURABAYA
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[12px] font-medium text-[#70757a]">
                    2020 - 2023
                  </p>
                </div>
              </div>
              <div className="mt-1 inline-flex items-center gap-1 px-2 py-0.5 bg-gray-50 rounded text-[12px] font-medium text-gray-700">
                <span>📖 Rata-rata Rapot 86.50</span>
              </div>
            </div>
          </div>

          {/* Kontak Section */}
          <div className="space-y-3 pt-2">
            <h4 className="text-[14px] font-bold text-[#202124] flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#1a73e8]" />
              Kontak
            </h4>

            <div className="space-y-2 text-[14px]">
              {/* Instagram */}
              <div className="flex items-center gap-3 text-[#202124]">
                <Instagram className="w-4 h-4 text-[#E4405F]" />
                <span className="font-medium">@allbnth</span>
                <a
                  href="https://instagram.com/allbnth"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#1a73e8] text-[12px] hover:underline ml-auto"
                >
                  Kunjungi →
                </a>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-3 text-[#202124]">
                <Phone className="w-4 h-4 text-[#25D366]" />
                <span className="font-medium">0895-1851-1511</span>
                <a
                  href="https://wa.me/6289518511511"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#1a73e8] text-[12px] hover:underline ml-auto"
                >
                  Chat →
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 text-[#202124]">
                <Mail className="w-4 h-4 text-[#EA4335]" />
                <span className="text-[13px] truncate">
                  allansyahbrawinatha01@gmail.com
                </span>
                <a
                  href="mailto:allansyahbrawinatha01@gmail.com"
                  className="text-[#1a73e8] text-[12px] hover:underline ml-auto"
                >
                  Email →
                </a>
              </div>
            </div>
          </div>

          {/* Tombol Download CV */}
          <div className="pt-2">
            <a
              href="https://drive.google.com/file/d/1XYPz5moa5FfhrEjVyflSdxxacu2U6hek/view?usp=sharing"
              className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-[#1a73e8] to-[#4285f4] text-white rounded-lg font-medium text-[14px] hover:shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Download className="w-4 h-4" />
              Download CV (PDF)
            </a>
            <p className="text-[10px] text-[#70757a] text-center mt-2">
              *Link CV sementara, akan diupdate
            </p>
          </div>

          {/* Social Profiles Grid */}
          <div className="pt-2">
            <h4 className="text-[15px] font-bold text-[#202124] mb-4 flex items-center justify-between">
              <span>Profil Media Sosial</span>
              <div className="h-px bg-[#dadce0] flex-1 ml-4" />
            </h4>
            <div className="flex gap-8 justify-start">
              {[
                {
                  icon: Linkedin,
                  label: "LinkedIn",
                  link: `https://${CONTACT.linkedin}`,
                },
                {
                  icon: Github,
                  label: "GitHub",
                  link: `https://${CONTACT.github}`,
                },
                {
                  icon: MessageSquare,
                  label: "WhatsApp",
                  link: `https://wa.me/${CONTACT.whatsapp.replace(/[^0-9]/g, "")}`,
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center gap-2 group"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-full border border-[#dadce0] bg-white transition-all group-hover:border-[#1a73e8] group-hover:scale-110 group-hover:bg-blue-50/50">
                    <social.icon className="w-6 h-6 text-[#5f6368] group-hover:text-[#1a73e8] transition-colors" />
                  </div>
                  <span className="text-[12px] text-[#70757a] font-medium group-hover:text-[#1a73e8]">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-[#f8f9fa] p-3 flex justify-between items-center text-[11px] text-[#70757a] uppercase font-bold tracking-wider border-t border-[#dadce0]">
          <div className="flex items-center gap-1">
            <Info className="w-3.5 h-3.5" />
            <span>Profil divalidasi oleh sistem</span>
          </div>
          <div className="flex gap-2">
            <span className="hover:underline cursor-pointer">
              Koreksi info ini
            </span>
          </div>
        </div>
      </div>

      {/* Certifications Section */}
      {/* <div className="mt-8">
        <h3 className="text-[18px] font-normal text-[#202124] mb-4">Sertifikasi & Teknologi Utama</h3>
        <div className="grid grid-cols-4 gap-4">
          {[
            { name: 'Laravel', color: 'bg-red-50 text-red-600 border-red-100', icon: 'L' },
            { name: 'React', color: 'bg-blue-50 text-blue-600 border-blue-100', icon: 'R' },
            { name: 'Next.js', color: 'bg-black text-white border-gray-800', icon: 'N' },
            { name: 'Flutter', color: 'bg-sky-50 text-sky-600 border-sky-100', icon: 'F' }
          ].map(item => (
            <div key={item.name} className="flex flex-col items-center gap-2 group cursor-pointer transition-all hover:scale-105">
              <div className={`w-full aspect-square ${item.color} border rounded-xl flex items-center justify-center font-bold text-2xl shadow-sm group-hover:shadow-md`}>
                {item.icon}
              </div>
              <span className="text-[12px] font-bold text-gray-500 group-hover:text-[#1a73e8] uppercase tracking-tighter">{item.name}</span>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
}

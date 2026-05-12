import { Project, Experience } from './types';
import certkomdigi from "./components/assets/sertifikat/komdigi.png";
import certnextjs from "./components/assets/sertifikat/Allan.png";
import certApple from "./components/assets/sertifikat/apple.jpg";



export const PROJECTS: Project[] = [
  {
    title: "Cinema Tix - Enterprise Ticketing System",
    category: "Fintech / E-Commerce",
    description: "Sistem ticketing bioskop enterprise yang menangani ribuan transaksi harian. Fokus pada integrasi pembayaran yang aman dan manajemen inventaris kursi secara realtime.",
    features: [
      "Optimasi Pemilihan Kursi: Algoritma penempatan kursi otomatis untuk memaksimalkan kapasitas dan kenyamanan pelanggan",
      "Integrasi Payment Gateway: Mendukung Xendit, QRIS, dan Virtual Accounts dengan tingkat keberhasilan transaksi 99.9%",
      "Admin Analytics Dashboard: Memberikan wawasan bisnis mendalam tentang preferensi genre dan tren waktu menonton",
      "Scalable Backend: Arsitektur yang mampu menangani peak traffic saat rilis film blockbuster"
    ],
    techStack: ["Laravel", "MySQL", "Tailwind CSS", "Vite", "Xendit",],
    links: { demo: "https://drive.google.com/drive/folders/1laiJz7WtskO_BM3awqT5vsCZE4AfSGVG" },
  },
  {
    title: "Gaming Marketplace Engine",
    category: "Digital Marketplace",
    description: "Platform infrastruktur perdagangan aset digital yang skalabel, dirancang untuk efisiensi transaksi dan keamanan data pengguna.",
    features: [
      "Automated Inventory Management: Sistem otomatisasi pelacakan ketersediaan stok akun secara real-time",
      "Security First: Implementasi sanitasi data ketat dan otorisasi berlapis untuk mencegah fraud",
      "Performance Optimization: Meningkatkan kecepatan muat halaman sebesar 60% dengan implementasi efisiensi kueri database",
      "SEO Optimized: Mencapai skor Core Web Vitals yang optimal untuk visibilitas pencarian maksimal"
    ],
    techStack: ["Laravel", "MySQL", "Blade", "JavaScript", "AJAX", "SEO"],
    links: { demo: "https://drive.google.com/file/d/1H5hOs19iYQpSl4ZwB74OhSLHx9oyBXWu/view" },
  },
  {
    title: "B2B Account Trading Platform",
    category: "B2B SaaS / Supply Chain",
    description: "Inovasi platform B2B yang menghubungkan supplier aset digital dengan ribuan reseller melalui skema harga dinamis dan sistem saldo terintegrasi.",
    features: [
      "Dynamic Pricing Algorithm: Algoritma penyesuaian harga otomatis berdasarkan volume pembelian reseller",
      "Financial Escrow System: Sistem penahanan dana aman untuk menjamin kepuasan antara supplier dan reseller",
      "Business Intelligence Reports: Pelaporan otomatis laba/rugi dan performa supplier bagi manajemen",
      "Automated Withdrawal: Sistem penarikan saldo otomatis yang terintegrasi dengan API bank"
    ],
    techStack: ["Laravel", "PHP", "MySQL", "Chart.js", "Financial API"],
    links: { demo: "https://drive.google.com/file/d/1PzauxG7DHnwMIKnx3NYGrrNaZepptiPR/view" },
  },
  {
    title: "Enterprise HRIS & Operation Management",
    category: "Enterprise Software / HR Tech",
    description: "Solusi manajemen sumber daya manusia yang komprehensif untuk meningkatkan efisiensi operasional dan akurasi data administrasi karyawan.",
    features: [
      "Standardized Operations: Digitalisasi 100% proses pengajuan cuti dan perizinan yang sebelumnya manual",
      "Audit Trail & Compliance: Log aktivitas lengkap untuk kebutuhan audit internal dan pematuhan aturan perusahaan",
      "Multi-level Approval Workflow: Sistem persetujuan berjenjang yang fleksibel sesuai struktur organisasi",
      "Resource Integration: Sinkronisasi data kehadiran dengan penggajian secara otomatis"
    ],
    techStack: ["PHP", "Laravel", "MySQL", "Tailwind", "Alpine.js"],
    links: { demo: "https://drive.google.com/file/d/1y2ujNBBjS3bE_e2836WRSJE08QXnG4aA/view" },
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Fullstack Developer Intern",
    company: "PT Indowire Prima Industrindo",
    period: "Mei — November 2025",
    division: "Information Technology Division",
    descriptions: [
      "Membangun dan mengoptimalkan modul aplikasi internal untuk meningkatkan efisiensi operasional lintas departemen",
      "Melakukan pengujian fungsional, perbaikan bug, serta optimasi performa aplikasi",
      "Mengurangi waktu respon server melalui refactor logic backend Laravel dan optimasi kueri Eloquent",
      "Bekerja sama langsung dengan stakeholder departemen untuk menerjemahkan kebutuhan bisnis menjadi spesifikasi teknis"
    ]
  },
  {
    role: "Freelance Software Engineer",
    company: "Self-Employed",
    period: "2024 — Sekarang",
    division: "Fullstack Web & Mobile Development",
    descriptions: [
      "Berhasil mengirimkan 5+ proyek produksi untuk klien UMKM dan enterprise dengan tingkat kepuasan 100%",
      "Implementasi arsitektur Next.js modern dengan Server Components dan Edge Functions untuk performa maksimal",
      "Menerapkan dasar – dasar SEO ( Search Engine Optimization ), khusus untuk website sebagai bagian dari pengembangan dan optimasi performa situs klien",
      "Memberikan konsultasi teknis terkait pemilihan tech-stack dan strategi deployment cloud (Vercel)"
    ]
  },
  {
    role: "Apple Foundation Program Participant",
    company: "Apple Developer Academy @ UC",
    period: "Juni 2023",
    division: "iOS Development & Product Design",
    descriptions: [
      "Mempelajari metodologi Challenge Based Learning (CBL) untuk memecahkan masalah nyata melalui solusi teknologi",
      "Mengembangkan prototipe aplikasi iOS fungsional menggunakan SwiftUI dan framework asli Apple",
      "Merancang user flow dan interface berkualitas tinggi yang mematuhi Human Interface Guidelines (HIG) Apple",
      "Berkolaborasi dalam lingkungan agile dengan tim multidisiplin untuk menyelesaikan sprint pengembangan produk"
    ]
  }
];

export const SKILLS = [
  "Laravel", "PHP", "React", "TypeScript", "Flutter", "Next.js", "Vite",
  "MySQL / PostgreSQL", "Tailwind CSS", "Node.js", "Git", "REST", "Java", "SEO Optimazation",
  "Deployment", "System Architecture"
];

export const CONTACT = {
  email: "allanwinatha@gmail.com",
  linkedin: "linkedin.com/in/allanwinatha",
  github: "github.com/allanwinatha",
  instagram: "@allanwinatha",
  whatsapp: "+62 812-3456-7890",
  location: "Surabaya, Indonesia",
  availability: "Open for Opportunities / Freelance",
  languages: ["Bahasa Indonesia (Native)", "English (Professional)"]
};

export const CERTIFICATES = [
  {
    title: "Sertifikat Kompetensi Digital ( KOMDIGI )",
    issuer: "Kominfo Indonesia",
    date: "2025",
    image: certkomdigi,
    link: "#"
  },
  {
    title: "Pelatihan Fundametal Next.js",
    issuer: "HIMATIFTA",
    date: "2025",
    image: certnextjs,
    link: "#"
  },
  {
    title: "Apple Foundation Program",
    issuer: "Apple Developer Academy @ UC",
    date: "2022",
    image: certApple,
    link: "#"
  }
 
];

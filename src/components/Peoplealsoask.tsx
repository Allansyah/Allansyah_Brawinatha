import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import SectionWrapper from "./SectionWrapper";

const FAQS = [
  {
    q: "Apakah tersedia untuk freelance atau magang?",
    a: "Ya! Saya aktif mencari peluang freelance dan open untuk posisi magang di bidang web/mobile development. ",
  },
  {
    q: "Tech stack apa yang paling dikuasai ?",
    a: "Laravel (PHP) dan Next.js/React untuk web, Flutter untuk mobile. Untuk backend saya juga familiar dengan Node.js dan FastAPI. Database utama MySQL/PostgreSQL. Semua project biasanya disertai Tailwind CSS untuk styling.",
  },
  {
    q: "Berapa estimasi biaya pengembangan aplikasi?",
    a: "Bergantung pada kompleksitas proyek. Landing page sederhana mulai dari Rp 500rb keatas. Web app dengan sistem backend dan database Rp 3jt–15jt+. Hubungi saya untuk konsultasi gratis dan estimasi yang lebih akurat sesuai kebutuhan Anda.",
  },
  {
    q: "Berapa lama pengerjaan rata-rata sebuah proyek?",
    a: "Landing page: 3–7 hari. Web app skala kecil-menengah: 2–6 minggu. Sistem enterprise atau mobile app: 1–3 bulan. Timeline final selalu disepakati bersama setelah analisis kebutuhan.",
  },
  {
    q: "Apakah menyediakan layanan maintenance setelah launch?",
    a: "Tentu. Setiap proyek mendapat free support 30 hari setelah deployment. Untuk jangka panjang tersedia paket maintenance bulanan dengan monitoring, update keamanan, dan pengembangan fitur lanjutan.",
  },
];

export default function PeopleAlsoAsk() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <SectionWrapper id="faq">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-7 h-7 rounded-full bg-[#34a853] flex items-center justify-center text-white font-bold text-[13px] shadow-sm">
          ?
        </div>
        <div className="flex flex-col">
          <span className="text-[12px] text-[#202124] leading-none mb-0.5">allansyah.dev</span>
          <span className="text-[12px] text-[#70757a] leading-none">allansyah.dev › faq</span>
        </div>
      </div>

      <h2 className="text-[20px] text-[#202124] font-medium mb-4 leading-tight">
        Orang juga bertanya
      </h2>

      <div className="border border-[#dadce0] rounded-xl overflow-hidden divide-y divide-[#dadce0]">
        {FAQS.map((faq, i) => (
          <div key={i}>
            <button
              onClick={() => setOpenIdx(openIdx === i ? null : i)}
              className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-[#f8f9fa] transition-colors group"
            >
              <span className="text-[15px] text-[#202124] font-medium group-hover:text-[#1a73e8] transition-colors pr-4">
                {faq.q}
              </span>
              <ChevronDown
                className="w-5 h-5 text-[#70757a] shrink-0 transition-transform duration-300"
                style={{ transform: openIdx === i ? "rotate(180deg)" : "rotate(0deg)" }}
              />
            </button>

            <AnimatePresence>
              {openIdx === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 pt-1 text-[14px] text-[#4d5156] leading-[1.65] border-t border-[#f1f3f4]">
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
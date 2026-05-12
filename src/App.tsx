import { useState, useEffect } from "react";
import CustomCursor from "./components/Customcursor";
import FloatingOrbs from "./components/Floatingorbs";
import PeopleAlsoAsk from "./components/Peoplealsoask";
import { GoogleDotsLoader, ScrollProgressBar } from "./components/Uienhancements";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PortfolioSection from "./components/Portfolio";
import KnowledgePanel from "./components/Contact";
import {
  AboutSection,
  ExperienceSection,
  SkillsSection,
  ContactSection,
  CertificatesSection,
} from "./components/AboutAndSkills";
import StickyHeader from "./components/StickyHeader";
import { motion, AnimatePresence, useScroll } from "motion/react";
import { MapPin } from "lucide-react";

export default function App() {
  const [isSearching, setIsSearching] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const { scrollY } = useScroll();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsSearching(latest > 300);
    });
    return () => unsubscribe();
  }, [scrollY]);

  const handleSearch = (query: string) => {
    const targetId = query.toLowerCase();

    if (targetId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("home");
      return;
    }

    const sections = ["about", "portfolio", "skills", "contact", "experience"];
    const matched = sections.find((s) => targetId.includes(s));

    if (matched) {
      const el = document.getElementById(matched);
      if (el) {
        const offset = 150;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = el.getBoundingClientRect().top;
        const offsetPosition = elementRect - bodyRect - offset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        setActiveSection(matched);
      }
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-150px 0px -60% 0px",
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const sections = ["about", "portfolio", "skills", "contact", "experience"];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const heroObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setActiveSection("home");
      },
      { rootMargin: "0px", threshold: 0.5 }
    );
    const heroEl = document.querySelector("section");
    if (heroEl) heroObserver.observe(heroEl);

    return () => {
      observer.disconnect();
      heroObserver.disconnect();
    };
  }, [isLoading]);

  // ── Loading screen ──────────────────────────────────────────────────────────
  // FIX: Wrapped ScrollProgressBar + loading div inside a single Fragment (<>)
  // FIX: GoogleDotsLoader dipindah ke bawah loading bar, bukan di dalamnya
  if (isLoading) {
    return (
      <>
        <ScrollProgressBar />
        <div className="fixed inset-0 flex items-center justify-center bg-white z-[100]">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 1 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="text-4xl font-bold font-google mb-2">
              <span className="text-[#4285f4]">A</span>
              <span className="text-[#ea4335]">l</span>
              <span className="text-[#fbbc05]">l</span>
              <span className="text-[#4285f4]">a</span>
              <span className="text-[#34a853]">n</span>
              <span className="text-[#ea4335]">.</span>
              <span className="text-[#ea4335]">GO</span>
              <span className="text-[#fbbc05]">DEV</span>
            </div>

            {/* Loading bar */}
            <div className="w-48 h-1 bg-gray-100 rounded-full overflow-hidden relative">
              <motion.div
                className="absolute inset-y-0 left-0 bg-[#4285f4]"
                animate={{ left: ["-100%", "100%"] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                style={{ width: "40%" }}
              />
            </div>

            {/* FIX: GoogleDotsLoader di sini, setelah loading bar */}
            <GoogleDotsLoader />
          </motion.div>
        </div>
      </>
    );
  }

  // ── Main app ────────────────────────────────────────────────────────────────
  // FIX: CustomCursor + FloatingOrbs + main div dibungkus Fragment (<>)
  return (
    <>
      <ScrollProgressBar />
      <CustomCursor />
      <FloatingOrbs />

      <div className="font-sans antialiased bg-white selection:bg-[#4285f4] selection:text-white">
        {/* Global Navbar */}
        <AnimatePresence>
          {!isSearching && (
            <motion.div exit={{ opacity: 0 }}>
              <Navbar />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hero Section */}
        <section className="relative">
          <Hero onSearch={handleSearch} />
        </section>

        {/* Sticky Header */}
        <AnimatePresence>
          {isSearching && (
            <motion.div
              initial={{ opacity: 0, y: -80 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -80 }}
              className="fixed top-0 left-0 w-full z-50"
            >
              <StickyHeader activeSection={activeSection} onSearch={handleSearch} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <main className="max-w-[1550px] mx-auto py-8 flex flex-col lg:flex-row border-t border-gray-100 lg:px-0">
          <div className="flex-1 lg:pl-[180px] order-2 lg:order-1">
            <div className="max-w-[800px] px-4 lg:px-0 space-y-2">
              <p className="text-[14px] text-[#70757a] mb-4 pt-4">
                Sekitar 1.658 hasil (0,42 detik)
              </p>

              <AboutSection />
              <div className="h-px bg-gray-100 my-6" />

              <ExperienceSection />
              <div className="h-px bg-gray-100 my-6" />

              <PortfolioSection />
              <div className="h-px bg-gray-100 my-6" />

              <SkillsSection />
              <div className="h-px bg-gray-100 my-6" />

              <PeopleAlsoAsk />
              <div className="h-px bg-gray-100 my-6" />

              <CertificatesSection />
              <div className="h-px bg-gray-100 my-6" />

              <ContactSection />
            </div>
          </div>

          {/* Knowledge Panel */}
          <aside className="lg:w-[500px] lg:ml-[2px] lg:flex-shrink-0 lg:pr-19 order-1 lg:order-2 lg:sticky lg:top-[140px] pt-8 lg:pt-0 self-start px-4 lg:px-0">
            <KnowledgePanel />
          </aside>
        </main>

        <footer className="mt-20 bg-[#f2f2f2] border-t border-[#dfe1e5]">
          <div className="max-w-[1280px] mx-auto lg:pl-[180px] px-8 lg:px-4 py-4 md:py-6">
            <div className="flex items-center gap-2 mb-4 text-[#70757a]">
              <MapPin className="w-4 h-4" />
              <span className="text-[15px] font-medium font-google underline underline-offset-4 decoration-dotted">
                Surabaya, Jawa Timur, Indonesia
              </span>
            </div>
            <div className="w-full h-[1px] bg-[#dfe1e5] mb-4" />
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex flex-wrap gap-x-6 gap-y-4 font-google">
                <span className="text-[14px] text-[#70757a] hover:underline cursor-pointer">Bantu Saya Berkembang</span>
                <span className="text-[14px] text-[#70757a] hover:underline cursor-pointer">Kebijakan Kode</span>
                <span className="text-[14px] text-[#70757a] hover:underline cursor-pointer">Lisensi</span>
                <span className="text-[14px] text-[#70757a] hover:underline cursor-pointer">Cara Kerja Portfolio</span>
              </div>
              <div className="flex items-center gap-4 text-[#70757a] text-[13px] font-medium">
                <span>&copy; {new Date().getFullYear()} Allansyah Brawinatha</span>
                <span className="w-1 h-1 rounded-full bg-gray-400" />
                <span>Built with React & Engineering Passion</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
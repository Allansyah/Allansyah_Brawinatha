import { motion } from "motion/react";
import SearchBar from "./SearchBar";
// import heroPerson from "./assets/gambarhero/Subjek.png";
const heroPerson = new URL(
  "./assets/gambarhero/Subjek.png",
  import.meta.url
).href;
import { TypewriterText } from "./Uienhancements";

export default function Hero({ onSearch }: { onSearch: (query: string) => void }) {
  return (
    <div className="pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-8 md:pb-12 lg:pb-16 flex flex-col items-center justify-center px-4 sm:px-6 relative z-10 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center w-full max-w-[1280px] mx-auto"
      >
        <div className="relative w-full max-w-[896px] mx-auto flex flex-col items-center">
          {/* Main Visual Center */}
          <div className="relative flex items-center justify-center">
            {/* Glow efek - responsive opacity */}
            <div className="absolute top-5 sm:top-10 w-[75%] h-[65%] bg-yellow-300/20 sm:bg-yellow-300/30 blur-2xl sm:blur-3xl rounded-full z-0" />

            {/* Foto - responsive size */}
            <img
              src={heroPerson}
              alt="Allansyah Brawintha"
              className="w-[250px] sm:w-[320px] md:w-[380px] lg:w-[420px] h-auto object-contain relative z-10"
            />

            {/* "Hi I'm" text - reposition for mobile */}
            <div className="absolute top-[5%] sm:top-[10%] -left-5 sm:-left-10 md:-left-20 z-40 -rotate-12 select-none pointer-events-none">
              <h1 className="text-[32px] sm:text-[50px] md:text-[65px] lg:text-[80px] font-bold font-caveat tracking-wide leading-none drop-shadow-sm">
                <span className="text-[#4285f4]">Hi </span>
                <span className="text-[#ea4335]">I'm</span>
              </h1>
            </div>

            {/* Fade bottom - responsive height */}
            <div className="absolute bottom-0 left-0 w-full h-24 sm:h-32 bg-gradient-to-t from-white via-white/70 to-transparent z-20" />
          </div>

          {/* Name Overlay - responsive margins and sizes */}
          <div className="relative z-30 -mt-16 sm:-mt-20 md:-mt-28 lg:-mt-32 w-full text-center px-2">
            <h1 className="text-[40px] sm:text-[55px] md:text-[90px] lg:text-[130px] font-black tracking-tighter font-google leading-none">
              <span className="text-[#4285f4]/90 drop-shadow-lg sm:drop-shadow-xl">Allan</span>
              <span className="text-[#ea4335]/90 drop-shadow-lg sm:drop-shadow-xl">syah</span>
            </h1>
            <h1 className="text-[40px] sm:text-[55px] md:text-[90px] lg:text-[130px] font-black tracking-tighter font-google leading-none -mt-2 sm:-mt-3 md:-mt-6 lg:-mt-8">
              <span className="text-[#fbbc05]/90 drop-shadow-lg sm:drop-shadow-xl">Bra</span>
              <span className="text-[#4285f4]/90 drop-shadow-lg sm:drop-shadow-xl">wi</span>
              <span className="text-[#34a853]/90 drop-shadow-lg sm:drop-shadow-xl">natha</span>
            </h1>
          </div>
        </div>

        {/* Typewriter text - responsive */}
        <div className="h-10 sm:h-12 md:h-16 mb-3 sm:mb-4 flex items-center justify-center px-4">
          <TypewriterText
            texts={[
              "Setiap solusi dibangun dengan ketelitian tinggi",
              "Full-stack developer yang berfokus pada bisnis",
              "Modern web & mobile development",
              "Laravel • Next.js • Flutter",
            ]}
            speed={45}
            pauseMs={2500}
            className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-[#202124] text-center font-google"
          />
        </div>

        {/* Description - responsive */}
        <p className="text-[#70757a] text-center max-w-[600px] mb-6 sm:mb-8 text-sm sm:text-[15px] leading-relaxed px-4">
          Terus belajar, berkembang, dan membangun teknologi yang dapat membantu banyak orang
        </p>

        {/* Search bar - full width on mobile */}
        <div className="w-full max-w-[600px] px-4 sm:px-0">
          <SearchBar onSearch={onSearch} />
        </div>

        {/* Buttons - responsive layout */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 sm:mt-10 w-full sm:w-auto px-4 sm:px-0">
          <button
            onClick={() => onSearch("portfolio")}
            className="px-5 sm:px-6 py-2.5 bg-[#4285f4] hover:bg-[#3367d6] text-white rounded-full text-[13px] sm:text-[14px] font-medium transition-all shadow-md hover:shadow-lg"
          >
            Lihat Project
          </button>
          <button
            onClick={() => onSearch("contact")}
            className="px-5 sm:px-6 py-2.5 bg-white hover:bg-gray-50 text-[#3c4043] border border-[#dfe1e5] rounded-full text-[13px] sm:text-[14px] font-medium transition-all"
          >
            Hubungi Saya
          </button>
        </div>
      </motion.div>
    </div>
  );
}
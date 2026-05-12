import { ReactNode } from 'react';
import { motion } from 'motion/react';

interface SectionWrapperProps {
  children: ReactNode;
  id: string;
  title?: string;
}

export default function SectionWrapper({ children, id }: SectionWrapperProps) {
  return (
    <section id={id} className="w-full py-4 scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ duration: 0.4 }}
      >
        {children}
      </motion.div>
    </section>
  );
}

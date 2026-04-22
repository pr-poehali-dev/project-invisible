import { motion } from "framer-motion"

export default function Overlay() {
  return (
    <div className="pointer-events-none absolute inset-0 z-10">
      <div className="absolute top-8 left-0 right-0 flex flex-col items-center gap-2">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="font-serif text-3xl md:text-4xl font-light text-white tracking-widest uppercase"
        >
          Мягкий Сон
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.9 }}
          className="font-sans text-xs md:text-sm text-white/60 tracking-[0.3em] uppercase"
        >
          Коллекция постельного белья
        </motion.p>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-3">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="font-sans text-xs text-white/40 tracking-widest uppercase"
        >
          Перетащите для просмотра
        </motion.p>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 1.6 }}
          className="h-px w-24 bg-accent/60 origin-left"
        />
      </div>
    </div>
  )
}
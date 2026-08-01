"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-background">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center gap-4"
      >
        <div className="relative">
          <div className="absolute inset-0 h-16 w-16 rounded-full bg-accent-primary/20 blur-xl animate-pulse-glow" />
          <div className="relative h-16 w-16 rounded-full border-2 border-white/10" />
          <div className="absolute inset-0 h-16 w-16 animate-spin rounded-full border-2 border-transparent border-t-accent-primary" />
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-sm text-gray-500"
        >
          Loading experience...
        </motion.p>
      </motion.div>
    </div>
  );
}

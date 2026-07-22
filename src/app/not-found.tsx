"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="font-display text-8xl font-bold gradient-text">404</h1>
        <p className="mt-4 text-lg text-gray-400">Page not found</p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-6 py-3 text-sm text-white transition-all hover:bg-white/10 hover:border-white/20"
        >
          <Home className="h-4 w-4" />
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}

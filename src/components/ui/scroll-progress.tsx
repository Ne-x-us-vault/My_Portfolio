"use client";
import { motion, useScroll, useSpring } from "framer-motion";
export default function ScrollProgress(){
  const {scrollYProgress}=useScroll();
  const scaleX=useSpring(scrollYProgress,{stiffness:120,damping:30,restDelta:0.001});
  return <motion.div className="fixed inset-x-0 top-0 z-[100] h-[1.5px] origin-left bg-gradient-to-r from-[#7A7CFF] via-[#8b8fff] to-[#00D9FF]" style={{scaleX}} />;
}

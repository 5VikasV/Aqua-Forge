import { motion } from "framer-motion";
import AnimatedBackground from "./background/AnimatedBackground";
import FloatingParticles from "./background/FloatingParticles";

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">

      <AnimatedBackground />
      <FloatingParticles />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen pt-24 px-6 text-center">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-extrabold leading-tight text-white"
        >
          The Future of
          <br />

          <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Ocean Intelligence
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-8 max-w-3xl text-xl text-gray-300"
        >
          Harnessing Artificial Intelligence, autonomous systems and
          real-time marine intelligence to understand, protect and
          transform our oceans.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 flex gap-6"
        >
          <button className="rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-black transition hover:scale-105 hover:bg-cyan-400">
            Explore Project
          </button>

          <button className="rounded-xl border border-cyan-500 px-8 py-4 text-cyan-400 transition hover:scale-105 hover:bg-cyan-500 hover:text-black">
            GitHub
          </button>
        </motion.div>

      </div>

    </section>
  );
}

export default Hero;
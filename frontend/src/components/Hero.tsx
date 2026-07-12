import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-500/10 blur-3xl rounded-full"></div>

      {/* Animated Background Circle */}
      <motion.div
        className="absolute right-[-150px] top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-cyan-500/20"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen pt-24 text-center px-6">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-extrabold leading-tight"
        >
          The Future of
          <br />
          <span className="text-cyan-400">
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
          <button className="px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition text-black font-semibold">
            Explore Project
          </button>

          <button className="px-8 py-4 rounded-xl border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black transition">
            GitHub
          </button>
        </motion.div>

      </div>

    </section>
  );
}

export default Hero;
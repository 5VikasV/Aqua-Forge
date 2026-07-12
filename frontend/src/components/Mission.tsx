import { motion } from "framer-motion";

function Mission() {
  return (
    <section className="bg-slate-950 text-white py-28 px-6">
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-cyan-400 uppercase tracking-[0.3em] font-semibold mb-4">
          Our Mission
        </p>

        <h2 className="text-5xl font-bold mb-8">
          Why Aqua Forge?
        </h2>

        <p className="text-xl text-gray-400 leading-9">
          More than 70% of our planet is covered by oceans, yet most of it
          remains unexplored. Climate change, pollution, coral bleaching,
          and biodiversity loss threaten marine ecosystems every day.
        </p>

        <p className="text-xl text-gray-400 leading-9 mt-8">
          Aqua Forge leverages Artificial Intelligence, satellite imagery,
          autonomous systems, and real-time marine data to help researchers,
          governments, and organizations understand, monitor, and protect
          our oceans.
        </p>
      </motion.div>
    </section>
  );
}

export default Mission;
import { motion } from "framer-motion";
import { problems } from "../data/problems";

function Problem() {
  return (
    <section className="bg-slate-950 text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Challenges Facing Our Oceans
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="bg-slate-900/70 border border-slate-800 backdrop-blur-lg rounded-2xl p-8 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)] transition"
            >
              <h3 className="text-2xl font-bold mb-4">
                {problem.title}
              </h3>

              <p className="text-gray-400 leading-7">
                {problem.description}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Problem;
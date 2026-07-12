import { motion } from "framer-motion";
import { roadmap } from "../data/roadmap";

function Roadmap() {
  return (
    <section className="bg-slate-900 text-white py-28 px-6">
      <div className="max-w-5xl mx-auto">

        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-cyan-400 uppercase tracking-[0.3em] font-semibold mb-4">
            Future Vision
          </p>

          <h2 className="text-5xl font-bold">
            Our Roadmap
          </h2>
        </motion.div>

        <div className="relative border-l-2 border-cyan-500 ml-6">

          {roadmap.map((item, index) => (
            <motion.div
              key={item.year}
              className="relative mb-16 pl-12"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
            >

              <motion.div
                className="absolute -left-[14px] top-2 w-6 h-6 rounded-full bg-cyan-400"
                whileHover={{
                  scale: 1.3,
                  boxShadow: "0 0 20px rgba(34,211,238,0.8)",
                }}
              />

              <p className="text-cyan-400 font-bold text-lg">
                {item.year}
              </p>

              <h3 className="text-3xl font-bold mt-2">
                {item.title}
              </h3>

              <p className="text-gray-400 mt-3 leading-8">
                {item.description}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Roadmap;
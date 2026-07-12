import { motion } from "framer-motion";
import { faqs } from "../data/faq";

function FAQ() {
  return (
    <section className="bg-slate-950 text-white py-28 px-6">
      <div className="max-w-4xl mx-auto">

        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-cyan-400 uppercase tracking-[0.3em] font-semibold mb-4">
            Questions
          </p>

          <h2 className="text-5xl font-bold">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="space-y-6">

          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              whileHover={{
                scale: 1.02,
              }}
              className="bg-slate-900/70 border border-slate-800 backdrop-blur-lg rounded-2xl p-8 hover:border-cyan-400 transition"
            >
              <h3 className="text-2xl font-semibold mb-4">
                {faq.question}
              </h3>

              <p className="text-gray-400 leading-8">
                {faq.answer}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default FAQ;
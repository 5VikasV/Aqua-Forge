import {
  Brain,
  Satellite,
  Plane,
  Radio,
  ChartLine,
  Globe,
} from "lucide-react";
import { motion } from "framer-motion";

import FeatureCard from "./FeatureCard";
import { features } from "../data/features";

const icons: any = {
  Brain,
  Satellite,
  Plane,
  Radio,
  ChartLine,
  Globe,
};

function Features() {
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
          Key Features
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => {
            const Icon = icons[feature.icon];

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
              >
                <FeatureCard
                  icon={Icon}
                  title={feature.title}
                  description={feature.description}
                />
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default Features;
import {
  Brain,
  Satellite,
  Plane,
  Radio,
  ChartLine,
  Globe,
} from "lucide-react";

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

        <h2 className="text-4xl font-bold text-center mb-16">
          Key Features
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={icons[feature.icon]}
              title={feature.title}
              description={feature.description}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default Features;
import {
  Brain,
  Satellite,
  Plane,
  Radio,
  LineChart,
  Globe,
} from "lucide-react";

import FeatureCard from "./FeatureCard";

function Features() {
  return (
    <section className="bg-slate-950 text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          Key Features
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <FeatureCard
            icon={Brain}
            title="AI Analytics"
            description="Intelligent analysis of marine environmental data."
          />

          <FeatureCard
            icon={Satellite}
            title="Satellite Data"
            description="Integrates satellite imagery for large-scale monitoring."
          />

          <FeatureCard
            icon={Plane}
            title="Drone Integration"
            description="Supports autonomous drones for ocean observation."
          />

          <FeatureCard
            icon={Radio}
            title="Marine Sensors"
            description="Collects live data from distributed sensor networks."
          />

          <FeatureCard
            icon={LineChart}
            title="Predictive Models"
            description="Forecasts ocean conditions using machine learning."
          />

          <FeatureCard
            icon={Globe}
            title="Open Dashboard"
            description="Interactive dashboards for researchers and organizations."
          />

        </div>
      </div>
    </section>
  );
}

export default Features;
import FeatureCard from "./FeatureCard";
import { features } from "../data/content";

export default function WhyChooseUs() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-extrabold">Why Choose Us?</h2>
        <div className="w-14 h-[3px] bg-brand mx-auto mt-2" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            text={feature.text}
          />
        ))}
      </div>
    </section>
  );
}
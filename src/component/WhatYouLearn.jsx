import LevelCard from "./LevelCard";
import { levels } from "../data/content";

export default function WhatYouLearn() {
  return (
    <section className="max-w-6xl mx-auto px-4 pb-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-extrabold">What will you Learn in ACCA?</h2>
        <div className="w-14 h-[3px] bg-brand mx-auto mt-2" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {levels.map((level) => (
          <LevelCard key={level.title} {...level} />
        ))}
      </div>
    </section>
  );
}
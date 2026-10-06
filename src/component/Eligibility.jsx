import { eligibility } from "../data/content";

export default function Eligibility() {
  return (
    <section className="max-w-6xl mx-auto px-4 pb-12" aria-label="ACCA eligibility">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {eligibility.map((item) => (
          <div
            key={item.title}
            className="bg-white border border-gray-200 border-t-[3px] border-t-brand shadow-sm text-center p-4"
          >
            <h3 className="font-bold text-sm">{item.title}</h3>
            <p className="text-xs text-gray-600 mt-1">
              {item.icon} {item.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
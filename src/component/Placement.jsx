import { placement } from "../data/content";

export default function Placement() {
  return (
    <section className="bg-lilac py-12">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-extrabold">100% Placement Assistance</h2>
          <div className="w-14 h-[3px] bg-brand mx-auto mt-2" />
        </div>

        <div className="space-y-4">
          {placement.map((item) => (
            <div key={item.title}>
              <h3 className="font-bold">{item.title}</h3>
              <p className="text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
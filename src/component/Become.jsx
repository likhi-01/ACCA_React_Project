import { becomeList } from "../data/content";
import CallBackForm from "./CallBackForm";

export default function Hero({ onSubmit }) {
  return (
    <section className="bg-tint py-10">
      <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-2xl font-bold">Become ACCA in 18 months</h1>

          <p className="text-sm mt-2">
            Acquire globally recognized accountancy qualification, ACCA (also
            called Global CA), and get placed in top MNCs and Big4s.
          </p>

          <div className="flex flex-wrap gap-2 my-4">
            {becomeList.map((stat) => (
              <div
                key={stat.label}
                className="bg-white border border-gray-200 rounded px-3 py-1 text-center"
              >
                <span className="text-xs text-gray-500">{stat.label}</span>
                <strong className="block text-sm">{stat.value}</strong>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button className="bg-brand hover:bg-brand-dark text-white text-sm rounded px-4 py-2">
              Download Brochure
            </button>
            <span className="bg-red-600 text-white text-[10px] font-extrabold px-2 py-1 rounded-sm leading-tight">
              ACCA LEARNING
              <br />
              PARTNER
            </span>
          </div>
        </div>

        <CallBackForm onSubmit={onSubmit} />
      </div>
    </section>
  );
}
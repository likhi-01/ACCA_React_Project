import CallBackForm from "./CallBackForm";

export default function KickOff() {
  return (
    <section className="bg-tint py-12">
      <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-bold">
            Kick off your ACCA Prep journey with IndigoLearn
          </h2>
          <p className="text-sm mt-2">
            Sign-in and get instant access to our FREE Courses
          </p>
          <span className="inline-block mt-4 bg-red-600 text-white text-[10px] font-extrabold px-2 py-1 rounded-sm leading-tight">
            ACCA LEARNING
            <br />
            PARTNER
          </span>
        </div>

        <CallBackForm  />
      </div>
    </section>
  );
}
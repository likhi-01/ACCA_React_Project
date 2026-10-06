export default function FeatureCard({ icon, title, text }) {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-md p-6 text-center h-full">
      <div className="text-4xl mb-2">{icon}</div>
      <h3 className="font-bold text-brand">{title}</h3>
      <p className="text-sm text-gray-500 mt-2">{text}</p>
    </div>
  );
}
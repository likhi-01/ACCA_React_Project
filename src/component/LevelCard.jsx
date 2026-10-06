export default function LevelCard({ title, papers, items, compulsory, optional }) {
  return (
    <div className="bg-tint border border-gray-200 flex flex-col h-full">
      <div className="bg-brand text-white text-center font-bold py-3">{title}</div>

      <div className="p-4 text-sm flex-1">
        {items && (
          <ul className="list-disc pl-5 space-y-1">
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}

        {compulsory && (
          <>
            <p className="font-bold">Compulsory</p>
            <ul className="list-disc pl-5 space-y-1 mb-3">
              {compulsory.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p className="font-bold">Two out of the following</p>
            <ul className="list-disc pl-5 space-y-1">
              {optional.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </>
        )}
      </div>

      <div className="bg-brand text-white text-center font-bold text-sm py-2">{papers}</div>
    </div>
  );
}
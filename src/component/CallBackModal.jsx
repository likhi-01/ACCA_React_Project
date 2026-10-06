import { useEffect } from "react";

export default function CallBackModal({ show, onClose }) {
  useEffect(() => {
    if (!show) return;

    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg w-full max-w-sm p-6 text-center relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-3 right-4 text-2xl leading-none"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>

        <div className="text-5xl">✅</div>
        <h3 className="font-bold text-lg mt-2">Request received</h3>
        <p className="text-gray-500 text-sm mt-1">
          Thank you! Our counsellor will call you back shortly.
        </p>

        <button
          className="mt-4 bg-brand hover:bg-brand-dark text-white rounded px-6 py-2"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}
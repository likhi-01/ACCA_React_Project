import { useState } from "react";
import { useModal } from "../context/ModalContext";

const inputClass =
  "w-full border border-gray-300 rounded px-3 py-2 text-sm bg-white";

export default function CallBackForm() {
  const { openModal } = useModal();

  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [qualification, setQualification] = useState("");
  const [interest, setInterest] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (phone.trim() === "") {
      setError("Phone number is required");
      return;
    }

    if (phone.trim().length !== 10) {
      setError("Enter a valid 10-digit phone number");
      return;
    }

    setError("");
    openModal();

    setPhone("");
    setEmail("");
    setQualification("");
    setInterest("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-md shadow-lg p-5 space-y-3"
    >
      <p className="text-center text-sm font-semibold">
        Aspiring to be an ACCA? Get in touch with us!
      </p>

      <input
        className={inputClass}
        placeholder="Phone Number*"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      {error && <p className="text-red-600 text-xs">{error}</p>}

      <input
        className={inputClass}
        type="email"
        placeholder="Email ID"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <select
        className={inputClass}
        value={qualification}
        onChange={(e) => setQualification(e.target.value)}
      >
        <option value="">Current Qualification</option>
        <option>12th</option>
        <option>Graduate</option>
        <option>Post Graduate</option>
      </select>

      <select
        className={inputClass}
        value={interest}
        onChange={(e) => setInterest(e.target.value)}
      >
        <option value="">Interested In</option>
        <option>ACCA</option>
        <option>CMA</option>
        <option>CPA</option>
      </select>

      <button
        type="submit"
        className="w-full bg-brand hover:bg-brand-dark text-white rounded py-2 text-sm font-semibold"
      >
        Request Call Back
      </button>
    </form>
  );
}
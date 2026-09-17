"use client";

import { useState } from "react";
import type { Medicine } from "../medicines";

function MedicineCalculator({
  title,
  dosageMin,
  dosageMax,
  dosageUnit,
  frequency,
  maxDaily,
  name,
}: {
  title: string;
  dosageMin: number;
  dosageMax: number;
  dosageUnit: string;
  frequency: string;
  maxDaily: number;
  name: string;
}) {
  const [weight, setWeight] = useState<string>("");
  const [unit, setUnit] = useState<"kg" | "lb">("lb");
  const [result, setResult] = useState<string>("");

  const isPerLb = dosageUnit.includes("lb");

  const calculate = () => {
    const w = parseFloat(weight);
    if (!w || w <= 0) {
      setResult("Please enter a valid weight.");
      return;
    }
    const weightLb = unit === "lb" ? w : w * 2.20462;
    const weightKg = unit === "kg" ? w : w * 0.453592;
    const base = isPerLb ? weightLb : weightKg;
    const doseMin = (dosageMin * base).toFixed(1);
    const doseMax = (dosageMax * base).toFixed(1);
    setResult(
      `${name}: ${doseMin}–${doseMax} mg per dose. ${frequency}. Do not exceed ${maxDaily} mg/day. Always confirm with your veterinarian.`
    );
  };

  return (
    <div className="bg-white border border-teal-200 rounded-xl p-6 md:p-7 shadow-sm">
      <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-2">
        {title}
      </h2>
      <p className="text-sm text-slate-600 mb-5">
        Enter your dog's weight to get a personalized dose estimate.
      </p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Dog's Weight
          </label>
          <div className="flex gap-2">
            <input
              type="number"
              placeholder="Enter weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="flex-1 border border-slate-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
            <select
              value={unit}
              onChange={(e) => setUnit(e.target.value as "kg" | "lb")}
              className="border border-slate-300 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white"
            >
              <option value="lb">lb</option>
              <option value="kg">kg</option>
            </select>
          </div>
        </div>

        <button
          onClick={calculate}
          className="w-full bg-teal-700 hover:bg-teal-800 text-white font-semibold py-2.5 rounded-lg transition shadow-sm"
        >
          Calculate {name} Dose
        </button>
      </div>

      {result && (
        <div className="mt-5 p-4 bg-teal-50 border border-teal-200 rounded-lg text-sm text-slate-800 leading-relaxed">
          <strong className="text-slate-900">Result: </strong>
          {result}
        </div>
      )}
    </div>
  );
}

function Sidebar({
  currentId,
  allMedicines,
}: {
  currentId: string;
  allMedicines: Medicine[];
}) {
  const others = allMedicines.filter((m) => m.id !== currentId);

  return (
    <aside className="space-y-6">
      <div className="bg-white border border-slate-200 rounded-xl p-5">
        <h3 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wide">
          Popular Medications
        </h3>
        <ul className="space-y-3">
          {others.map((m) => (
            <li key={m.id}>
              <a
                href={`/${m.id}`}
                className="flex items-center justify-between group"
              >
                <div>
                  <span className="block text-sm font-semibold text-slate-800 group-hover:text-teal-700 transition">
                    {m.name}
                  </span>
                  <span className="block text-xs text-slate-500">
                    {m.generic}
                  </span>
                </div>
                <span className="text-slate-300 group-hover:text-teal-600 transition">
                  →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-5">
        <h3 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wide">
          Quick Links
        </h3>
        <ul className="space-y-2 text-sm">
          <li>
            <a href="/" className="text-slate-700 hover:text-teal-700 transition">
              🐕 Dosage Calculator
            </a>
          </li>
          <li>
            <a href="/sources" className="text-slate-700 hover:text-teal-700 transition">
              📚 Sources
            </a>
          </li>
          <li>
            <a href="/disclaimer" className="text-slate-700 hover:text-teal-700 transition">
              ⚠️ Disclaimer
            </a>
          </li>
          <li>
            <a href="/about" className="text-slate-700 hover:text-teal-700 transition">
              ℹ️ About Us
            </a>
          </li>
        </ul>
      </div>

      <div className="bg-teal-50 border border-teal-200 rounded-xl p-5">
        <div className="flex items-start gap-3">
          <span className="text-2xl">🩺</span>
          <div>
            <p className="text-sm font-bold text-teal-900 mb-1">
              Vet-informed content
            </p>
            <p className="text-xs text-teal-800 leading-relaxed">
              All dosage information is based on publicly available veterinary
              references. Always confirm with your own veterinarian.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
        <p className="text-xs font-bold text-amber-900 mb-2">
          ⚠️ Safety Reminder
        </p>
        <p className="text-xs text-amber-900 leading-relaxed">
          Never give medication based on this site alone. Contact your vet if
          your dog shows unusual symptoms.
        </p>
      </div>
    </aside>
  );
}

export default function MedicineClient({
  med,
  allMedicines,
}: {
  med: Medicine;
  allMedicines: Medicine[];
}) {
  const weightRows = [
    { lb: 5, kg: 2.3 },
    { lb: 10, kg: 4.5 },
    { lb: 15, kg: 6.8 },
    { lb: 20, kg: 9.1 },
    { lb: 25, kg: 11.3 },
    { lb: 30, kg: 13.6 },
    { lb: 40, kg: 18.1 },
    { lb: 50, kg: 22.7 },
    { lb: 60, kg: 27.2 },
    { lb: 75, kg: 34.0 },
    { lb: 100, kg: 45.4 },
  ];

  return (
    <main className="bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 pt-8 pb-12">
        <a
          href="/"
          className="inline-flex items-center gap-1 text-sm text-teal-700 hover:text-teal-900 font-medium mb-6 transition"
        >
          ← Back to Homepage
        </a>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2">
            <header className="mb-6">
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                {med.name} Dosage for Dogs
              </h1>
              <p className="text-base text-slate-600">
                Generic name: <strong>{med.generic}</strong>
              </p>
            </header>

            <div className="mb-6 flex flex-wrap gap-2">
              {med.prescription ? (
                <span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-3 py-1 rounded-full">
                  🔒 Prescription Required
                </span>
              ) : (
                <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                  ✓ Over-the-Counter (with vet guidance)
                </span>
              )}
              <span className="inline-block bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
                {med.category}
              </span>
            </div>

            <div className="bg-teal-50 border-l-4 border-teal-600 rounded-r-lg p-5 mb-8">
              <p className="text-xs font-bold text-teal-900 mb-2 tracking-wide">
                ⚡ QUICK ANSWER
              </p>
              <p className="text-slate-800 leading-relaxed">{med.quickAnswer}</p>
            </div>

            <section className="mb-10">
              <MedicineCalculator
                title={med.calculatorTitle}
                dosageMin={med.dosageMin}
                dosageMax={med.dosageMax}
                dosageUnit={med.dosageUnit}
                frequency={med.frequency}
                maxDaily={med.maxDaily}
                name={med.name}
              />
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                What is {med.name}?
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                {med.overview.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                How {med.name} Works in Dogs
              </h2>
              <p className="text-slate-700 leading-relaxed">{med.howItWorks}</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                {med.name} Dosage Chart by Weight
              </h2>
              <p className="text-sm text-slate-600 mb-4">
                Typical dose range:{" "}
                <strong>
                  {med.dosageMin}–{med.dosageMax} {med.dosageUnit}
                </strong>
                , {med.frequency}.
              </p>

              <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white">
                <table className="w-full text-sm">
                  <thead className="bg-slate-100 text-slate-700">
                    <tr>
                      <th className="text-left px-4 py-3 font-semibold">Weight (lb)</th>
                      <th className="text-left px-4 py-3 font-semibold">Weight (kg)</th>
                      <th className="text-left px-4 py-3 font-semibold">Dose (min)</th>
                      <th className="text-left px-4 py-3 font-semibold">Dose (max)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {weightRows.map((r) => {
                      const isPerLb = med.dosageUnit.includes("lb");
                      const base = isPerLb ? r.lb : r.kg;
                      const min = (med.dosageMin * base).toFixed(1);
                      const max = (med.dosageMax * base).toFixed(1);
                      return (
                        <tr key={r.lb} className="border-t border-slate-100">
                          <td className="px-4 py-2">{r.lb} lb</td>
                          <td className="px-4 py-2">{r.kg} kg</td>
                          <td className="px-4 py-2">{min} mg</td>
                          <td className="px-4 py-2">{max} mg</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-500 mt-3">
                ⚠️ Chart is a general guide. Your veterinarian may prescribe a
                different dose based on your dog's health, age, and condition.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                How Often to Give {med.name}
              </h2>
              <p className="text-slate-700 leading-relaxed">{med.howOften}</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Available Formulations
              </h2>
              <ul className="space-y-2 text-slate-700">
                {med.formulations.map((f) => (
                  <li key={f} className="flex gap-3">
                    <span className="text-teal-600">▸</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Common Uses in Dogs
              </h2>
              <ul className="space-y-2 text-slate-700">
                {med.uses.map((u) => (
                  <li key={u} className="flex gap-3">
                    <span className="text-teal-600">▸</span>
                    <span>{u}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Safe vs. Unsafe Forms of {med.name}
              </h2>
              <div className="space-y-3">
                {med.safeUnsafe.map((s, i) => (
                  <div
                    key={i}
                    className={`border rounded-lg p-4 ${
                      s.label === "Safe"
                        ? "bg-green-50 border-green-200"
                        : "bg-red-50 border-red-200"
                    }`}
                  >
                    <p
                      className={`font-bold mb-1 ${
                        s.label === "Safe" ? "text-green-800" : "text-red-800"
                      }`}
                    >
                      {s.label === "Safe" ? "✓ Safe" : "✗ Unsafe"}
                    </p>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {s.text}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Possible Side Effects
              </h2>
              <ul className="space-y-2 text-slate-700">
                {med.sideEffects.map((s) => (
                  <li key={s} className="flex gap-3">
                    <span className="text-amber-600">•</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Important Warnings
              </h2>
              <ul className="space-y-2 text-slate-700">
                {med.warnings.map((w) => (
                  <li key={w} className="flex gap-3">
                    <span className="text-red-600">⚠</span>
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                When to Call Your Veterinarian
              </h2>
              <p className="text-slate-700 mb-4">
                Contact your veterinarian or an emergency veterinary clinic
                immediately if any of the following occur:
              </p>
              <ul className="space-y-2 text-slate-700">
                {med.whenToCallVet.map((w, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-red-600">🚨</span>
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                {med.faqs.map((faq, i) => (
                  <details
                    key={i}
                    className="bg-white border border-slate-200 rounded-lg p-4 group"
                  >
                    <summary className="font-semibold text-slate-900 cursor-pointer list-none flex justify-between items-center">
                      {faq.q}
                      <span className="text-slate-400 group-open:rotate-180 transition">
                        ▾
                      </span>
                    </summary>
                    <p className="mt-3 text-slate-700 text-sm leading-relaxed">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Sources</h2>
              <ul className="space-y-2 text-slate-700 text-sm">
                {med.sources.map((s) => (
                  <li key={s} className="flex gap-3">
                    <span className="text-slate-400">▸</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-amber-50 border border-amber-200 rounded-xl p-5 md:p-6">
              <p className="font-bold text-slate-900 mb-2 text-base">
                ⚠️ Disclaimer
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">
                This information is provided for educational purposes only. It
                is not a substitute for professional veterinary advice. Dosage
                depends on your dog's weight, age, health condition, and other
                factors.{" "}
                <strong>
                  Always consult a licensed veterinarian before giving any
                  medication to your dog.
                </strong>{" "}
                If you suspect an overdose or a medical emergency, contact your
                veterinarian or an emergency veterinary clinic immediately.
              </p>
            </section>
          </article>

          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-6">
              <Sidebar currentId={med.id} allMedicines={allMedicines} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
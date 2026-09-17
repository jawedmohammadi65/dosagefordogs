"use client";

import { useState } from "react";
import { medicines } from "./medicines";

export default function Home() {
  const [weight, setWeight] = useState<string>("");
  const [unit, setUnit] = useState<"kg" | "lb">("kg");
  const [medId, setMedId] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const calculate = () => {
    const w = parseFloat(weight);
    if (!w || w <= 0) {
      setResult("Please enter a valid weight.");
      return;
    }
    if (!medId) {
      setResult("Please select a medication.");
      return;
    }
    const med = medicines.find((m) => m.id === medId);
    if (!med) return;

    const isPerLb = med.dosageUnit.includes("lb");
    const weightLb = unit === "lb" ? w : w * 2.20462;
    const weightKg = unit === "kg" ? w : w * 0.453592;
    const base = isPerLb ? weightLb : weightKg;

    const doseMin = (med.dosageMin * base).toFixed(1);
    const doseMax = (med.dosageMax * base).toFixed(1);

    setResult(
      `${med.name} (${med.generic}): ${doseMin}–${doseMax} mg per dose. ${med.frequency}. Do not exceed ${med.maxDaily} mg/day. Always confirm with your veterinarian.`
    );
  };

  const homeFaqs = [
    {
      q: "How do I calculate the right dosage for my dog?",
      a: "Dosage for dogs is calculated based on body weight and the specific medication. Enter your dog's weight in our calculator and select the medication to see a typical dose range. Always confirm the final dose with your veterinarian.",
    },
    {
      q: "Is this dosage calculator accurate for all dog breeds?",
      a: "The calculator uses weight-based guidelines from veterinary references. It does not factor in breed-specific sensitivities, age, medical conditions, or other medications. It is a starting point — not a prescription.",
    },
    {
      q: "Can I use human medications for my dog?",
      a: "Some human medications (like plain Benadryl or Zyrtec) are used in dogs, but only at specific doses. Many human medications — including ibuprofen, acetaminophen (paracetamol), and naproxen — are toxic to dogs and can be fatal. Always check with your veterinarian first.",
    },
    {
      q: "What if I give my dog too much medication?",
      a: "Contact your veterinarian, an emergency vet clinic, or a pet poison control hotline immediately. Do not wait for symptoms. The ASPCA Poison Control number is (888) 426-4435.",
    },
    {
      q: "Why does the calculator ask for weight in kg or lb?",
      a: "Some medications are dosed in mg per kg, others in mg per lb. Our calculator converts automatically so you can use whichever unit you know.",
    },
    {
      q: "Are the dosage ranges on this site safe for puppies?",
      a: "The ranges shown are general adult dog guidelines. Puppies, pregnant dogs, and nursing mothers often require different dosing. Always consult a veterinarian for puppies.",
    },
  ];

  return (
    <main className="bg-slate-50">
      {/* Hero */}
      <section className="bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-6xl mx-auto px-4 pt-14 pb-12 text-center">
          <span className="inline-block bg-teal-50 text-teal-800 text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-wide">
            🩺 VET-INFORMED DOSAGE TOOL
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            Dosage for Dogs — Calculator & Chart
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Calculate weight-based medication dosages for your dog. Our tool
            covers Benadryl, Trazodone, Gabapentin, Carprofen, Zyrtec, and
            Meloxicam. Always confirm with your veterinarian before giving any
            medication.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="max-w-2xl mx-auto px-4 py-12">
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 md:p-8">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-slate-900 mb-1">
              Calculate Dosage
            </h2>
            <p className="text-sm text-slate-600">
              Enter your dog's weight and choose a medication.
            </p>
          </div>

          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Dog's Weight
              </label>
              <div className="flex gap-3">
                <input
                  type="number"
                  placeholder="Enter weight"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="flex-1 border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
                <select
                  value={unit}
                  onChange={(e) => setUnit(e.target.value as "kg" | "lb")}
                  className="border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white"
                >
                  <option value="kg">kg</option>
                  <option value="lb">lb</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Medication
              </label>
              <select
                value={medId}
                onChange={(e) => setMedId(e.target.value)}
                className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white"
              >
                <option value="">Select medication</option>
                {medicines.map((m) => (
                  <option key={m.id} value={m.id}>
                    {m.name} ({m.generic})
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={calculate}
              className="w-full bg-teal-700 hover:bg-teal-800 text-white font-semibold py-3 rounded-lg transition shadow-sm"
            >
              Calculate Dosage
            </button>
          </div>

          {result && (
            <div className="mt-6 p-4 bg-teal-50 border border-teal-200 rounded-lg text-sm text-slate-800 leading-relaxed">
              <strong className="text-slate-900">Result: </strong>
              {result}
            </div>
          )}
        </div>

        <p className="mt-6 text-xs text-slate-500 text-center leading-relaxed max-w-lg mx-auto">
          ⚠️ This calculator is for informational purposes only. Always consult
          your veterinarian before administering any medication to your dog.
        </p>
      </section>

      {/* Popular Medications */}
      <section className="bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
              Popular Medications
            </h2>
            <p className="text-slate-600 text-sm">
              Detailed dosage guides, charts, and safety information.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {medicines.map((med) => (
              <a
                key={med.id}
                href={`/${med.id}`}
                className="group bg-white border border-slate-200 rounded-xl p-5 hover:border-teal-400 hover:shadow-md transition"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-bold text-slate-900 group-hover:text-teal-700 transition">
                      {med.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {med.generic}
                    </p>
                  </div>
                  <span className="text-slate-300 group-hover:text-teal-600 transition">
                    →
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <span className="text-[10px] font-semibold uppercase tracking-wide bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                    {med.category}
                  </span>
                  {med.prescription ? (
                    <span className="text-[10px] font-semibold uppercase tracking-wide bg-red-50 text-red-700 px-2 py-0.5 rounded">
                      Rx
                    </span>
                  ) : (
                    <span className="text-[10px] font-semibold uppercase tracking-wide bg-green-50 text-green-700 px-2 py-0.5 rounded">
                      OTC
                    </span>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust */}
      <section className="bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
              Why Trust DosageForDogs?
            </h2>
            <p className="text-slate-600 text-sm">
              Independent, source-backed dosage information for dog owners.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="text-3xl mb-3">📚</div>
              <h3 className="font-semibold text-slate-900 mb-2">
                Source-Backed
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                All dosage ranges are based on publicly available veterinary
                references including the Merck Veterinary Manual and Plumb's.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="text-3xl mb-3">🩺</div>
              <h3 className="font-semibold text-slate-900 mb-2">
                Vet-First Approach
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We always recommend confirming with your veterinarian. This
                site is educational, not a prescription.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="font-semibold text-slate-900 mb-2">
                Safety Focused
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Clear warnings, side effects, and emergency guidance on every
                medication page.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 py-14">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 text-center">
            How the Dosage Calculator Works
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              Our calculator uses weight-based dosage guidelines published in
              standard veterinary references. For each medication, we use a
              recommended dose range (for example, 1–2 mg per pound for
              Benadryl) and multiply it by your dog's weight.
            </p>
            <p>
              The result shows a typical dose range in milligrams, along with
              how often the medication is usually given and the maximum daily
              dose. Different dogs may require different doses depending on
              their age, health conditions, and other medications they are
              taking.
            </p>
            <p>
              <strong>Important:</strong> This calculator does not replace
              professional veterinary advice. It is designed to help you
              understand typical dosing ranges so you can have better-informed
              conversations with your vet.
            </p>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
              Dog Health Guides
            </h2>
            <p className="text-slate-600 text-sm">
              Practical, vet-informed articles for dog owners.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                slug: "how-often-can-i-give-my-dog-benadryl",
                title: "How Often Can I Give My Dog Benadryl?",
                excerpt:
                  "Safe dosing schedule, maximum daily dose, and when to call your vet.",
              },
              {
                slug: "trazodone-vs-gabapentin-for-dogs",
                title: "Trazodone vs Gabapentin for Dogs",
                excerpt:
                  "Which one is right for anxiety, pain, or both? A comparison guide.",
              },
              {
                slug: "signs-of-pain-in-dogs",
                title: "Signs of Pain in Dogs",
                excerpt:
                  "The subtle behavioral and physical signs every owner should know.",
              },
            ].map((post) => (
              <a
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white border border-slate-200 rounded-xl p-5 hover:border-teal-400 hover:shadow-md transition"
              >
                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-teal-700 transition">
                  {post.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {post.excerpt}
                </p>
                <span className="inline-block mt-3 text-xs font-semibold text-teal-700">
                  Read article →
                </span>
              </a>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="/blog"
              className="inline-block bg-white border border-slate-300 hover:border-teal-500 hover:text-teal-700 text-slate-700 font-semibold px-6 py-3 rounded-lg transition"
            >
              View All Articles
            </a>
          </div>
        </div>
      </section>

       {/* FAQ */}
      <section className="bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-14">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 text-center">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm text-center mb-10">
            Common questions about dog medication and dosage.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {homeFaqs.map((faq, i) => (
              <details
                key={i}
                className="bg-slate-50 border border-slate-200 rounded-lg p-4 group"
              >
                <summary className="font-semibold text-slate-900 cursor-pointer list-none flex justify-between items-center gap-3">
                  <span>{faq.q}</span>
                  <span className="text-slate-400 group-open:rotate-180 transition shrink-0">
                    ▾
                  </span>
                </summary>
                <p className="mt-3 text-slate-700 text-sm leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-amber-50 border-t border-amber-200">
        <div className="max-w-3xl mx-auto px-4 py-10">
          <p className="text-sm text-slate-700 leading-relaxed text-center">
            <strong className="text-slate-900">Disclaimer: </strong>
            DosageForDogs.com is an educational resource. It is not a
            substitute for professional veterinary advice. Always consult a
            licensed veterinarian before giving any medication to your dog.
          </p>
        </div>
      </section>
    </main>
  );
}
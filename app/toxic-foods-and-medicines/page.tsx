export default function ToxicFoods() {
  return (
    <main className="bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <a
          href="/"
          className="inline-flex items-center gap-1 text-sm text-teal-700 hover:text-teal-900 font-medium mb-6 transition"
        >
          ← Back to Homepage
        </a>

        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Foods and Medicines Toxic to Dogs
        </h1>
        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
          Some common human foods and medications can be highly dangerous — even
          fatal — to dogs. This guide covers the most important toxins every dog
          owner should know about. If you suspect your dog has ingested any of
          these, contact your veterinarian or a pet poison control center
          immediately.
        </p>

        {/* Emergency Box */}
        <div className="bg-red-50 border-l-4 border-red-600 rounded-r-lg p-5 mb-10">
          <p className="font-bold text-red-900 mb-2">🚨 Emergency Contacts</p>
          <ul className="space-y-1 text-sm text-red-900">
            <li>
              <strong>ASPCA Animal Poison Control:</strong> (888) 426-4435
            </li>
            <li>
              <strong>Pet Poison Helpline:</strong> (855) 764-7661
            </li>
            <li>
              <strong>Your veterinarian or nearest emergency vet clinic</strong>
            </li>
          </ul>
        </div>

        {/* Toxic Foods */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            🍫 Foods Toxic to Dogs
          </h2>
          <div className="space-y-4">
            {[
              {
                name: "Chocolate",
                desc: "Contains theobromine and caffeine, which dogs cannot metabolize efficiently. Dark chocolate and baking chocolate are the most dangerous. Symptoms include vomiting, diarrhea, rapid heart rate, tremors, and seizures.",
              },
              {
                name: "Grapes and Raisins",
                desc: "Even small amounts can cause acute kidney failure in dogs. The exact toxic compound is unknown. Symptoms may not appear for 12-24 hours and include vomiting, lethargy, and decreased urination.",
              },
              {
                name: "Onions, Garlic, Chives, Leeks",
                desc: "All members of the Allium family damage red blood cells, leading to anemia. Toxic whether raw, cooked, or powdered. Symptoms include weakness, pale gums, and dark urine.",
              },
              {
                name: "Xylitol",
                desc: "A sugar substitute found in sugar-free gum, candy, some peanut butters, and baked goods. Causes rapid insulin release, leading to dangerously low blood sugar and potential liver failure.",
              },
              {
                name: "Alcohol",
                desc: "Even small amounts can cause poisoning in dogs. Symptoms include vomiting, disorientation, tremors, difficulty breathing, and in severe cases, coma or death.",
              },
              {
                name: "Macadamia Nuts",
                desc: "Cause weakness, tremors, vomiting, and hyperthermia. Symptoms typically appear within 12 hours and resolve within 48 hours with supportive care.",
              },
              {
                name: "Avocado",
                desc: "Contains persin, which can cause vomiting and diarrhea in dogs. The pit also poses a choking and obstruction hazard.",
              },
              {
                name: "Raw Yeast Dough",
                desc: "Expands in the stomach and produces alcohol as it ferments, leading to bloat and alcohol poisoning.",
              },
            ].map((item) => (
              <div
                key={item.name}
                className="bg-white border border-slate-200 rounded-xl p-5"
              >
                <h3 className="font-bold text-slate-900 mb-2">{item.name}</h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Toxic Medicines */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            💊 Human Medicines Toxic to Dogs
          </h2>
          <div className="space-y-4">
            {[
              {
                name: "Acetaminophen (Tylenol, Paracetamol)",
                desc: "Can cause liver damage and blood disorders in dogs. Especially dangerous for dogs already on other medications. Never give without veterinary guidance.",
              },
              {
                name: "Ibuprofen (Advil, Motrin)",
                desc: "NSAID that can cause severe stomach ulcers, kidney failure, and seizures in dogs. Never give human ibuprofen to dogs.",
              },
              {
                name: "Naproxen (Aleve)",
                desc: "Long-acting NSAID that is highly toxic to dogs. Even a single pill can cause serious harm to a small dog.",
              },
              {
                name: "Aspirin (Human Formulations)",
                desc: "While some vets may prescribe buffered aspirin for specific conditions, human aspirin products can cause stomach bleeding and kidney problems in dogs. Never use without veterinary approval.",
              },
              {
                name: "Antidepressants (SSRIs, MAOIs)",
                desc: "Can cause serotonin syndrome — a potentially fatal condition with symptoms including agitation, tremors, rapid heart rate, and hyperthermia.",
              },
              {
                name: "ADHD Medications (Amphetamines)",
                desc: "Highly dangerous to dogs. Can cause tremors, seizures, rapid heart rate, and death.",
              },
              {
                name: "Sleep Medications",
                desc: "Overdose can cause severe sedation, loss of coordination, and respiratory depression.",
              },
              {
                name: "Birth Control Pills",
                desc: "Can cause bone marrow suppression and blood clotting disorders in dogs.",
              },
            ].map((item) => (
              <div
                key={item.name}
                className="bg-white border border-slate-200 rounded-xl p-5"
              >
                <h3 className="font-bold text-slate-900 mb-2">{item.name}</h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Toxic Plants (short list) */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            🌿 Common Toxic Plants
          </h2>
          <div className="bg-white border border-slate-200 rounded-xl p-5">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-700">
              {[
                "Sago Palm",
                "Lilies (especially for cats, but also dogs)",
                "Azaleas & Rhododendrons",
                "Oleander",
                "Foxglove",
                "Castor Bean",
                "Cyclamen",
                "Kalanchoe",
                "Yew",
                "Autumn Crocus",
              ].map((plant) => (
                <li key={plant} className="flex gap-2">
                  <span className="text-red-600">•</span>
                  <span>{plant}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* When to Call Vet */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            When to Call Your Veterinarian Immediately
          </h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
            <ul className="space-y-2 text-sm text-slate-800">
              {[
                "You know or suspect your dog ate any of the items above",
                "Your dog is vomiting, having diarrhea, or showing signs of pain",
                "Your dog is lethargic, disoriented, or having difficulty breathing",
                "Your dog has tremors, seizures, or loss of coordination",
                "Your dog's gums are pale, yellow, or blue",
                "Your dog collapses or loses consciousness",
              ].map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-red-600">🚨</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="bg-yellow-50 border border-yellow-300 rounded-xl p-5 md:p-6">
          <p className="font-bold text-slate-900 mb-2 text-base">
            ⚠️ Disclaimer
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">
            This information is provided for educational purposes only. It is
            not a substitute for professional veterinary advice. If you suspect
            your dog has ingested a toxic substance, contact your veterinarian
            or a pet poison control center immediately. Do not wait for symptoms
            to appear.
          </p>
        </section>
      </div>
    </main>
  );
}
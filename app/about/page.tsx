export default function About() {
  return (
    <main className="bg-slate-50">
      <article className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
          About DosageForDogs
        </h1>
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>
            DosageForDogs is an informational tool that helps dog owners estimate
            weight-based medication dosages. Our goal is to make reliable,
            source-backed information accessible to pet owners.
          </p>
          <p>
            All dosage ranges shown on this website are based on publicly
            available veterinary references and manufacturer guidelines. However,
            every dog is different, and only a licensed veterinarian can
            determine the correct medication and dose for your specific pet.
          </p>
          <p className="font-semibold text-slate-900">
            We are not a substitute for professional veterinary advice. Always
            consult your veterinarian before giving any medication to your dog.
          </p>
        </div>
      </article>
    </main>
  );
}
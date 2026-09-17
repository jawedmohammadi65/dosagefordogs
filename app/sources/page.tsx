export default function Sources() {
  return (
    <main className="bg-slate-50">
      <article className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
          Sources & References
        </h1>
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>
            Dosage information on this site is based on publicly available
            veterinary references. We recommend verifying all information with
            your veterinarian.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 mt-8">
            References
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <a
                href="https://www.fda.gov/animal-veterinary"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-700 hover:text-teal-900 underline"
              >
                U.S. Food and Drug Administration (FDA) — Center for Veterinary Medicine
              </a>
            </li>
            <li>
              <a
                href="https://www.merckvetmanual.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-700 hover:text-teal-900 underline"
              >
                Merck Veterinary Manual
              </a>
            </li>
            <li>
              <a
                href="https://plumbs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-700 hover:text-teal-900 underline"
              >
                Plumb's Veterinary Drug Handbook
              </a>
            </li>
            <li>
              <a
                href="https://www.avma.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-700 hover:text-teal-900 underline"
              >
                American Veterinary Medical Association (AVMA)
              </a>
            </li>
          </ul>

          <p className="text-sm text-slate-500 mt-8">
            Note: Always confirm dosages with a licensed veterinarian before
            administering any medication.
          </p>
        </div>
      </article>
    </main>
  );
}
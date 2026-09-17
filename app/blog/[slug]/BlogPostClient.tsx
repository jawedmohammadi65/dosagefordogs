import type { BlogPost } from "../posts";

const medicineLinks: Record<string, string> = {
  benadryl: "Benadryl Dosage for Dogs",
  trazodone: "Trazodone Dosage for Dogs",
  gabapentin: "Gabapentin Dosage for Dogs",
  carprofen: "Carprofen Dosage for Dogs",
  zyrtec: "Zyrtec Dosage for Dogs",
  meloxicam: "Meloxicam Dosage for Dogs",
};

export default function BlogPostClient({ post }: { post: BlogPost }) {
  return (
    <main className="bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <a
          href="/blog"
          className="inline-flex items-center gap-1 text-sm text-teal-700 hover:text-teal-900 font-medium mb-6 transition"
        >
          ← Back to Blog
        </a>

        <article>
          <header className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-semibold uppercase tracking-wide bg-teal-50 text-teal-800 px-2 py-0.5 rounded">
                {post.category}
              </span>
              <span className="text-xs text-slate-500">{post.readTime}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              {post.title}
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              {post.excerpt}
            </p>
          </header>

          <div className="prose prose-slate max-w-none">
            {post.sections.map((section, i) => {
              if (section.type === "paragraph") {
                return (
                  <p key={i} className="mb-5 text-slate-700 leading-relaxed">
                    {section.text}
                  </p>
                );
              }
              if (section.type === "heading") {
                return (
                  <h2
                    key={i}
                    className="text-2xl font-bold text-slate-900 mt-10 mb-4"
                  >
                    {section.text}
                  </h2>
                );
              }
              if (section.type === "list") {
                return (
                  <ul key={i} className="mb-6 space-y-2">
                    {section.items.map((item, j) => (
                      <li
                        key={j}
                        className="flex gap-3 text-slate-700 leading-relaxed"
                      >
                        <span className="text-teal-600 mt-1">▸</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              if (section.type === "callout") {
                return (
                  <div
                    key={i}
                    className="bg-teal-50 border-l-4 border-teal-600 rounded-r-lg p-5 my-6"
                  >
                    <p className="text-sm text-slate-800 leading-relaxed">
                      <strong>💡 Note: </strong>
                      {section.text}
                    </p>
                  </div>
                );
              }
              if (section.type === "link") {
                return (
                  <div key={i} className="my-6">
                    <a
                      href={section.href}
                      className="inline-block bg-teal-700 hover:bg-teal-800 text-white font-semibold px-5 py-3 rounded-lg transition shadow-sm"
                    >
                      {section.text} {section.label} →
                    </a>
                  </div>
                );
              }
              return null;
            })}
          </div>

          {/* Related Medicines */}
          {post.relatedMedicineIds.length > 0 && (
            <section className="mt-12 pt-8 border-t border-slate-200">
              <h2 className="text-lg font-bold text-slate-900 mb-4">
                Related Dosage Guides
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {post.relatedMedicineIds.map((id) => (
                  <a
                    key={id}
                    href={`/${id}`}
                    className="bg-white border border-slate-200 rounded-lg p-4 hover:border-teal-400 hover:shadow-sm transition group"
                  >
                    <span className="block font-semibold text-slate-800 group-hover:text-teal-700 transition">
                      {medicineLinks[id] || id}
                    </span>
                    <span className="block text-xs text-slate-500 mt-1">
                      Calculator + chart + safety info
                    </span>
                  </a>
                ))}
              </div>
            </section>
          )}

          {/* FAQ */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {post.faqs.map((faq, i) => (
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

          {/* Sources */}
          <section className="mt-12">
            <h2 className="text-lg font-bold text-slate-900 mb-3">Sources</h2>
            <ul className="space-y-2 text-slate-700 text-sm">
              {post.sources.map((s) => (
                <li key={s} className="flex gap-3">
                  <span className="text-slate-400">▸</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Disclaimer */}
          <section className="bg-amber-50 border border-amber-200 rounded-xl p-5 md:p-6 mt-10">
            <p className="font-bold text-slate-900 mb-2 text-base">
              ⚠️ Disclaimer
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              This article is for educational purposes only and is not a
              substitute for professional veterinary advice. Always consult a
              licensed veterinarian before giving any medication to your dog.
            </p>
          </section>

          {/* More Posts */}
          <section className="mt-10 pt-8 border-t border-slate-200">
            <a
              href="/blog"
              className="text-teal-700 hover:text-teal-900 font-medium"
            >
              ← Read more articles on our blog
            </a>
          </section>
        </article>
      </div>
    </main>
  );
}
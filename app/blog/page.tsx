import { posts } from "./posts";

export const metadata = {
  title: "Dog Health Blog — Dosage Guides & Medication Tips",
  description:
    "Informational articles about dog medications, dosage safety, symptoms to watch for, and practical advice for dog owners. Vet-informed and source-backed.",
  alternates: {
    canonical: "https://dosagefordogs.com/blog",
  },
};

export default function BlogIndex() {
  return (
    <main className="bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Dog Health Blog
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Practical, vet-informed articles about dog medications, dosage
            safety, symptoms to watch for, and everyday care tips.
          </p>
        </header>

        <div className="space-y-4">
          {posts.map((post) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block bg-white border border-slate-200 rounded-xl p-6 hover:border-teal-400 hover:shadow-md transition"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-semibold uppercase tracking-wide bg-teal-50 text-teal-800 px-2 py-0.5 rounded">
                  {post.category}
                </span>
                <span className="text-xs text-slate-500">
                  {post.readTime}
                </span>
              </div>
              <h2 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-teal-700">
                {post.title}
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {post.excerpt}
              </p>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
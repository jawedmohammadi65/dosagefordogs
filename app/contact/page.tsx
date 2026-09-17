export default function Contact() {
  return (
    <main className="bg-slate-50">
      <article className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
          Contact Us
        </h1>
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>
            Have a question, suggestion, or correction? We'd love to hear from
            you.
          </p>
          <p>
            Email:{" "}
            <strong className="text-slate-900">contact@dosagefordogs.com</strong>
          </p>
          <p className="text-sm text-slate-500">
            We aim to respond within 2-3 business days. For urgent medical
            concerns about your dog, please contact your veterinarian
            immediately.
          </p>
        </div>
      </article>
    </main>
  );
}
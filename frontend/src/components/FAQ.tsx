function FAQ() {
  const faqs = [
    {
      question: "Why focus on the oceans?",
      answer:
        "Oceans cover over 70% of Earth and remain one of the least explored parts of our planet.",
    },
    {
      question: "What is Aqua Forge?",
      answer:
        "Aqua Forge is an AI-powered platform for marine monitoring, prediction and conservation.",
    },
    {
      question: "Can students contribute?",
      answer:
        "Yes. Students, researchers and developers are welcome to contribute.",
    },
  ];

  return (
    <section className="bg-slate-950 text-white py-28 px-6">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-20">
          <p className="text-cyan-400 uppercase tracking-[0.3em] font-semibold mb-4">
            Questions
          </p>

          <h2 className="text-5xl font-bold">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-6">

          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="bg-slate-900/70 border border-slate-800 backdrop-blur-lg rounded-2xl p-8 transition-all duration-300 hover:border-cyan-400"
            >
              <h3 className="text-2xl font-semibold mb-4">
                {faq.question}
              </h3>

              <p className="text-gray-400 leading-8">
                {faq.answer}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default FAQ;
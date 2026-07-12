function Roadmap() {
  const roadmap = [
    {
      year: "2026",
      title: "Research",
      description:
        "Research marine ecosystems, AI models and global ocean datasets.",
    },
    {
      year: "2027",
      title: "Prototype",
      description:
        "Develop the first AI-powered ocean intelligence platform.",
    },
    {
      year: "2028",
      title: "Pilot Deployment",
      description:
        "Deploy prototypes with research institutions and conservation teams.",
    },
    {
      year: "2030",
      title: "Global Marine Network",
      description:
        "Connect satellites, sensors, AI and researchers into one ecosystem.",
    },
  ];

  return (
    <section className="bg-slate-900 text-white py-28 px-6">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-20">
          <p className="text-cyan-400 uppercase tracking-[0.3em] font-semibold mb-4">
            Future Vision
          </p>

          <h2 className="text-5xl font-bold">
            Our Roadmap
          </h2>
        </div>

        <div className="relative border-l-2 border-cyan-500 ml-6">

          {roadmap.map((item) => (
            <div key={item.year} className="relative mb-16 pl-12">

              <div className="absolute -left-[14px] top-2 w-6 h-6 rounded-full bg-cyan-400"></div>

              <p className="text-cyan-400 font-bold text-lg">
                {item.year}
              </p>

              <h3 className="text-3xl font-bold mt-2">
                {item.title}
              </h3>

              <p className="text-gray-400 mt-3 leading-8">
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Roadmap;
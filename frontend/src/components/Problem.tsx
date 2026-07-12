function Problem() {
  return (
    <section className="bg-slate-950 text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-16">
          Challenges Facing Our Oceans
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-slate-900/70 border border-slate-800 backdrop-blur-lg rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)]">
            <h3 className="text-2xl font-bold mb-4">
              Ocean Blind Spots
            </h3>

            <p className="text-gray-400 leading-7">
              Vast regions of our oceans remain unexplored and poorly monitored.
            </p>
          </div>

          <div className="bg-slate-900/70 border border-slate-800 backdrop-blur-lg rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)]">
            <h3 className="text-2xl font-bold mb-4">
              Coral Damage
            </h3>

            <p className="text-gray-400 leading-7">
              Coral reefs are disappearing due to rising temperatures and pollution.
            </p>
          </div>

          <div className="bg-slate-900/70 border border-slate-800 backdrop-blur-lg rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)]">
            <h3 className="text-2xl font-bold mb-4">
              Climate Change
            </h3>

            <p className="text-gray-400 leading-7">
              Changing ocean conditions affect weather, fisheries and ecosystems.
            </p>
          </div>

          <div className="bg-slate-900/70 border border-slate-800 backdrop-blur-lg rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)]">
            <h3 className="text-2xl font-bold mb-4">
              Biodiversity Loss
            </h3>

            <p className="text-gray-400 leading-7">
              Marine species are disappearing faster than we can study them.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Problem;
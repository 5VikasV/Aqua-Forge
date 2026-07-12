function Solution() {
  return (
    <section className="bg-slate-900 text-white py-28 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-20">
          How Aqua Forge Works
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-slate-950/70 border border-slate-800 backdrop-blur-lg rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)]">
            <div className="w-14 h-14 rounded-full bg-cyan-500 text-black flex items-center justify-center text-2xl font-bold mb-6">
              1
            </div>

            <h3 className="text-2xl font-bold mb-4">
              Collect
            </h3>

            <p className="text-gray-400 leading-7">
              Gather real-time marine data from sensors, satellites and autonomous drones.
            </p>
          </div>

          <div className="bg-slate-950/70 border border-slate-800 backdrop-blur-lg rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)]">
            <div className="w-14 h-14 rounded-full bg-cyan-500 text-black flex items-center justify-center text-2xl font-bold mb-6">
              2
            </div>

            <h3 className="text-2xl font-bold mb-4">
              Analyze
            </h3>

            <p className="text-gray-400 leading-7">
              AI processes millions of data points to detect trends and anomalies.
            </p>
          </div>

          <div className="bg-slate-950/70 border border-slate-800 backdrop-blur-lg rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)]">
            <div className="w-14 h-14 rounded-full bg-cyan-500 text-black flex items-center justify-center text-2xl font-bold mb-6">
              3
            </div>

            <h3 className="text-2xl font-bold mb-4">
              Predict
            </h3>

            <p className="text-gray-400 leading-7">
              Machine learning forecasts environmental changes before they become critical.
            </p>
          </div>

          <div className="bg-slate-950/70 border border-slate-800 backdrop-blur-lg rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)]">
            <div className="w-14 h-14 rounded-full bg-cyan-500 text-black flex items-center justify-center text-2xl font-bold mb-6">
              4
            </div>

            <h3 className="text-2xl font-bold mb-4">
              Protect
            </h3>

            <p className="text-gray-400 leading-7">
              Deliver actionable insights to researchers and conservation organizations.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Solution;
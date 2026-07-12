import { problems } from "../data/problems";

function Problem() {
  return (
    <section className="bg-slate-950 text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-16">
          Challenges Facing Our Oceans
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {problems.map((problem) => (
            <div
              key={problem.title}
              className="bg-slate-900/70 border border-slate-800 backdrop-blur-lg rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)]"
            >
              <h3 className="text-2xl font-bold mb-4">
                {problem.title}
              </h3>

              <p className="text-gray-400 leading-7">
                {problem.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Problem;
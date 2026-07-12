function Hero() {
  return (
    <section className="min-h-screen bg-slate-950 text-white flex flex-col justify-center items-center text-center px-6 pt-20">
      <h1 className="text-6xl font-bold mb-6">
        The Future of Ocean Intelligence
      </h1>

      <p className="text-xl max-w-3xl text-gray-300 mb-8">
        Harnessing AI, autonomous systems, and real-time marine intelligence
        to understand, protect, and transform our oceans.
      </p>

      <div className="flex gap-4">
        <button className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700">
          Explore Project
        </button>

        <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black">
          GitHub
        </button>
      </div>

    </section>
  );
}

export default Hero;
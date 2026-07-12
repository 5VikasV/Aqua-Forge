function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/70 backdrop-blur-lg border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        <h1 className="text-3xl font-bold text-cyan-400">
          Aqua Forge
        </h1>

        <ul className="flex gap-10 text-gray-300 font-medium">
          <li>
            <a href="#" className="hover:text-cyan-400 transition">
              Home
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-cyan-400 transition">
              Vision
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-cyan-400 transition">
              Technology
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-cyan-400 transition">
              Contact
            </a>
          </li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;
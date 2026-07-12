import { GitBranch, LinkIcon, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row justify-between items-center gap-10">

          <div>
            <h2 className="text-3xl font-bold text-cyan-400">
              Aqua Forge
            </h2>

            <p className="text-gray-400 mt-3 max-w-md">
              Building the future of ocean intelligence through Artificial
              Intelligence, satellite data and autonomous marine systems.
            </p>
          </div>

          <div className="flex gap-6">

            <a
              href="#"
              className="p-3 rounded-full bg-slate-800 hover:bg-cyan-500 hover:text-black transition"
            >
              <GitBranch size={22} />
            </a>

            <a
              href="#"
              className="p-3 rounded-full bg-slate-800 hover:bg-cyan-500 hover:text-black transition"
            >
              <LinkIcon size={22} />
            </a>

            <a
              href="#"
              className="p-3 rounded-full bg-slate-800 hover:bg-cyan-500 hover:text-black transition"
            >
              <Mail size={22} />
            </a>

          </div>

        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-gray-500">
          © 2026 Aqua Forge. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;
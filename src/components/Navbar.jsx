import { FaSearch } from "react-icons/fa"

function Navbar({ searchTerm, setSearchTerm }) {

  return (
    <div className="h-24 backdrop-blur-xl bg-white/5 border-b border-white/10 flex items-center justify-between px-8 sticky top-0 z-50">

      <div>

        <h2 className="text-white text-3xl font-bold">
          Personal Hub
        </h2>

        <p className="text-zinc-400 text-sm mt-1">
          Organize your digital world
        </p>

      </div>


      <div className="flex items-center gap-5">

        <div className="relative">

          <input
            type="text"
            placeholder="Search links..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-zinc-900/80 text-white px-6 py-4 pr-14 rounded-3xl outline-none w-80 border border-zinc-800"
          />

          <FaSearch className="absolute right-5 top-1/2 -translate-y-1/2 text-zinc-500" />

        </div>


        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 shadow-lg shadow-purple-500/20">
        </div>

      </div>

    </div>
  )
}

export default Navbar
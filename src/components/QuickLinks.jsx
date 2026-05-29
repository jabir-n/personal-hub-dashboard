import { useEffect, useState } from "react"
import { motion } from "framer-motion"

function QuickLinks({
  selectedMenu,
  links,
  setLinks,
  searchTerm
}) {

  const [siteName, setSiteName] = useState("")
  const [siteUrl, setSiteUrl] = useState("")
  const [category, setCategory] = useState("Gaming")


  useEffect(() => {
    localStorage.setItem(
      "quickLinks",
      JSON.stringify(links)
    )
  }, [links])


  const addLink = () => {

    if (!siteName || !siteUrl) return

    const newLink = {
      name: siteName,
      url: siteUrl,
      category: category,
      favorite: false
    }

    setLinks([...links, newLink])

    setSiteName("")
    setSiteUrl("")
  }

  const handleKeyDown = (e) => {

  if (e.key === "Enter") {
    addLink()
  }

}


  const deleteLink = (index) => {

    const updatedLinks = links.filter(
      (_, i) => i !== index
    )

    setLinks(updatedLinks)
  }


  const toggleFavorite = (index) => {

    const updatedLinks = [...links]

    updatedLinks[index].favorite =
      !updatedLinks[index].favorite

    setLinks(updatedLinks)
  }


  const filteredLinks = links.filter((link) => {

  const matchesMenu = (() => {

    if (selectedMenu === "Favorites") {
      return link.favorite
    }

    if (selectedMenu === "Dashboard") {
      return true
    }

    return link.category === selectedMenu
  })()


  const matchesSearch =
    link.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase())


  return matchesMenu && matchesSearch
})


  const getLogo = (name) => {

    const lowerName = name.toLowerCase()

    if (lowerName.includes("steam")) {
      return "https://upload.wikimedia.org/wikipedia/commons/8/83/Steam_icon_logo.svg"
    }

    if (lowerName.includes("epic")) {
      return "https://upload.wikimedia.org/wikipedia/commons/3/31/Epic_Games_logo.svg"
    }

    if (lowerName.includes("youtube")) {
      return "https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
    }

    return "https://cdn-icons-png.flaticon.com/512/25/25231.png"
  }


  return (
    <div className="bg-zinc-900/70 backdrop-blur-xl rounded-3xl p-6 border border-white/10 mt-8">

      <h2 className="text-white text-3xl font-bold mb-8">
        Quick Links
      </h2>


      {selectedMenu === "Dashboard" && (

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 mb-8">

          <input
            type="text"
            placeholder="Website Name"
            value={siteName}
            onChange={(e) => setSiteName(e.target.value)}
            className="bg-zinc-950/80 text-white px-4 py-3 rounded-2xl outline-none border border-zinc-800"
            onKeyDown={handleKeyDown}
          />


          <input
            type="text"
            placeholder="Website URL"
            value={siteUrl}
            onChange={(e) => setSiteUrl(e.target.value)}
            className="bg-zinc-950/80 text-white px-4 py-3 rounded-2xl outline-none border border-zinc-800"
            onKeyDown={handleKeyDown}
          />


          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="bg-zinc-950/80 text-white px-4 py-3 rounded-2xl outline-none border border-zinc-800"
          >
            <option>Gaming</option>
            <option>Study</option>
            <option>Productivity</option>
          </select>


          <button
            onClick={addLink}
            className="bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-2xl font-semibold hover:scale-105 transition-all"
          >
            Add Link
          </button>

        </div>

      )}


      {filteredLinks.length === 0 ? (

        <div className="bg-zinc-950/60 border border-dashed border-zinc-700 rounded-3xl p-16 text-center">

          <h3 className="text-2xl font-bold text-white mb-3">
            Nothing Here
          </h3>

          <p className="text-zinc-400">
            No links available in this section.
          </p>

        </div>

      ) : (

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">

          {filteredLinks.map((link, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="bg-zinc-950/90 border border-white/10 rounded-3xl p-6"
            >

              <div className="flex items-start justify-between">

                <div className="flex gap-5">

                  <div className="w-20 h-20 bg-white rounded-2xl p-3 flex items-center justify-center">

                    <img
                      src={getLogo(link.name)}
                      alt="logo"
                      className="w-full h-full object-contain"
                    />

                  </div>


                  <div>

                    <h3 className="text-white text-3xl font-bold mb-2">
                      {link.name}
                    </h3>

                    <p className="text-zinc-400 mb-4">
                      {link.category} Platform
                    </p>


                    <button
                      onClick={() => window.open(link.url)}
                      className="bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-3 rounded-2xl text-white font-semibold hover:scale-105 transition-all"
                    >
                      Open Link
                    </button>

                  </div>

                </div>


                <div className="flex gap-4">

                  <button
                    onClick={() => toggleFavorite(index)}
                    className={`text-3xl ${
                      link.favorite
                        ? "text-yellow-400"
                        : "text-zinc-600"
                    }`}
                  >
                    ★
                  </button>


                  <button
                    onClick={() => deleteLink(index)}
                    className="text-red-400 hover:text-red-500"
                  >
                    Delete
                  </button>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      )}

    </div>
  )
}

export default QuickLinks
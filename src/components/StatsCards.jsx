import {
  FaLink,
  FaStar,
  FaLayerGroup
} from "react-icons/fa"

function StatsCards({ links }) {

  const totalLinks = links.length

  const favoriteLinks = links.filter(
    (link) => link.favorite
  ).length

  const categories = new Set(
    links.map((link) => link.category.name)
  ).size


  const stats = [
    {
      title: "Total Links",
      value: totalLinks,
      icon: <FaLink />,
      color: "from-purple-500/20 to-blue-500/20"
    },

    {
      title: "Favorites",
      value: favoriteLinks,
      icon: <FaStar />,
      color: "from-yellow-500/20 to-orange-500/20"
    },

    {
      title: "Categories",
      value: categories,
      icon: <FaLayerGroup />,
      color: "from-emerald-500/20 to-green-500/20"
    },
  ]


  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-8">

      {stats.map((stat, index) => (

        <div
          key={index}
          className={`bg-gradient-to-br ${stat.color}
          border border-white/10 rounded-3xl p-6
          backdrop-blur-xl
          hover:scale-[1.02]
          hover:-translate-y-1
          transition-all duration-300
          hover:shadow-2xl hover:shadow-purple-500/10`}
        >

          <div className="flex items-center justify-between">

            <div>

              <h3 className="text-zinc-300 text-sm mb-2">
                {stat.title}
              </h3>

              <p className="text-5xl font-bold text-white">
                {stat.value}
              </p>

            </div>


            <div className="w-20 h-20 rounded-3xl bg-white/10 flex items-center justify-center text-4xl text-white">

              {stat.icon}

            </div>

          </div>

        </div>

      ))}

    </div>
  )
}

export default StatsCards
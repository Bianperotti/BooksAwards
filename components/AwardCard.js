const colors = {
  green: 'from-green-500/50 to-emerald-700/50',
  cyan: 'from-cyan-400/50 to-cyan-600/50',
  orange: 'from-orange-500/50 to-orange-700/50',
  red: 'from-red-500/50 to-orange-700/50',
  green2: 'from-green-400/50 to-emerald-600/50',
  pink: 'from-fuchsia-500/50 to-pink-600/50',
}

const AwardCard = ({ award }) => {
  const colorClasses = colors[award.colours]

  return (
    <a
      key={award.id}
      href={`/awards/${award.slug}`}
      className={`flex h-48 rounded-xl border bg-gradient-to-r p-4 text-left hover:text-blue-600 focus:text-blue-600 ${colorClasses}`}
    >
      <div className="relative">
        <img
          className="relative rounded-lg -top-14 w-36"
          src={`https://stingray-app-ozczk.ondigitalocean.app/assets/${award.awarded_books[0].book.cover}`}
        ></img>
      </div>
      <div className="self-center w-3/5 p-4 pr-0">
        <h2 className="text-xl text-white "> {award.name} </h2>
      </div>
    </a>
  )
}

export default AwardCard

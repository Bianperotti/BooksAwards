const colors = {
  green: 'from-green-500/50 to-emerald-700/50',
  cyan: 'from-cyan-400/50 to-cyan-600/50',
  orange: 'from-orange-500/50 to-orange-700/50',
  red: 'from-red-500/50 to-orange-700/50',
  green2: 'from-green-400/50 to-emerald-600/50',
  pink: 'from-pink-400/50 to-pink-600/50',
  yellow: 'from-amber-300/50 to-amber-600/50'
}

const AwardCard = ({ award }) => {
  const colorClasses = colors[award.colours]

  const winnerBook = award.awarded_books.sort((a, b) => b.votes - a.votes)
  winnerBook.length = 1

  return (
    <a
      key={award.id}
      href={`/awards/${award.slug}`}
      className={`flex h-48 rounded-xl border bg-gradient-to-r p-4 text-left ${colorClasses}`}
    >
      <div className="relative">
        <img
          className="-top-14 relative h-[12.3rem] w-36 rounded-lg"
          sizes="50vw"
          alt="Winner book cover"
          src={`https://stingray-app-ozczk.ondigitalocean.app/assets/${winnerBook[0].book.cover}`}
        ></img>
      </div>
      <div className="self-center w-3/5 p-4 pr-0">
        <h2 className="text-xl text-white "> {award.name} </h2>
      </div>
    </a>
  )
}

export default AwardCard

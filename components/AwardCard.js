const AwardCard = ({ award }) => {
  console.log(award)

  return (
    // <h1>hola</h1>
    <a
      key={award.id}
      href="/awards/first-award"
      className={`flex h-48 rounded-xl border bg-gradient-to-r ${award.colours} p-4 text-left focus:text-blue-600" hover:text-blue-600`}
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

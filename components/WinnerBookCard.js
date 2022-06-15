import { useState } from 'react'

const WinnerBookCard = ({ book, i, votes }) => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div key={book.id}>
      <div className="relative z-10 flex items-center justify-center w-20 h-20 -bottom-5 -left-6">
        <span className="absolute z-10 text-5xl text-white">{i + 1}</span>
        <div className="absolute h-full w-full bg-[url('https://stingray-app-ozczk.ondigitalocean.app/assets/52dae336-4772-451d-924a-623e1a8f6736')] bg-cover"></div>
      </div>
      <div
        className="relative flex items-center justify-center overflow-hidden rounded-lg "
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        <img
          className="w-48 -top-2 h-72"
          src={`https://stingray-app-ozczk.ondigitalocean.app/assets/${book.cover}`}
        ></img>
        {isVisible ? (
          <div className="absolute z-10 flex items-center justify-center w-full h-full bg-black/75">
            <div className="items-center text-xl text-center text-white ">
              <h3 className="mb-3">{book.title}</h3>
              <span>{votes} votes</span>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default WinnerBookCard

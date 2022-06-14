import { useState } from 'react'

const BooksOrder = ({ award }) => {
  const [isVisible, setIsVisible] = useState(false)

  const sortedBooks = award.awarded_books.sort((a, b) => b.votes - a.votes)

  sortedBooks.length = 4

  return (
    <>
      <div className="grid grid-cols-1 mt-16 mb-16 gap-x-16 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
        {sortedBooks.map(({ book }, i) => (
          <div key={book.id}>
            <div className="relative flex items-center justify-center w-20 h-20 -bottom-6 -left-6">
              <span className="absolute z-40 text-5xl text-white">{i + 1}</span>
              <div className="absolute h-full w-full bg-[url('https://stingray-app-ozczk.ondigitalocean.app/assets/52dae336-4772-451d-924a-623e1a8f6736')] bg-cover"></div>
            </div>
            <img
              className="w-48 rounded-lg bookHover -top-2 h-72"
              src={`https://stingray-app-ozczk.ondigitalocean.app/assets/${book.cover}`}
              onMouseEnter={() => setIsVisible(true)}
              onMouseLeave={() => setIsVisible(false)}
            ></img>
            {
              isVisible ? <h1> hola </h1> : null
            }
          </div>
        ))}
      </div>
    </>
  )
}

export default BooksOrder

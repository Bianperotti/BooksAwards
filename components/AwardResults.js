import WinnerBookCard from './WinnerBookCard'

const AwardResults = ({ award }) => {
  const sortedBooks = award.awarded_books.sort((a, b) => b.votes - a.votes)

  if (sortedBooks.length > 4) sortedBooks.length = 4

  return (
    <>
      <div className="grid grid-cols-1 mt-6 mb-16 gap-x-16 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
        {sortedBooks.map((item, i) => (
          <WinnerBookCard
            key={item.book.id}
            book={item.book}
            i={i}
            votes={item.votes}
          />
        ))}
      </div>
      <a
        href={`/`}
        className="px-20 py-5 mb-8 text-xl text-white rounded-lg bg-orange-500/75 bg-gradient-to-br hover:bg-orange-700/75"
      >
        Keep voting
      </a>
    </>
  )
}

export default AwardResults

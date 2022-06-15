import WinnerBookCard from './WinnerBookCard'

const AwardResults = ({ award }) => {
  const sortedBooks = award.awarded_books.sort((a, b) => b.votes - a.votes)

  sortedBooks.length = 4
  console.log(sortedBooks)

  return (
    <>
      <div className="grid grid-cols-1 mt-8 mb-16 gap-x-16 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
        {sortedBooks.map((item, i) => (
          <WinnerBookCard key={item.book.id} book={item.book} i={i} votes={item.votes} />
        ))}
      </div>
    </>
  )
}

export default AwardResults

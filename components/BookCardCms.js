import { updateVotes } from '../pages/api/awardsApi'

const BookCardCms = ({ award, setUserVote }) => {

  const votedBooks = award.awarded_books

  const handleClick = (book) => {
    updateVotes(book.id)
    setUserVote(true)
  }

  return (
    <>
      {votedBooks.map((book) => (
        <div className="relative" key={book.id}>
          <img
            className="relative h-56 rounded-lg -top-2 w-36"
            src={`https://stingray-app-ozczk.ondigitalocean.app/assets/${book.book.cover}`}
          ></img>
          <button
            onClick={() => handleClick(book)}
            className="px-4 py-2 text-xl text-white rounded w-36 bg-orange-500/75 hover:bg-orange-700/75 "
          >
            vote
          </button>
        </div>
      ))}
    </>
  )
}

export default BookCardCms

import { updateVotes, addIp } from '../pages/api/awardsApi'

const BookCardCms = ({ award, ip, setUserVote }) => {
  const votedBooks = award.awarded_books.sort((a, b) => b.votes - a.votes)

  if (votedBooks.length > 12) votedBooks.length = 12

  const handleClick = (book, award, ip, setUserVote) => {
    updateVotes(book.id)
    addIp(award, ip)

    setUserVote(true)

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      {votedBooks.map((book) => (
        <div className="relative" key={book.id}>
          <img
            className="relative h-56 rounded-lg -top-2 w-36"
            sizes="50vw"
            alt="book cover"
            src={`https://stingray-app-ozczk.ondigitalocean.app/assets/${book.book.cover}`}
          ></img>
          <button
            onClick={() => handleClick(book, award, ip, setUserVote)}
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

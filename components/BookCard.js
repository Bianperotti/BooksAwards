// const BookCard = ({ award }) => {
//   const votedBooks = award.awarded_books
//   console.log(votedBooks);
//   return ()
//     // <h1>hola {award.awarded_books[0].book.title}</h1>
// }

const BookCard = ({ award }) => {
  const votedBooks = award.awarded_books
  console.log(votedBooks)
  return (
    <>
      {votedBooks.map((book) => (
        <div className="relative" key={book.id}>
          <img
            className="relative rounded-lg -top-2 w-36"
            src={`https://stingray-app-ozczk.ondigitalocean.app/assets/${book.book.cover}`}
          ></img>
          <button className="px-4 py-2 text-xl text-white rounded w-36 bg-orange-500/75 hover:bg-orange-700/75 ">
            vote
          </button>
        </div>
      ))}
    </>
  )
}

export default BookCard

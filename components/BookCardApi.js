import { foundBook } from '../pages/api/awardsApi'

const BookCardApi = ({ books, award }) => {
  // console.log(books[0].volumeInfo.imageLinks.thumbnail)

  // const bigImage = (url) => {
  //   const imgUrl = url?.smallThumbnail
  //   const imgZoom = imgUrl?.replace('zoom=5', 'zoom=10')
  //   return imgZoom
  // }

  const handleClick = (book) => {
    foundBook(book, award)
    setUserVote(true)
  }

  return (
    <>
      {books.map((book) => (
        <div className="relative" key={book.id}>
          <img
            className="relative h-56 rounded-lg -top-2 w-36"
            // src={bigImage(book.volumeInfo.imageLinks)}
            // src={`https://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=fife=w400-h600&source=gbs_api`}
            src={book.volumeInfo.imageLinks?.thumbnail}
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

export default BookCardApi

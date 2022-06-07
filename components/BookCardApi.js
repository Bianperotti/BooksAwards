const BookCardApi = ({ books }) => {
  console.log(books)
  return (
    <>
      {books.map((book) => (
        <div className="relative" key={book.id}>
          <img
            className="relative rounded-lg -top-2 w-36"
            src={`https://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=fife=w400-h600&source=gbs_api`}
          ></img>
          <button className="px-4 py-2 text-xl text-white rounded w-36 bg-orange-500/75 hover:bg-orange-700/75 ">
            vote
          </button>
        </div>
      ))}
    </>
  )
}

export default BookCardApi

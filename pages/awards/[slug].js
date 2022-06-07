import { getAward } from '../api/awardsApi'
import BookCard from '../../components/BookCard'
import { getBooks } from '../api/googleBooksApi'
import { useState, useEffect } from 'react'

export async function getServerSideProps(context) {
  const slug = context.params.slug
  const award = await getAward(slug)

  if (!award) {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
      props: {},
    }
  }

  return { props: { award } }
}

const votePage = ({ award }) => {
  const [books, setBooks] = useState([])
  const [bookInput, setBookInput] = useState('')

  useEffect(() => {
    // console.log('effect')

    // const eventHandler = response => {
    //   console.log('promise fulfilled')
    //   setNotes(response.data)
    // }

    getBooks(bookInput)
      .then(b => console.log(b))
      .catch((e) => e)

    // const promise = axios.get('http://localhost:3001/notes')
    // promise.then(eventHandler)
  }, [bookInput])

  return (
    <div className="flex flex-col items-center justify-center py-2">
      <main className="container flex flex-col items-center justify-center flex-1 w-full max-w-5xl px-6 font-semibold lg:px-0 ">
        <h1 className="text-5xl font-bold">{award.name}</h1>
        <input
          className="block w-full py-2 pr-3 bg-white border rounded-md shadow-sm border-slate-300 pl-9 placeholder:italic placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
          placeholder="Vote another book..."
          onChange={(e) => setBookInput(e.target.value)}
          value={bookInput}
        ></input>
        <div className="grid grid-cols-2 mt-16 gap-x-8 gap-y-16 sm:grid-cols-3 lg:grid-cols-5">
          <BookCard award={award} />
        </div>
      </main>
    </div>
  )
}

export default votePage

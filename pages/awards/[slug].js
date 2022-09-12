import { getAward } from '../api/awardsApi'
import BookCardCms from '../../components/BookCardCms'
import { getBooksGApi } from '../api/awardsApi'
import { useState, useEffect, useRef } from 'react'
import BookCardApi from '../../components/BookCardApi'
import AwardResults from '../../components/AwardResults'
import Head from 'next/head'

export async function getServerSideProps(context) {
  const slug = context.params.slug
  const award = await getAward(slug)

  const forwarded = context.req.headers['x-forwarded-for']
  
  console.log(forwarded);
  console.log(context.req.connection.remoteAddress);

  const ip = forwarded
    ? forwarded.split(/, /)[0]
    : context.req.connection.remoteAddress

  

  const ips = award.users_ip

  const userVoted = ips?.includes(ip) ? true : false

  if (!award) {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
      props: {},
    }
  }

  return { props: { award, ip, userVoted } }
}

const votePage = ({ award, ip, userVoted }) => {
  const [books, setBooks] = useState([])
  const [bookInput, setBookInput] = useState('')
  const [userVote, setUserVote] = useState(userVoted)

  const inputRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputRef.current?.value === bookInput) {
        getBooksGApi(bookInput)
          .then((b) => {
            setBooks(b.data)
          })
          .catch((e) => e)
      }
    }, 500)

    return () => {
      clearTimeout(timer)
    }
  }, [bookInput, inputRef])

  return (
    <>
      <Head>
        <title>{award.name}</title>
        <meta
          name="description"
          content={`Random books awards, premios de libros. Vote and fun with random books awards. ${award.name}`}
        />
      </Head>
      <title>Books awards</title>
      <div className="flex flex-col items-center justify-center py-2">
        <main className="container flex flex-col items-center justify-center flex-1 w-full max-w-5xl px-6 font-semibold lg:px-0 ">
          <h1 className="pb-8 text-5xl font-bold">{award.name}</h1>
          {!userVote ? (
            <>
              <input
                className="block w-full py-2 pr-3 bg-white border rounded-md shadow-sm border-slate-300 pl-9 placeholder:italic placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                placeholder="Vote another book..."
                onChange={(e) => setBookInput(e.target.value)}
                value={bookInput}
                ref={inputRef}
              ></input>
              <div className="grid grid-cols-2 mt-16 mb-16 gap-x-8 gap-y-16 sm:grid-cols-4 lg:grid-cols-6">
                {!bookInput ? (
                  <BookCardCms
                    award={award}
                    ip={ip}
                    setUserVote={setUserVote}
                  />
                ) : (
                  <BookCardApi
                    books={books}
                    award={award}
                    ip={ip}
                    setUserVote={setUserVote}
                  />
                )}
              </div>
            </>
          ) : (
            <AwardResults award={award} />
          )}
        </main>
      </div>
    </>
  )
}

export default votePage

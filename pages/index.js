import Head from 'next/head'
import data from './api/data.json'

const Home = () => {
  const books = data.items
  const imageOne = data.items[0].volumeInfo.imageLinks.thumbnail
  console.log(imageOne)
  return (
    <div className="flex flex-col items-center justify-center py-2">
      <Head>
        <title>Books awards</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container flex flex-col items-center justify-center flex-1 w-full max-w-5xl m-8 font-semibold ">
        <div className="flex mb-8">
          <h1 className="w-3/5 text-6xl leading-tight place-items-center">
            <span className="px-2 text-white bg-orange-500">Vote</span> & fun
            with random <span className="text-emerald-500 ">BOOKS</span> awards!
          </h1>
          <img className='w-2/5' src="6870523.svg"></img>
        </div>

        <a
          href="/awards/first-award"
          className="flex p-4 m-8 text-left border h-52 w-96 rounded-xl bg-gradient-to-r from-green-500/50 to-emerald-700/50 hover:text-blue-600 focus:text-blue-600"
        >
          <div className="relative">
            <img
              className="relative rounded-lg -top-14 w-36"
              src={imageOne}
            ></img>
          </div>
          <div className="w-3/5 p-6">
            <h2 className="text-2xl text-white ">
              The book that make you cry the most
            </h2>
          </div>
        </a>
      </main>
    </div>
  )
}

export default Home

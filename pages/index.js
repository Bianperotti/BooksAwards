import Head from 'next/head'
import data from './api/data.json'
import AwardCard from '../components/AwardCard'

export async function getServerSideProps() {
  const awardsReq = await fetch(
    `https://stingray-app-ozczk.ondigitalocean.app/items/awards?fields=id,name,colours,awarded_books.id,awarded_books.votes,awarded_books.book.title,awarded_books.book.id,awarded_books.book.cover`
  )

  const { data: awards } = await awardsReq.json()

  return { props: { awards } }
}

const Home = ({ awards }) => {
  // console.log(awards)

  return (
    <div className="flex flex-col items-center justify-center py-2">
      <Head>
        <title>Books awards</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container flex flex-col items-center justify-center flex-1 w-full max-w-5xl px-6 font-semibold lg:px-0 ">
        <div className="flex items-center mb-16">
          <h1 className="text-6xl sm:leading-[1.2] md:w-3/5 sm:text-7xl">
            <span className="px-2 text-white bg-orange-500">Vote</span> & fun
            with random <span className="text-emerald-500 ">BOOKS</span> awards!
          </h1>
          <img className="hidden w-2/5 sm:block" src="6870523.svg"></img>
        </div>
        <div className="grid mt-16 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {awards.map((award) => (
            <AwardCard award={award} key={award.id} />
          ))}
        </div>
      </main>
    </div>
  )
}

export default Home

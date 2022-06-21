import Head from 'next/head'
import AwardCard from '../components/AwardCard'
import { getAwards, getTotalVotes } from './api/awardsApi'

export async function getServerSideProps() {
  const awards = await getAwards()

  const totalVotes = await getTotalVotes()

  return { props: { awards, totalVotes } }
}

const Home = ({ awards, totalVotes }) => {
  return (
    <>
      <Head>
        <title>Books awards</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:title"
          content="Vote & fun with random BOOKS awards!"
          key="title"
        />
        <meta property="og:image" content="/meta_image.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://books-awards.vercel.app/"
        />
        <meta
          property="twitter:title"
          content="Vote & fun with random BOOKS awards!"
        />
        <meta property="twitter:description" content="" />
        <meta property="twitter:image" content="/meta_image.png" />
      </Head>
      <div className="flex flex-col items-center justify-center py-2">
        <main className="container flex flex-col items-center justify-center flex-1 w-full max-w-5xl px-6 font-semibold lg:px-0 ">
          <div className="flex items-center mb-8 lg:mb-16">
            <div className="flex flex-col gap-y-7 lg:w-3/5 ">
              <h1 className="text-6xl sm:text-7xl sm:leading-[1.2] ">
                <span className="px-2 text-white bg-orange-500">Vote</span> &
                fun with random <span className="text-emerald-500 ">BOOKS</span>{' '}
                awards!
              </h1>
              <span className="flex text-4xl animate-bounce ">
                {totalVotes} VOTES ❤
              </span>
            </div>
            <img className="hidden w-2/5 lg:block" src="6870523.svg"></img>
          </div>
          <div className="grid mt-16 mb-16 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {awards.map((award) => (
              <AwardCard award={award} key={award.id} />
            ))}
          </div>
        </main>
      </div>
    </>
  )
}

export default Home

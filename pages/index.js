import Head from 'next/head'
import AwardCard from '../components/AwardCard'
import { getAwards, getTotalVotes } from './api/awardsApi'
import Script from 'next/script'

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
          name="description"
          content="Random books awards, 
          remios de libros. Vote and fun with random books awards.  "
        ></meta>
        // facebook
        <meta
          property="og:title"
          content="Vote & fun with random BOOKS awards!"
          key="title"
        />
        <meta property="og:image" content="/metaimage1200.jpg" />
        //twitter
        <meta property="twitter:card" content="summary_large_image" />
        {/* <meta
          property="twitter:url"
          content="https://books-awards.vercel.app/"
        /> */}
        <meta
          property="twitter:title"
          content="Vote & fun with random BOOKS awards!"
        />
        <meta property="twitter:description" content="" />
        <meta
          property="twitter:image:src"
          content="https://books-awards.vercel.app/metaimage.jpg"
        />
        <meta
          property="twitter:image"
          content="https://books-awards.vercel.app/metaimage.jpg"
        />
      </Head>
      <div className="flex flex-col items-center justify-center py-2">
        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
        {/* <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-X6LN00DBP8"
        ></script>
        <script>
          window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'G-X6LN00DBP8');
        </script> */}
        <main className="container flex flex-col items-center justify-center flex-1 w-full max-w-5xl px-6 font-semibold lg:px-0 ">
          <div className="flex items-center mb-8 lg:mb-16">
            <div className="flex flex-col gap-y-7 lg:w-3/5 ">
              <h1 className="text-6xl leading-[1.2] sm:text-7xl sm:leading-[1.2] ">
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

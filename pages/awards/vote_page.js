import data from '../api/data.json'
import { getAwards } from '../api/awardsApi'

export async function getServerSideProps() {
  const awards = await getAwards()

  return { props: { awards } }
}

const FirstAward = ( { awards }) => {
  console.log(awards)

  return (
    <div className="flex flex-col items-center justify-center py-2">

      <main className="container flex flex-col items-center justify-center flex-1 w-full max-w-5xl px-6 font-semibold lg:px-0 ">
          <h1 className="text-6xl font-bold">
            The book that make you cry the most
          </h1>
          <input
            className="block w-full py-2 pr-3 bg-white border rounded-md shadow-sm border-slate-300 pl-9 placeholder:italic placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
            placeholder="Vote another book..."
          ></input>
        
      </main>
    </div>
  )
}

export default FirstAward

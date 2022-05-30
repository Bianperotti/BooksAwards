import data from '../api/data.json'

const FirstAward = () => {
  const books = data
  console.log(data)

  return (
    <>
      <div>
        <h1 className="text-6xl font-bold">
          The book that make you cry the most
        </h1>
        <input
          className="block w-full py-2 pr-3 bg-white border rounded-md shadow-sm border-slate-300 pl-9 placeholder:italic placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
          placeholder="Vote another book..."
        ></input>
      </div>
      <div>
        
      </div>
    </>
  )
}

export default FirstAward

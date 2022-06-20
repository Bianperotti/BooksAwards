import Share from '../components/Share'

export default function Navbar() {
  return (
    <header className="flex items-center justify-between px-4 py-6 sm:px-6 lg:px-20 ">
      <a href={`/`} className="h-fit">
        <h2 className="font-sans text-lg font-semibold md:hidden ">Rba</h2>
        <h2 className="hidden font-sans text-lg font-semibold md:block ">
          Random books awards
        </h2>
      </a>
      <Share />
    </header>
  )
}

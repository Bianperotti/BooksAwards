export default function Navbar() {
  return (
    <header className="p-6">
      <a href={`/`}>
        <h2 className="font-sans text-lg font-semibold md:hidden">Rba</h2>
        <h2 className="hidden font-sans text-lg font-semibold md:block">Random books awards</h2>
      </a>
    </header>
  )
}

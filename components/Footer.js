export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center w-full h-24 border-t">
      <div>
        <span>made with ❤️ by </span>
        <a href="https://github.com/Bianperotti" className="underline">
          BianPerotti
        </a>
        <span> - idea by </span>
        <a href="https://www.tiktok.com/@jaydenkouli" className="underline">
          Jaydenkouli
        </a>
      </div>
      <div className="mt-2 text-center">
        <a
          className="text-xs underline "
          href="https://www.freepik.com/vectors/flat-poster"
        >
          Flat poster vector created by freepik - www.freepik.com
        </a>
        <span className="text-xs"> - </span>
        <a
          className="text-xs underline"
          href="https://www.freepik.com/vectors/book-illustration"
        >
          Book illustration vector created by freepik - www.freepik.com
        </a>
      </div>
    </footer>
  )
}

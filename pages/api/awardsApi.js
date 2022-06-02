export async function getAwards() {
  const awardsReq = await fetch(
    `https://stingray-app-ozczk.ondigitalocean.app/items/awards?fields=id,name,colours,awarded_books.id,awarded_books.votes,awarded_books.book.title,awarded_books.book.id,awarded_books.book.cover`
  )

  const { data: awards } = await awardsReq.json()

  return awards
}

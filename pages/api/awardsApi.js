export async function getAwards() {
  const awardsReq = await fetch(
    `https://stingray-app-ozczk.ondigitalocean.app/items/awards?fields=id,name,slug,colours,awarded_books.id,awarded_books.votes,awarded_books.book.title,awarded_books.book.id,awarded_books.book.cover`
  )

  const { data: awards } = await awardsReq.json()

  return awards
}

export async function getAward(slug) {
  const awardReq = await fetch(
    `https://stingray-app-ozczk.ondigitalocean.app/items/awards?fields=id,name,slug,colours,awarded_books.id,awarded_books.votes,awarded_books.book.title,awarded_books.book.id,awarded_books.book.cover&filter[slug][_eq]=${slug}`
  )

  const { data: award } = await awardReq.json()

  return award.length === 0 ? false : award[0]
}

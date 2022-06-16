import axios from 'axios'

export const apiCms = axios.create({
  baseURL: 'https://stingray-app-ozczk.ondigitalocean.app/',
})

export async function getAwards() {
  const awardsReq = await apiCms.get(
    `items/awards?fields=id,name,slug,colours,awarded_books.id,awarded_books.votes,awarded_books.book.title,awarded_books.book.id,awarded_books.book.cover`
  )

  const { data: awards } = awardsReq

  return awards.data
}

export async function getAward(slug) {
  const awardReq = await apiCms.get(
    `items/awards?fields=id,name,slug,colours,awarded_books.id,awarded_books.votes,awarded_books.book.title,awarded_books.book.id,awarded_books.book.cover&filter[slug][_eq]=${slug}`
  )

  const { data: award } = awardReq

  return award.length === 0 ? false : award.data[0]
}

export async function updateVotes(id) {
  const updatedVote = await axios.post('/api/handlerVote', { id })

  return updatedVote
}

export async function foundBook(book, award) {
  const foundedBook = await axios.post('/api/handlerBookAndVote', {
    book,
    award,
  })
  return foundedBook
}

export async function getBooksGApi(input) {
  const getBooks = await axios.post('/api/googleBooksApi', { input })
  return getBooks
}

export async function getTotalVotes() {
  const awardsReq = await apiCms.get(
    `items/awards_books?fields=votes&aggregate[sum]=votes`
  )

  const { data: totalVotes } = awardsReq

  return totalVotes.data[0].sum.votes
}

import axios from 'axios'
import { get } from 'lodash'
const api_key = '^jjw.MT2L[z]RZ^X@P38cYc;jynw]_'

export const apiCms = axios.create({
  baseURL: 'https://stingray-app-ozczk.ondigitalocean.app/',
})

export async function getAwards() {
  const awardsReq = await apiCms.get(
    `items/awards?fields=id,name,slug,colours,awarded_books.id,awarded_books.votes,awarded_books.book.title,awarded_books.book.id,awarded_books.book.cover`
  )
  // console.log(awardsReq)

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
  const awardedBook = await apiCms.get(`items/awards_books/${id}`)
  const newVotes = awardedBook.data.data.votes + 1

  const updateVotes = await apiCms.patch(
    `items/awards_books/${id}`,
    {
      votes: newVotes,
    },
    {
      headers: {
        Authorization: `Bearer ${api_key}`,
      },
    }
  )

  return updateVotes ? true : false
}

export async function foundBook(book, award) {
  console.log(book)
  console.log(award)

  try {
    const {
      data: { data: foundedBook },
    } = await apiCms.get(`items/books/${book.id}`)
  } catch (error) {
    // return false

    const bookCover = await apiCms.post(
      `files/import`,
      {
        url: book.volumeInfo.imageLinks.thumbnail,
      },
      {
        headers: {
          Authorization: `Bearer ${api_key}`,
        },
      }
    )

    const addBook = await apiCms.post(
      `items/books`,
      {
        title: book.volumeInfo.title,
        author: book.volumeInfo.authors[0],
        awards: [award.id],
        cover: bookCover.data.data.id,
        googleBooksId: book.id,
        votes: 1
      },
      {
        headers: {
          Authorization: `Bearer ${api_key}`,
        },
      }
    )
  }
}

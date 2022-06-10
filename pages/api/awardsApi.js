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
  // console.log(book.id)
  // console.log(award)

  try {
    const {
      data: { data: foundedBook },
    } = await apiCms.get(
      `items/books?filter[googleBooksId][_eq]=${book.id}&fields=*,awards.*`
    )

    // console.log(foundedBook[0].title)
    // console.log(award.name)

    if (foundedBook.length > 0) {
      const book = foundedBook[0]

      if (book.awards[0].award === award.id) {
        updateVotes(book.awards[0].id)

        console.log(`+ 1 voto al libro: ${book.title} en award: ${award.name}`)
      } else {
        const addAwardsBooks = await apiCms.post(
          `items/awards_books`,
          {
            award: award.id,
            book: book.id,
            votes: 1,
          },
          {
            headers: {
              Authorization: `Bearer ${api_key}`,
            },
          }
        )
        console.log(
          `Primer voto del libro: ${book.title} en award: ${award.name}`
        )
      }
    } else {
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

      const addBookAndVote = await apiCms.post(
        `items/awards_books`,
        {
          award: award.id,
          book: {
            title: book.volumeInfo.title,
            author: book.volumeInfo.authors[0],
            cover: bookCover.data.data.id,
            googleBooksId: book.id,
          },
          votes: 1,
        },
        {
          headers: {
            Authorization: `Bearer ${api_key}`,
          },
        }
      )

      console.log(
        `libro agregado: ${book.volumeInfo.title} en award: ${award.name}`
      )
    }
  } catch (error) {
    console.log('error')
  }
}

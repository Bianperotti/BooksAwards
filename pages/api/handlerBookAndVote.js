import axios from 'axios'
const api_key = '^jjw.MT2L[z]RZ^X@P38cYc;jynw]_'

export const apiCms = axios.create({
  baseURL: 'https://stingray-app-ozczk.ondigitalocean.app/',
})


export default async function handlerBookAndVote(req, res) {
  const book = req.body.book
  const award = req.body.award

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
    return res.status(200).json({ updated: true })
  } catch (error) {
    return res.status(error.response.status).json({ updated: false })
  }
}

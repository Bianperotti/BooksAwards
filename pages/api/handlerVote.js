import axios from 'axios'
const api_key = '^jjw.MT2L[z]RZ^X@P38cYc;jynw]_'

export const apiCms = axios.create({
  baseURL: 'https://stingray-app-ozczk.ondigitalocean.app/',
})

export default async function handlerVote(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const id = req.body.id

  try {
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
    return res.status(200).json({ updated: true })
  } catch (error) {
    return res.status(error.response.status).json({ updated: false })
  }
}

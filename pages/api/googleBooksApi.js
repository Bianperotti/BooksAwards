import axios from 'axios'
const api_key = 'AIzaSyBu75hzVYtOERFnE3061uY53GTVq__9-d8'

export const gBooksApi = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1/volumes?q=',
})

export default async function handleBooks(req, res) {
  const input = req.body.input
  // res.status(200).json({input})
  // console.log(input)

  try {
    const request = await gBooksApi.get(
      `${input}&intitle&maxResults=3&Keyes&key=${api_key}`
    )

    const data = request.data.items

    return res.status(200).json(data)
  } catch (error) {
    return res.status(error.response).json({ updated: false })
  }
}

import axios from 'axios'
const api_key = 'AIzaSyBu75hzVYtOERFnE3061uY53GTVq__9-d8'

export const gBooksApi = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1/volumes?q=',
})

export async function getBooks(input) {
  const request = await gBooksApi.get(
    `${input}&intitle&maxResults=3&Keyes&key=${api_key}`
  )
  return request.data
}

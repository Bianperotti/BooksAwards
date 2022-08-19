import axios from 'axios'
const api_key = process.env.API_KEY_CMS

export const apiCms = axios.create({
  baseURL: 'https://stingray-app-ozczk.ondigitalocean.app/',
})

export default async function handlerIps(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const award = req.body.award
  const ip = req.body.ip

  try {
    const updateIps = await apiCms.patch(
      `items/awards/${award.id}`,
      // {
      //   usersIp: award.usersIp ? [...award.usersIp, ip] : ip
      // },
      {
        users_ip: award.users_ip ? [...award.users_ip, ip] : ip
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

import "dotenv/config"

import { apiRequest } from "../api/apiRequest"
import { endpoints } from "../api/endpoints"

export const createToken = async () => {
  const response = await apiRequest(endpoints.auth, {
    method: "POST",
    body: JSON.stringify({
      username: process.env.API_USERNAME,
      password: process.env.API_PASSWORD,
    }),
  })

  const data = await response.json()

  if (!response.status === 200) {
    throw new Error("Creating token failed")
  }

  process.env.AUTH_TOKEN = data.token

  return data.token
}

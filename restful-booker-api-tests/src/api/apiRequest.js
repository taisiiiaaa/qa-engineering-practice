import "dotenv/config"

export const apiRequest = async (endpoint, options = {}) => {
  const response = await fetch(`${process.env.BASE_URL}${endpoint}`, {
    ...options,
    headers: { "Content-Type": "application/json", ...options.headers },
  })

  return response
}

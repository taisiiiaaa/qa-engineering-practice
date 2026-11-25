export const endpoints = {
  createToken: "/auth",
  getBookingIds: "/booking",
  getBooking: (id) => `/booking/${id}`,
  createBooking: "/booking",
  updateBooking: (id) => `/booking/${id}`,
  partiallyUdateBooking: (id) => `/booking/${id}`,
  deleteBooking: (id) => `/booking/${id}`,

  healthCheck: "/ping",
}

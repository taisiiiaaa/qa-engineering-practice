import { describe, it } from "node:test"
import assert from "node:assert/strict"

import { apiRequest } from "../api/apiRequest.js"
import { endpoints } from "../api/endpoints.js"
import { bookingData } from "../data/bookingData.js"

let authToken
let bookingId

describe("Booker API tests", () => {
  it("should create a new auth token", async () => {
    const response = await apiRequest(endpoints.createToken, {
      method: "POST",
      body: JSON.stringify({ username: "admin", password: "password123" }),
    })

    const data = await response.json()

    assert.equal(response.status, 200)

    assert.match(response.headers.get("content-type"), /application\/json/)

    assert.ok(data.token)

    authToken = data.token
  })

  it("should create a new booking", async () => {
    const response = await apiRequest(endpoints.createBooking, {
      method: "POST",
      body: JSON.stringify(bookingData),
    })

    const data = await response.json()

    assert.equal(response.status, 200)

    assert.match(response.headers.get("content-type"), /application\/json/)

    assert.ok(data)
    assert.ok(data.booking)

    assert.ok("bookingid" in data)
    assert.ok("firstname" in data.booking)
    assert.ok("lastname" in data.booking)
    assert.ok("totalprice" in data.booking)
    assert.ok("bookingdates" in data.booking)

    bookingId = data.bookingid
  })

  it("should find a newly created booking by its id", async () => {
    const response = await apiRequest(endpoints.getBooking(bookingId), {
      method: "GET",
    })

    const data = await response.json()

    assert.equal(response.status, 200)

    assert.match(response.headers.get("content-type"), /application\/json/)

    assert.equal(data.firstname, bookingData.firstname)
    assert.equal(data.lastname, bookingData.lastname)
    assert.equal(data.totalprice, bookingData.totalprice)
  })

  it("should update an existing booking", async () => {
    const response = await apiRequest(
      endpoints.partiallyUdateBooking(bookingId),
      {
        method: "PATCH",
        body: JSON.stringify({
          depositpaid: false,
          additionalneeds: "Breakfast, pool and gym",
        }),
        headers: { Cookie: `token=${authToken}` },
      },
    )

    const data = await response.json()

    assert.equal(response.status, 200)

    assert.ok(data)

    assert.equal(data.depositpaid, false)
    assert.equal(data.additionalneeds, "Breakfast, pool and gym")
  })

  it("should delete the existing booking", async () => {
    const response = await apiRequest(endpoints.deleteBooking(bookingId), {
      method: "DELETE",
      headers: { Cookie: `token=${authToken}` },
    })

    const data = await response.text()

    assert.equal(response.status, 201)
    assert.equal(data, "Created")
  })
})

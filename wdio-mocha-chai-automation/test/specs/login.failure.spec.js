import { expect } from "chai"
import LoginPage from "../pageobjects/login.page.js"

describe("Login functionality", () => {
  it("should prevent an unregistered account from logging in", async () => {
    await LoginPage.open()

    const email = "test1111@gmail.com"
    const password = "11111111"

    await LoginPage.login(email, password)

    expect(await LoginPage.isLoginFormDisplayed()).to.be.true
    expect(await LoginPage.getErrorMessage()).to.equal(
      "Invalid email or password",
    )
  })
})

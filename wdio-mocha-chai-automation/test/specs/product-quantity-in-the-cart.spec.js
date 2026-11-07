import { should } from "chai"
import ProductsPage from "../pageobjects/products.page.js"
import ProductDetailsPage from "../pageobjects/productDetails.page.js"
import LoginPage from "../pageobjects/login.page.js"
import RegisterPage from "../pageobjects/register.page.js"
import testUsers from "../data/testUsers.js"

should()

describe("Cart Functionality", () => {
  before(async () => {
    await RegisterPage.open()
    await RegisterPage.register(testUsers.registeredUser)
  })

  it("should reflect the correct product quantity in the cart", async () => {
    await LoginPage.open()

    await LoginPage.login(
      testUsers.registeredUser.email,
      testUsers.registeredUser.password,
    )

    await ProductsPage.open()
    await ProductsPage.openProduct("Hammer")

    await ProductDetailsPage.addToCart(2)
    ;(await ProductDetailsPage.getCartBadgeCount()).should.equal(2)
  })
})

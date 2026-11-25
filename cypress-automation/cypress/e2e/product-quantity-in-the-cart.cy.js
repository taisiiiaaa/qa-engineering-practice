import testUsers from "../fixtures/testUsers"
import LoginPage from "../support/pageObjects/LoginPage"
import RegisterPage from "../support/pageObjects/RegisterPage"
import ProductsPage from "../support/pageObjects/ProductsPage"
import ProductDetailsPage from "../support/pageObjects/ProductDetailsPage"
import CartPage from "../support/pageObjects/CartPage"

describe("Cart Functionality", () => {
  const loginPage = new LoginPage()
  const registerPage = new RegisterPage()
  const productsPage = new ProductsPage()
  const productDetailsPage = new ProductDetailsPage()
  const cartPage = new CartPage()

  before(() => {
    registerPage.open()
    registerPage.register(testUsers.registeredUser)
  })

  it("should reflect the correct product quantity in the cart", () => {
    loginPage.open()

    loginPage.login(
      testUsers.registeredUser.email,
      testUsers.registeredUser.password,
    )

    productsPage.open()
    productsPage.openProduct("Hammer")

    productDetailsPage.addToCart(2)

    productDetailsPage.getCartBadgeCount().should("equal", 2)

    cartPage.open()

    cartPage.getProductQuantity().should("equal", 2)

    cartPage.changeProductQuantity(1)

    productDetailsPage.waitForCartBadgeCount(1)

    productDetailsPage.getCartBadgeCount().should("equal", 1)

    cartPage.getProductQuantity().should("equal", 1)
  })
})

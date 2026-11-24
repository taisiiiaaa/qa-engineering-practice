import { expect } from "chai"
import ProductDetailsPage from "../pageobjects/productDetails.page.js"
import ProductsPage from "../pageobjects/products.page.js"

describe("Favorites functionality", () => {
  it("should prevent a user who is not logged in to add the product to favorites", async () => {
    await ProductsPage.open()
    await ProductsPage.openProduct("Hammer")

    await ProductDetailsPage.addToCart()

    expect(await ProductDetailsPage.getCartBadgeCount()).to.equal(1)
  })
})

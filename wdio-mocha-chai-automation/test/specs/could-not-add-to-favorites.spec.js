import { expect } from "chai"
import ProductDetailsPage from "../pageobjects/productDetails.page.js"
import ProductsPage from "../pageobjects/products.page.js"

describe("Favorites functionality", () => {
  it("should prevent a user who is not logged in to add the product to favorites", async () => {
    await ProductsPage.open()
    await ProductsPage.openProduct("Hammer")
    ;(await ProductDetailsPage.addToFavoritesBtn).waitForDisplayed({
      timeout: 5000,
      timeoutMsg: "Product Details page was not displayed",
    })
    await ProductDetailsPage.addToFavoritesBtn.click()

    expect(await ProductDetailsPage.getErrorMessage()).to.equal(
      "Unauthorized, can not add product to your favorite list.",
    )
  })
})

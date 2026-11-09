import { should } from "chai"
import ProductsPage from "../pageobjects/products.page.js"

should()

describe("Filtering products by sustainability and price", () => {
  it("should not display any products matching selected filters", async () => {
    await ProductsPage.open()
    await ProductsPage.selectEcoFriendly()
    await ProductsPage.selectPriceRange(1, 10)

    await ProductsPage.noProductsMessage.waitForDisplayed({
      timeout: 5000,
      timeoutMsg: "No products found message was not displayed",
    })
    ;(await ProductsPage.isNoProductsMessageDisplayed()).should.be.true
  })
})

import { should } from "chai"
import ProductsPage from "../pageobjects/products.page.js"

should()

describe("Filtering products by sustainability and price", () => {
  it("should not display any products matching selected filters", async () => {
    await ProductsPage.open()
    await ProductsPage.selectEcoFriendly()
    await ProductsPage.selectPriceRange(1, 10)

    const products = await ProductsPage.getProductNames()

    products.should.have.lengthOf(0)
  })
})

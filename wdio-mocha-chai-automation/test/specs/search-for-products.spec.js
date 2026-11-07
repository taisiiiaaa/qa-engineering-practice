import { expect } from "chai"
import ProductsPage from "../pageobjects/products.page.js"

describe("Search functionality", () => {
  it("should display products satisfying the search term", async () => {
    await ProductsPage.open()

    await ProductsPage.searchForProducts("pliers")

    const productNames = await ProductsPage.getProductNames()

    expect(productNames).to.not.be.empty

    productNames.forEach((name) => {
      expect(name.toLowerCase()).to.include("pliers")
    })
  })
})

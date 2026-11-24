import { assert } from "chai"
import ProductsPage from "../pageobjects/products.page.js"

describe("Filtering products by category", () => {
  it("should display products by selected category", async () => {
    await ProductsPage.open()
    await ProductsPage.selectCategory("Chisels")

    const names = await ProductsPage.getProductNames()

    for (const name of names) {
      assert.include(name, "Chisels")
    }
  })
})

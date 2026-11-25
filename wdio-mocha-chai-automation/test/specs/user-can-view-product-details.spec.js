import { assert } from "chai"
import ProductsPage from "../pageobjects/products.page.js"
import { $, $$, browser } from "@wdio/globals"

describe("Product Details Page", () => {
  it("should display product details page", async () => {
    await ProductsPage.open()

    await ProductsPage.openProduct("Combination Pliers")

    assert.include(await browser.getUrl(), "/product/")

    const productName = await $('[data-test="product-name"]').getText()

    assert.equal(productName, "Combination Pliers")
  })
})

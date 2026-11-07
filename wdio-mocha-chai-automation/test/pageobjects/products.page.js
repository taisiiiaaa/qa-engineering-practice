import { $, $$, browser } from "@wdio/globals"
import { Key } from "webdriverio"

class ProductsPage {
  get inputSearch() {
    return $('[data-test="search-query"]')
  }

  get searchBtn() {
    return $('[data-test="search-submit"]')
  }

  get productCards() {
    return $$(".card")
  }

  get productNames() {
    return $$('h5[data-test="product-name"]')
  }

  async getProductNames() {
    await browser.waitUntil(
      async () => {
        const products = await this.productNames

        if (products.length === 0) return []

        for (const product of products) {
          if (!(await product.isExisting())) return false
        }

        return true
      },
      { timeout: 10000, timeoutMsg: "Product names were not loaded" },
    )

    const products = await this.productNames
    const names = []

    for (const product of products) {
      names.push((await product.getText()).trim())
    }

    return names
  }

  async open() {
    await browser.url("/")

    await browser.waitUntil(async () => (await this.productNames.length) > 0, {
      timeout: 10000,
      timeoutMsg: "Products were not loaded",
    })
  }

  async openProduct(productName) {
    const cards = await this.productCards

    for (const card of cards) {
      const name = await card.$('[data-test="product-name"]').getText()

      if (name.trim() === productName) {
        await card.click()
        return
      }
    }

    throw new Error(`Product "${productName}" was not found`)
  }

  async searchForProducts(searchQuery) {
    await this.inputSearch.setValue(searchQuery)

    await this.searchBtn.click()

    await browser.waitUntil(async () => (await this.productNames.length) > 0, {
      timeout: 10000,
      timeoutMsg: "Search results were not loaded",
    })
  }

  async selectCategory(categoryName) {
    const checkbox = await $(
      `//label[contains(normalize-space(.), "${categoryName}")]/input[@type="checkbox"]`,
    )

    if (!(await checkbox.isSelected())) {
      await checkbox.click()
    }
  }

  async selectEcoFriendly() {
    const checkbox = await $('[data-test="eco-friendly-filter"]')

    if (!(await checkbox.isSelected())) {
      await checkbox.click()
    }
  }

  async selectPriceRange(min, max) {
    const minBtn = await $("span.ngx-slider-pointer-min")
    const maxBtn = await $("span.ngx-slider-pointer-max")

    await minBtn.click()

    let currentMin = Number(await minBtn.getAttribute("aria-valuenow"))

    while (currentMin !== min) {
      await browser.keys(currentMin < min ? Key.ArrowRight : Key.ArrowLeft)
      currentMin = Number(await minBtn.getAttribute("aria-valuenow"))
    }

    await maxBtn.click()

    let currentMax = Number(await maxBtn.getAttribute("aria-valuenow"))

    while (currentMax !== max) {
      await browser.keys(currentMax < max ? Key.ArrowRight : Key.ArrowLeft)
      currentMax = Number(await maxBtn.getAttribute("aria-valuenow"))
    }
  }
}

export default new ProductsPage()

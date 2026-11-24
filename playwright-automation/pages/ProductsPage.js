class ProductsPage {
  constructor(page) {
    this.page = page
  }

  async open() {
    await this.page.goto("/", { waitUntil: "domcontentloaded" })
  }

  async clickProductByItsName(productName) {
    await this.page
      .locator(`//a[@class='card'][.//h5[normalize-space()='${productName}']]`)
      .click()
  }
}

export default ProductsPage

import NavBar from "./components/NavBar"

class ProductDetailsPage {
  constructor(page) {
    this.page = page
    this.navbar = new NavBar(page)

    this.addToFavoritesBtn = page.locator(
      "//button[@data-test='add-to-favorites']",
    )
    this.addToCartBtn = page.locator("//button[@data-test='add-to-cart']")
    this.errorContainer = page.locator(".toast-error")
  }

  async clickProductByItsName(productName) {
    await this.page
      .locator(`//a[@class='card'][.//h5[normalize-space()='${productName}']]`)
      .click()
  }

  async addToFavorites() {
    await this.addToFavoritesBtn.click()
  }

  async addToCart() {
    await this.addToCartBtn.click()
  }

  async getErrorMessage() {
    await this.errorContainer.waitFor({ state: "visible" })
    return await this.errorContainer.innerText()
  }
}

export default ProductDetailsPage

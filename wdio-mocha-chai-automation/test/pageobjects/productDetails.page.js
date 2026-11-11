import { $, browser } from "@wdio/globals"

class ProductDetailsPage {
  get addToFavoritesBtn() {
    return $('[data-test="add-to-favorites"]')
  }

  get addToCartBtn() {
    return $('[data-test="add-to-cart"]')
  }

  async getCartBadgeCount() {
    return Number(await $('[data-test="cart-quantity"]').getText())
  }

  async waitForCartBadgeCount(expectedCount) {
    await browser.waitUntil(
      async () => (await this.getCartBadgeCount()) === expectedCount,
      { timeout: 5000, timeoutMsg: "Cart badge did not update" },
    )
  }

  get errorContainer() {
    return $("#toast-container")
  }

  get increaseQuantity() {
    return $('[data-test="increase-quantity"]')
  }

  async addToCart(productQuantity = 1) {
    if (!Number.isInteger(productQuantity) || productQuantity < 1) {
      throw new Error("Product quantity must be a positive integer")
    }

    for (let i = 1; i < productQuantity; i++) {
      await this.increaseQuantity.click()
    }

    await this.addToCartBtn.click()
  }

  async getErrorMessage() {
    await this.errorContainer.waitForDisplayed()
    return await this.errorContainer.getText()
  }
}

export default new ProductDetailsPage()

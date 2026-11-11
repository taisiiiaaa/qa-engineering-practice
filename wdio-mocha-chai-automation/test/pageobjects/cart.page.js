import { $, browser } from "@wdio/globals"
import { Key } from "webdriverio"

class CartPage {
  get productQuantity() {
    return $('[data-test="product-quantity"]')
  }

  get removeProductBtn() {
    return $("a.btn-danger")
  }

  async removeProduct() {
    await this.removeProductBtn.click()
  }

  async getProductQuantity() {
    return Number(await this.productQuantity.getValue())
  }

  async changeProductQuantity(newValue) {
    await this.productQuantity.setValue(String(newValue))
    await browser.keys(Key.Tab)
  }

  async open() {
    await browser.url("/checkout")

    await this.productQuantity.waitForDisplayed({
      timeout: 10000,
      timeoutMsg: "Cart page was not loaded",
    })
  }
}

export default new CartPage()

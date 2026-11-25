class ProductDetailsPage {
  get addToFavoritesBtn() {
    return cy.get('[data-test="add-to-favorites"]')
  }

  get addToCartBtn() {
    return cy.get('[data-test="add-to-cart"]')
  }

  get cartBadgeCount() {
    return cy.get('[data-test="cart-quantity"]')
  }

  get errorContainer() {
    return cy.get("#toast-container")
  }

  get increaseQuantity() {
    return cy.get('[data-test="increase-quantity"]')
  }

  getCartBadgeCount() {
    return this.cartBadgeCount.invoke("text").then(Number)
  }

  waitForCartBadgeCount(expectedCount) {
    this.cartBadgeCount.should(($badge) => {
      expect(Number($badge.text())).to.equal(expectedCount)
    })
  }

  addToCart(productQuantity = 1) {
    if (!Number.isInteger(productQuantity) || productQuantity < 1) {
      throw new Error("Product quantity must be a positive integer")
    }

    for (let i = 1; i < productQuantity; i++) {
      this.increaseQuantity.click()
    }

    this.addToCartBtn.click()
  }

  getErrorMessage() {
    return this.errorContainer
      .should("be.visible")
      .invoke("text")
      .then((text) => text.trim())
  }
}

export default ProductDetailsPage

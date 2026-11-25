class CartPage {
  get productQuantity() {
    return cy.get('[data-test="product-quantity"]')
  }

  get removeProductBtn() {
    return cy.get("a.btn-danger")
  }

  removeProduct() {
    this.removeProductBtn.click()
  }

  getProductQuantity() {
    return this.productQuantity.invoke("val").then(Number)
  }

  changeProductQuantity(newValue) {
    this.productQuantity.clear().type(String(newValue)).blur()
  }

  open() {
    cy.visit("/checkout")
  }
}

export default CartPage

class ProductsPage {
  get searchInput() {
    return cy.get("input[data-test='search-query']")
  }

  get searchBtn() {
    return cy.get("button[data-test='search-submit']")
  }

  get productCards() {
    return cy.get(".card")
  }

  get productNames() {
    return cy.get(".card h5")
  }

  get noProductsMessage() {
    return cy.get('[data-test="no-results"]')
  }

  open() {
    cy.visit("/")
  }

  openProduct(productName) {
    this.productCards
      .filter((_, card) => {
        const name = card
          .querySelector('[data-test="product-name"]')
          .textContent.trim()

        return name === productName
      })
      .should("have.length", 1)
      .click()
  }

  fillSearchInput(term) {
    this.searchInput.clear().type(term)
  }

  selectCategory(categoryName) {
    cy.contains("label", categoryName).find("input").check()
  }

  selectPriceRange(min, max) {
    const setSliderValue = (selector, target) => {
      const adjust = (attempt = 0) => {
        if (attempt >= 250) {
          throw new Error(`Could not set slider to ${target}`)
        }

        return cy.get(selector).then(($handle) => {
          const current = Number($handle.attr("aria-valuenow"))

          if (current === target) {
            return
          }

          const key = current < target ? "ArrowRight" : "ArrowLeft"

          cy.wrap($handle).realClick()
          cy.realPress(key)

          return cy.wait(50).then(() => adjust(attempt + 1))
        })
      }

      return adjust()
    }

    setSliderValue(".ngx-slider-pointer-min", min)
    setSliderValue(".ngx-slider-pointer-max", max)
  }

  selectEcoFriendly() {
    cy.get('[data-test="eco-friendly-filter"]').check()
  }
}

export default ProductsPage

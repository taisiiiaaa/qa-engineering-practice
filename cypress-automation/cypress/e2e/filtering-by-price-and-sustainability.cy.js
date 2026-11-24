import ProductsPage from "../support/pageObjects/ProductsPage"

it("should display products matching selected filters", () => {
  const productsPage = new ProductsPage()

  productsPage.open()

  productsPage.selectEcoFriendly()
  productsPage.selectPriceRange(1, 10)

  productsPage.productCards.should("have.length", 0)

  productsPage.noProductsMessage.should("be.visible")
})

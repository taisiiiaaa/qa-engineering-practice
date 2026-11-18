import ProductsPage from "../support/pageObjects/ProductsPage"

it("should display products matching the search term", () => {
  const productsPage = new ProductsPage()
  const searchTerm = "pliers"

  productsPage.open()

  cy.intercept("**/products/search*").as("searchProducts")

  productsPage.fillSearchInput(searchTerm)
  productsPage.searchBtn.click()

  cy.wait("@searchProducts").its("response.statusCode").should("eq", 200)

  productsPage.productCards.should("have.length.greaterThan", 0)

  productsPage.productNames.each(($name) => {
    expect($name.text().trim().toLowerCase()).to.include(
      searchTerm.toLowerCase(),
    )
  })
})

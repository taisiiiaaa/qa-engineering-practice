import ProductsPage from "../support/pageObjects/ProductsPage"

it("should display products from the 'Chisels' category", () => {
  const productsPage = new ProductsPage()
  const category = "Chisels"

  productsPage.open()

  cy.intercept("**/products").as("filterProducts")

  productsPage.selectCategory(category)

  cy.wait("@filterProducts").its("response.statusCode").should("eq", 200)

  productsPage.productCards.should("have.length", 3)

  productsPage.productNames.each(($name) => {
    expect($name.text().trim().toLowerCase()).to.include(category.toLowerCase())
  })
})

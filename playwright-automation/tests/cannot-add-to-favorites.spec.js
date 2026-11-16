import { test, expect } from "@playwright/test"
import ProductsPage from "../pages/ProductsPage"
import ProductDetailsPage from "../pages/ProductDetailsPage"

test("should prevent unauthenticated user from adding a product to favorites", async ({
  page,
}) => {
  const productsPage = new ProductsPage(page)
  const productDetailsPage = new ProductDetailsPage(page)

  await productsPage.open()
  await productsPage.clickProductByItsName("Slip Joint Pliers")

  await productDetailsPage.addToFavorites()

  await expect(productDetailsPage.errorContainer).toBeVisible()
  await expect(productDetailsPage.errorContainer).toHaveText(
    "Unauthorized, can not add product to your favorite list.",
  )
})

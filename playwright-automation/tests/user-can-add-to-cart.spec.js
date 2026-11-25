import { test, expect } from '@playwright/test';
import ProductsPage from '../pages/ProductsPage';
import ProductDetailsPage from '../pages/ProductDetailsPage';

test('should add products to the cart correctly', async ({ page }) => {
  const productsPage = new ProductsPage(page);
  const productDetailsPage = new ProductDetailsPage(page);

  await productsPage.open();
  await productsPage.clickProductByItsName('Slip Joint Pliers');

  await expect(productDetailsPage.navbar.cartIcon).toBeHidden();

  await productDetailsPage.addToCart();

  await expect(productDetailsPage.navbar.cartIcon).toBeVisible();

  expect(await productDetailsPage.navbar.getCartQuantity()).toEqual(1);
});

import { test, expect } from '@playwright/test';
import ProductsPage from '../pages/ProductsPage';
import ProductDetailsPage from '../pages/ProductDetailsPage';

test('should correctly open Product Details Page', async ({ page }) => {
  const productsPage = new ProductsPage(page);
  const productDetailsPage = new ProductDetailsPage(page);

  await productsPage.open();
  await productsPage.clickProductByItsName('Thor Hammer');

  await expect(page).toHaveURL(/\/product/);
});

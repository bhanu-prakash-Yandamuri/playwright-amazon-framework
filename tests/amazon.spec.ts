import { test } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { SearchResultsPage } from "../pages/SearchResultsPage";
import { ProductPage } from "../pages/ProductPage";

test("Amazon search and add to cart test", async ({ page }) => {
  const homePage = new HomePage(page);
  const searchResults = new SearchResultsPage(page);
  const productPage = new ProductPage(page);

  await homePage.goto();
  await homePage.searchProduct("laptop");
  await searchResults.selectFirstProduct();

  // Switch to new tab (Amazon opens product in new tab)
  await page.waitForTimeout(2000);
  const pages = page.context().pages();
  const productTab = pages[pages.length - 1];

//   const product = new ProductPage(productTab);
//   await product.verifyProductTitle();
//   await product.addToCart();
});

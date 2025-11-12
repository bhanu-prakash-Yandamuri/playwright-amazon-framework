import { Page, expect } from "@playwright/test";

export class ProductPage {
  readonly page: Page;
  readonly addToCartButton;
  readonly productTitle;

  constructor(page: Page) {
    this.page = page;
    this.addToCartButton = page.locator("#add-to-cart-button");
    this.productTitle = page.locator("#productTitle");
  }

  async verifyProductTitle() {
    await expect(this.productTitle).toBeVisible();
  }

  async addToCart() {
    await this.addToCartButton.click();
  }
}

import { Page } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly searchBox;
  readonly searchButton;

  constructor(page: Page) {
    this.page = page;
    this.searchBox = page.locator("#twotabsearchtextbox");
    this.searchButton = page.locator("#nav-search-submit-button");
  }

  async goto() {
    await this.page.goto("https://www.amazon.in/");
  }

  async searchProduct(productName: string) {
    await this.searchBox.fill(productName);
    await this.searchButton.click();
  }
}

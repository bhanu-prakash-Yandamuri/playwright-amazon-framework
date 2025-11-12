import { Page } from "@playwright/test";

export class SearchResultsPage {
  readonly page: Page;
  readonly firstProduct;

  constructor(page: Page) {
    this.page = page;
    this.firstProduct = page.locator("div.s-main-slot div[data-component-type='s-search-result']").first();
  }

  async selectFirstProduct() {
    await this.firstProduct.click();
  }
}

import { expect, Locator, Page } from '@playwright/test';

export class className {
  readonly page: Page;
   

  constructor(page: Page) {
    this.page = page;
   
  }

  //методы
  async openPhysicalEntriesPage() {
    //await this.locator name.click({ timeout: 10000 });
    
  }
}


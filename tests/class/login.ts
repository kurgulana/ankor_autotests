import { expect, Locator, Page } from '@playwright/test';

export class Login {
  readonly page: Page;
   emailInput: Locator; 
   passwordInput: Locator;
   signInButton: Locator;


  constructor(page: Page) {
    this.page = page;
  this.emailInput = page.getByPlaceholder('Email')
  this.passwordInput = page.getByPlaceholder('password')
  this.signInButton=page.getByRole('button', { name: 'Sign In' });

  }

  //методы
  async loginMetod(email:string, password:string ) {
    await this.emailInput.fill(email)
    await this.passwordInput.fill(password)
    await this.signInButton.click({timeout:4000})
    
  }
}


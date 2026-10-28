import { test, expect } from '@playwright/test';
import * as allure from 'allure-js-commons';

const baseUrl = process.env.STAGING_BASE_URL!;
const userLogin= process.env.OWNER_LOGIN!;
const userPassword=process.env.USER_PASSWORD!; 


test('Успешный вход зарегистрированного пользователя @allure.id:70936', async ({ page }) => {
  await allure.allureId('70936');
  await allure.epic('Sign in')
  await allure.feature('Ankor - 1 version');
  await allure.story('Login');

  const loginUrl = baseUrl+'/sign-in'
  const welcomeHeading=page.getByRole('heading', { name: 'Welcome to Ankor!' })
  
  //переходим на страниц логина 
await page.goto(loginUrl);
await expect(welcomeHeading).toBeVisible(); 
//заполняем имайл и пароль
const emailInput = page.getByPlaceholder('Email')
await emailInput.fill(userLogin)
const passwordInput = page.getByPlaceholder('password')
await passwordInput.fill(userPassword)
//входим
const signInButton = page.getByRole('button', { name: 'Sign In' });
await signInButton.click();
//ожидаем юзер вошел 
const welcomeBackHeading = page.getByRole('heading', { name: /Welcome back/ });
await expect(page).not.toHaveURL(/sign-in/);
await expect(welcomeBackHeading).toBeVisible({ timeout: 30_000 }) 

});

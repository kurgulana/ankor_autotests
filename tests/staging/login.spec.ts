import { test, expect } from '@playwright/test';
import * as allure from 'allure-js-commons';
import { Login } from '../class/login';


const baseUrl = process.env.STAGING_BASE_URL!;
const userLogin= process.env.OWNER_LOGIN!;
const userPassword=process.env.USER_PASSWORD!; 
const loginUrl = baseUrl+'/sign-in'


test('Успешный вход зарегистрированного пользователя @allure.id:70936', async ({ page }) => {
  await allure.allureId('70936');
  await allure.epic('Sign in')
  await allure.feature('Ankor - 1 version');
  await allure.story('Login');

    const loginPage = new Login(page);
  const welcomeHeading=page.getByRole('heading', { name: 'Welcome to Ankor!' })
  
  //переходим на страниц логина 
await page.goto(loginUrl);
await expect(welcomeHeading).toBeVisible(); 
//заполняем имайл и пароль
await loginPage.loginMetod(userLogin, userPassword)

//ожидаем юзер вошел 
const welcomeBackHeading = page.getByRole('heading', { name: /Welcome back/ });
await expect(page).not.toHaveURL(/sign-in/);
await expect(welcomeBackHeading).toBeVisible({ timeout: 30_000 }) 

});

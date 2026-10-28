// @ts-check
import { defineConfig, devices } from '@playwright/test';
import 'dotenv/config';

const SHOW_BROWSER = true;   // браузер виден
//const SHOW_BROWSER = false;  // браузера не видно (коммитить так)

export default defineConfig({
  testDir: './tests',
  outputDir: 'test-results',

  /* Максимальное время на весь тест. Дольше — тест падает */
  timeout: 10 * 1000,          // 100 секунд

  /* Сколько expect ждёт выполнения проверки */
  expect: {
    timeout: 10 * 1000,         // 10 секунд
  },

  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 4 : undefined,

  /* Репортеры: вывод в консоль + Allure */
  reporter: [
    ['list'],
    ['allure-playwright', { resultsDir: 'allure-results' }],
  ],

  /* Общие настройки для всех браузеров */
  use: {
    headless: !SHOW_BROWSER,
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure',  // скриншот при падении
    video: 'retain-on-failure',     // видео упавших тестов
    trace: 'retain-on-failure',     // трейс упавших тестов
    actionTimeout: 15 * 1000,       // клик, ввод текста и т.д.
    navigationTimeout: 30 * 1000,   // page.goto, переходы
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1920, height: 980 },
      },
    },
  ],
});
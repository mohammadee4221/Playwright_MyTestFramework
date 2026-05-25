import { test as base, Page, APIRequest, APIRequestContext } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

export const test = base.extend<{
  loggedInPage: Page;
  apiClient: APIRequestContext;
}>({
  // UI fixture for logged-in page
  loggedInPage: async ({ browser }, use) => {
    const context = await browser.newContext({ storageState: 'storage/loginState.json' });
    const page = await context.newPage();
    await use(page);
  },

});
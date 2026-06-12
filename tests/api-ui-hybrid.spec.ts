import { test, expect, request } from '@playwright/test';

test('create account with new context', async () => {

  const api = await request.newContext({
    baseURL: 'https://parabank.parasoft.com/parabank/services/bank',
    extraHTTPHeaders: {
      'Content-Type': 'application/json'
    }
  });

  const response = await api.post('/createAccount', {
    data: {
      customerId: 12212,
      newAccountType: 1,
      fromAccountId: 54321
    }
  });

  expect(response.ok()).toBeTruthy();

  const data = await response.json();
  console.log('Account ID:', data.id);

  await api.dispose();
});
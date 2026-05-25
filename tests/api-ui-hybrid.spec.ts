import { test, expect } from '@playwright/test';

test('create a new account' async({page,request})=>{
  const api = await request.newContext({ 
    baseURL: 'https://parabank.parasoft.com/parabank/services/bank', 
    extraHTTPHeaders: { 
        'Content-Type': 'application/json' 
    }
 });
  const createResponse = await api.post('/createAccount', 
    { data: { customerId: 12212,
         newAccountType: 1, 
          fromAccountId: 54321 
         } }); 
         expect(createResponse.ok()).toBeTruthy(); 
         const accountData = await createResponse.json(); 
         
         const newAccountId = accountData.id; console.log("New Account Created:", newAccountId);  
})
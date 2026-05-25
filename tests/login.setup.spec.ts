import {test} from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

test('save login state', async({page})=>{
    const login = new LoginPage(page);
    await login.goto();
    await login.login("testuser", "testpass", 'storage/loginState.json');
});
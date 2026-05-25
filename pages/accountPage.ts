import {Page, expect} from '@playwright/test';

export class AccountPage {
    constructor (private page : Page){}

    async landing(){
       // await expect(this.page.locator('h1')).toHaveText('Accounts Overview');
         await expect(this.page.locator('h1')).toHaveText('Accounts Overview');
    }

    async accoverview(){
        await this.page.click('//a[@href="overview.htm"]');
    };
    async transferFunds(amount: string, from: string, to: string){
        await this.page.click('//a[@href="transfer.htm"]');
        await this.page.fill('input[id="amount"]', amount);
        await this.page.selectOption('select[id="fromAccountId"]', {label: from });
        await this.page.selectOption('select[id="toAccountId"]', {label: to});
        await this.page.click('input[value="Transfer"]');
    }

}
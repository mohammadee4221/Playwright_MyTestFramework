import {Page, expect} from '@playwright/test';

export class LoginPage {
    constructor(private page : Page){}

    async goto(){
        await this.page.goto('https://parabank.parasoft.com/parabank/index.htm');
    }

    async login(username: string, password:string, statePath: string){
        await this.page.fill('input[name="username"]', username);
        await this.page.fill('input[name="password"]',password);
        await this.page.click('input[value="Log In"]');
        await this.page.context().storageState({path: statePath});

    }
    
}

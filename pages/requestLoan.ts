import {Page, expect} from "@playwright/test";

export class RequestLoan{
    constructor(private page : Page){}

    async loanpage(){
        await this.page.click('//a[@href="requestloan.htm"]');
       await expect(this.page.getByRole('heading', { name: 'Apply for a Loan' })).toHaveText('Apply for a Loan');
    };

    async applyLoag(amount: string , pay: string, from: string){
        await this.page.fill('input[id="amount"]',amount);
        await this.page.fill('input[id="downPayment"]', pay);
        await this.page.selectOption('select[id="fromAccountId"]', {label : from});
        await this.page.click('input[value="Apply Now"]');
        await expect(this.page.getByText('Loan Request Processed')).toBeVisible();
    }
}
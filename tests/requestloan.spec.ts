import {test} from '../fixtures/authFixture.ts';
import {LoginPage} from '../pages/loginPage.ts';
import {RequestLoan} from '../pages/requestLoan.ts';

test('Request for a loan', async({loggedInPage})=>{
     await loggedInPage.goto(
    'https://parabank.parasoft.com/parabank/transfer.htm'
  );
    const requestLoan = new RequestLoan(loggedInPage);
    await requestLoan.loanpage();
    await requestLoan.applyLoag('1000', '200', '26664');
});
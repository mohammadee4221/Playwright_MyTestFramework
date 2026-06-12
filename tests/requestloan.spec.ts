import {test} from '../fixtures/authFixture';
import {LoginPage} from '../pages/loginPage';
import {RequestLoan} from '../pages/requestLoan';

test('Request for a loan', async({loggedInPage})=>{
     await loggedInPage.goto(
    'https://parabank.parasoft.com/parabank/transfer.htm'
  );
    const requestLoan = new RequestLoan(loggedInPage);
    await requestLoan.loanpage();
    await requestLoan.applyLoag('1000', '200', '26664');
});
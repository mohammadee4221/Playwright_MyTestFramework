import {test} from '../fixtures/authFixture';
import {AccountPage} from '../pages/accountPage';

test('TransferFunds', async({loggedInPage}) => {
     await loggedInPage.goto(
    'https://parabank.parasoft.com/parabank/transfer.htm'
  );
    const accPage = new AccountPage(loggedInPage);
    await accPage.transferFunds('100', '26664', '26664');

}
);
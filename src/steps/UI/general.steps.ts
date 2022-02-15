import { Given, Then, When } from '@cucumber/cucumber';
import dotenv from 'dotenv';
import { ICustomWorld } from '../../support/custom-world';
import { verifyPageObj, goToUrl } from '../../utils/elements';
import { login } from '../../utils/profile';

dotenv.config();

Given('I go to the main page', async function (this: ICustomWorld) {
  const page = await verifyPageObj(this.page);
  await goToUrl(page, process.env.BASE_URL || 'https://www.udemy.com/', "a[data-purpose='header-login']");
});

Given('I click on on the button with the selector {string}', async function (this: ICustomWorld, selector: string) {
  const page = await verifyPageObj(this.page);
  await page.locator(selector).click();
});

Given('I am on the login page', async function (this: ICustomWorld) {
  const page = await verifyPageObj(this.page);
  await page.locator("form[action-type='login']");
});

When('I fill in the email and password fields', async function (this: ICustomWorld) {
  const page = await verifyPageObj(this.page);
  await login(page, process.env.LOGIN_EMAIL || '', process.env.LOGIN_PASSWORD || '');
});

Then('I should be logged in', async function (this: ICustomWorld) {
  const page = await verifyPageObj(this.page);
  await page.locator("a[data-purpose='user-dropdown']").hover();
  await page.locator(`div:has-text('${process.env.LOGIN_EMAIL}')`);
});

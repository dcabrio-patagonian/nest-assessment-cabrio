import { Then } from '@cucumber/cucumber';
import { ICustomWorld } from '../../support/custom-world';
import { verifyPageObj } from '../../utils/elements';

Then('I should enroll in the course if I am not enrolled in it', async function (this: ICustomWorld) {
  const page = await verifyPageObj(this.page);
  try {
    const enrollBtn = page.locator(
      'div.buy-button.buy-box--buy-box-item--1Qbkl.buy-box--buy-button--1mpz_ > div > button:has-text("Enroll now")',
    );
    await enrollBtn.waitFor({ timeout: 1000 });
    await enrollBtn.click();
    await page.waitForSelector('div.udlite-in-udheavy.mb-space-sm.styles--success-alert-banner-container--3ylca');
  } catch (error) {
    await page.waitForSelector(
      'div.buy-button.buy-box--buy-box-item--1Qbkl.buy-box--buy-button--1mpz_ > div > button:has-text("Go to course")',
    );
  }
});

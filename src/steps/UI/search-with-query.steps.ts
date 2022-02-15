import { Then, When } from '@cucumber/cucumber';
import expect from 'expect';
import { ICustomWorld } from '../../support/custom-world';
import { verifyPageObj } from '../../utils/elements';

When('I search for courses with query {string}', async function (this: ICustomWorld, query: string) {
  const page = await verifyPageObj(this.page);
  await page.locator("input[name='q']").fill(query);
  await page.locator("button[type='submit']").click();
});

Then('I should see {string} in the search results', async function (this: ICustomWorld, expected: string) {
  const page = await verifyPageObj(this.page);
  await page.waitForSelector('div.course-list--container--3zXPS');
  await page.locator(`h1.udlite-heading-xl.search--header-title--3wfny:contains('${expected}')`);
  const courses = await page.locator('.popper--popper--2r2To');
  global.console.log(await courses.count());
  expect(await courses.count()).toBeGreaterThan(0);
});

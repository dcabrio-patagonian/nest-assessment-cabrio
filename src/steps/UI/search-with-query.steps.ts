import { Then, When } from '@cucumber/cucumber';
import { ICustomWorld } from '../../support/custom-world';
import { checkCourseSearch } from '../../utils/courses';
import { verifyPageObj } from '../../utils/elements';

When('I search for courses with query {string}', async function (this: ICustomWorld, query: string) {
  const page = await verifyPageObj(this.page);
  await page.locator("input[name='q']").fill(query);
  await page.locator("button[type='submit']").click();
});

Then('I should see {string} in the search results', async function (this: ICustomWorld, expected: string) {
  const page = await verifyPageObj(this.page);
  await checkCourseSearch(page, 'h1.udlite-heading-xl.search--header-title--3wfny', expected);
});

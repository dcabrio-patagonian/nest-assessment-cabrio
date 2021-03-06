import { Then, When } from '@cucumber/cucumber';
import { ICustomWorld } from '../support/custom-world';
import { checkCourseSearch } from '../utils/courses';
import { verifyPageObj } from '../utils/elements';

When('I search for courses with the category {string}', async function (this: ICustomWorld, category: string) {
  const page = verifyPageObj(this.page);
  await page.locator('nav.header--gap-button--3bIww.popper--popper--2r2To').hover();
  const categorySplit = category.split('/');
  if (categorySplit.length > 3) {
    throw new Error('Categories can only have 3 levels of depth');
  }

  // Hover over the category element on the nav bar
  const selector = (cat: string) =>
    `div.list-menu--list-menu-container--21IlT.browse-nav--nav-container--2QiNy li a div:has-text('${cat}')`;

  // For each category in the 'category path', hover over the category
  for (const cat of categorySplit) {
    await page.locator(selector(cat)).first().hover();
    await page.waitForTimeout(500);
  }

  // Clicks the last category in the path, after hovering over all the necessary categories
  await page
    .locator(selector(categorySplit[categorySplit.length - 1]))
    .first()
    .click();
});

Then('I should see {string} as the category search', async function (this: ICustomWorld, expected: string) {
  const page = verifyPageObj(this.page);
  await checkCourseSearch(page, 'h1.udlite-heading-serif-xxl', expected);
});

When('I search for courses with query {string}', async function (this: ICustomWorld, query: string) {
  const page = verifyPageObj(this.page);

  // Saves the query in the world parameters for later use
  this.parameters.searchTerm = query;
  await page.locator("input[name='q']").fill(query);
  await page.locator("button[type='submit']").click();
});

Then('I should see {string} in the search results', async function (this: ICustomWorld, expected: string) {
  const page = verifyPageObj(this.page);
  await checkCourseSearch(page, 'h1.udlite-heading-xl.search--header-title--3wfny', expected);
});

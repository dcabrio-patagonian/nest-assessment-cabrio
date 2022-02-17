import { Then, When } from '@cucumber/cucumber';
import { ICustomWorld } from '../support/custom-world';
import { checkLanguageFilter, checkPriceFilter } from '../utils/courses';
import { verifyPageObj } from '../utils/elements';

When(
  'I filter by {string} in the {string} submenu',
  async function (this: ICustomWorld, filter: string, submenu: string) {
    // The applied filters are saved in the world parameters for later use
    this.parameters.filters[submenu] = filter;

    const page = verifyPageObj(this.page);
    const filterForm = await page.locator('#filter-form');
    const filterSubmenus = await filterForm.locator('div > .panel--panel--3uDOH');

    let filterSubmenu = null;

    // Find the submenu element that matches the submenu name
    for (let i = 0; i < (await filterSubmenus.count()); i++) {
      filterSubmenu = await filterSubmenus.nth(i);
      const filterSubMenuText = await filterSubmenu.locator('div > h3 > button').innerText();
      if (filterSubMenuText === submenu) {
        break;
      }
    }

    if (filterSubmenu === null) {
      throw new Error(`Could not find submenu ${submenu}`);
    }

    if ((await filterSubmenu.locator('div > h3 > button').getAttribute('aria-expanded')) === 'false') {
      await filterSubmenu.click();
    }
    await filterSubmenu.locator(`label:has-text('${filter}')`).first().click();
  },
);

When('I click the course at position {string}', async function (this: ICustomWorld, position: string) {
  const page = verifyPageObj(this.page);
  const courses = await page.locator('.course-list--container--3zXPS > .popper--popper--2r2To');
  await courses.nth(parseInt(position) - 1).click();
});

Then('I should see the filters filters applied', async function (this: ICustomWorld) {
  const page = verifyPageObj(this.page);

  // To add another filter check, add another case to the switch statement
  for (const filter in this.parameters.filters) {
    const expectedValue = this.parameters.filters[filter];
    switch (filter) {
      case 'Language': {
        await checkLanguageFilter(page, expectedValue);
        break;
      }
      case 'Price': {
        await checkPriceFilter(page, expectedValue);
        break;
      }
      default:
        throw new Error(`Unknown filter or check not implemented - ${filter}`);
    }
  }
});

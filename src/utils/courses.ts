import { Page } from 'playwright';
import expect from 'expect';

export async function checkCourseSearch(page: Page, titleSelector: string, expectedTitle: string) {
  await page.waitForSelector('div.course-list--container--3zXPS');
  await page.locator(`${titleSelector}:contains('${expectedTitle}')`);
  const courses = await page.locator('.popper--popper--2r2To');
  expect(await courses.count()).toBeGreaterThan(0);
}

export async function checkPriceFilter(page: Page, expectedPrice: string) {
  const price = await page.locator('div.price-text--price-part--2npPm.udlite-clp-discount-price').first().innerText();
  if (expectedPrice === 'Free') {
    expect(price).toContain(expectedPrice);
  } else {
    expect(price === 'Free').toBeFalsy();
  }
}

export async function checkLanguageFilter(page: Page, expectedLanguage: string) {
  const language = await page.locator("div[data-purpose='lead-course-locale']").first().innerText();
  expect(language).toEqual(expectedLanguage);
}

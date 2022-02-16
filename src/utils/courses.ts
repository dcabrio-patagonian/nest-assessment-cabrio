import { Page } from 'playwright';
import expect from 'expect';

export async function checkCourseSearch(page: Page, titleSelector: string, expectedTitle: string) {
  await page.waitForSelector('div.course-list--container--3zXPS');
  await page.locator(`${titleSelector}:contains('${expectedTitle}')`);
  const courses = await page.locator('.popper--popper--2r2To');
  expect(await courses.count()).toBeGreaterThan(0);
}

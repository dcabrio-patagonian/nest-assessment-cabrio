import { Page } from 'playwright';
/**
 * Verifies that the page object exists, and returns it
 *
 * @export
 * @param {(Page | undefined)} page
 * @return {Page}
 */
export function verifyPageObj(page: Page | undefined) {
  if (!page) {
    throw new Error('Page is not defined');
  }
  return page;
}
/**
 * Given a URL, it will navigate to it and wait for network idle
 * Optionally, if you also want to wait for an element to be visible, you can pass a selector
 *
 * @export
 * @param {Page} page
 * @param {string} url
 * @param {string} [waitForElementSelector]
 */
export async function goToUrl(page: Page, url: string, waitForElementSelector?: string) {
  await page.goto(url, { waitUntil: 'networkidle' });
  if (waitForElementSelector) {
    await page.waitForSelector(waitForElementSelector);
  }
}

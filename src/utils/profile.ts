import { Page } from 'playwright';
/**
 * Given a username and password, it will log in to the site.
 *
 * @export
 * @param {Page} page
 * @param {string} username
 * @param {string} password
 */
export async function login(page: Page, username: string, password: string) {
  await page.locator("input[name='email']").type(username, { delay: 50 });
  await page.locator("input[type='password']").type(password, { delay: 50 });
}

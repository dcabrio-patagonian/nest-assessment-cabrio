import { Page } from 'playwright';

export async function login(page: Page, username: string, password: string) {
  await page.locator("input[name='email']").fill(username);
  await page.locator("input[type='password']").fill(password);
}

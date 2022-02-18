import { Then, When } from '@cucumber/cucumber';
import { ICustomWorld } from '../support/custom-world';
import { verifyPageObj } from '../utils/elements';

Then('I should enroll in the course if I am not enrolled in it', async function (this: ICustomWorld) {
  const page = verifyPageObj(this.page);

  // If the enroll button cant be found, then we are already enrolled
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

When('I save the course name', async function (this: ICustomWorld) {
  const page = verifyPageObj(this.page);
  const courseName = await page.locator('h1.udlite-heading-xl.clp-lead__title.clp-lead__title--small').innerText();

  // Save the course name in the world parameters for later use
  this.parameters.courseName = courseName;
});

When(
  'I call the courses-list endpoint with the previous query and the parameters {string}',
  async function (this: ICustomWorld, parameters: string) {
    const { api } = this;
    if (!api || !api.context) {
      throw new Error('No API context found');
    }
    const { context } = api;

    // Makes the request for the courses list with the given parameters and the saved query search
    const response = await context.get('courses/?' + parameters, {
      params: {
        search: this.parameters.searchTerm,
      },
    });
    if (response.status() > 299) {
      throw new Error(`Error calling courses-list endpoint: ${await response.text()}`);
    }

    // Save the response in the world parameters for later use
    this.parameters.response = await response.json();
  },
);

Then('I should see the course name in the courses list', async function (this: ICustomWorld) {
  const { response, courseName } = this.parameters;
  const course = response.results.find((c: { title: string }) => c.title === courseName);
  if (!course) {
    throw new Error(`Course ${courseName} not found`);
  }
});

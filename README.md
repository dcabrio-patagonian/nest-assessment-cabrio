# QA NEST ASSESSMENT - PATAGONIAN 2022
#### Damián Andrés Cabrio

## Requirements:

- node >=14

## Set up:

The set-up of this project is simple. The only thing you need to do is to run the `npm install` command. After that, you can start running or developing your test cases.

## Useful commands:

```bash
# Run one test by name
$ npx cucumber-js --name 'test name'
# Run tests by tag
$ npx cucumber-js --tags '@tag1,@tag2'
# Run all tests
$ npx cucumber-js
# Run tests with report in html (saved in the reports folder)
$ npm run report
# Debug mode
$ PWDEBUG=1 npx cucumber-ts
```

## Change browser setting:

Set the BROWSER environment variable, choose one of these options: chrome, webkit, firefox (The default browser is firefox)
For example, to configure it to use webkit you would use this command:

```bash
export BROWSER=webkit
```

It can also be set before calling the test command, like:

```bash
BROWSER=chrome npx cucumber-js --name "Add a default Loop command""
```

Just as an example, here is how to run the test tagged as "@login" using firefox:

```bash
BROWSER=firefox npx cucumber-js --tags '@login'
```

## Configuring headless mode:

To enable/disable headless mode, look into the file src/support/config.ts and add/remove this attribute in the LaunchOptions:

```
headless: false
```

## Adding a test case:

1. Create a feature in the 'features' folder. For guidance on how to create a feature, you can check the already created features for help or look at the cucumber documentation.
   
2. Run the newly created test by name, with the following command: `npx cucumber-js --name 'test name'`. The test will fail because the steps for it hadn't been created yet, but cucumber will tell you the syntax of the missing steps you need to add for it to run in the console output.
   
3. Create a steps.ts file in the src/steps folder, or use one of the already created ones if appropriate. There you will paste the missing steps that cucumber told you about, and import all the necessary libraries cucumber and playwright needs. Afterwards, you should replace the boilerplate code of the tests with your own (You can follow the example of other step files, and follow the documentation). **You must also import ICustomWorld from custom-world file and use it as your 'this' in all steps functions (check already created steps for an example).**.
   
4. Once you implemented all your tests, you can run them again using the same command as last time, `npx cucumber-js --name 'test name'`, to check if the test works. If you wish to run them in debug mode, use this command `PWDEBUG=1 npx cucumber-ts --name 'test name'`. If you just want to run the test in headed mode, you can go to the config file in the src/support folder, and change the headless attribute to false. **Remember to turn it back before committing your changes.**. Finally, if you want to generate a report of the results of the test, you can run the `npm run report` command. After the report finishes generating, you can see the results by running `npm run open-report` or open it manually in the reports folder.

## Tips

- If using Visual Studio Code, it is recommended to use this extension to help with the features files: [Cucumber-Gherkin extension](https://marketplace.visualstudio.com/items?itemName=alexkrechik.cucumberautocomplete)

## Extra documentation:

- **Cucumber:** Behavior-Driven Development (BDD) - [Documentation](https://cucumber.io/docs/installation/).
- **Playwright:** Testing Library - [Documentation](https://playwright.dev/docs/intro).
- **Template Project:** [Template](https://github.com/Tallyb/cucumber-playwright).
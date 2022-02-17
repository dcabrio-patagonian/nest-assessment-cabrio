import { setWorldConstructor, World, IWorldOptions } from '@cucumber/cucumber';
import * as messages from '@cucumber/messages';
import { APIRequestContext, BrowserContext, Page } from 'playwright';

export interface CucumberWorldConstructorParams {
  parameters: { [key: string]: string };
}

export interface ICustomWorld extends World {
  debug: boolean;
  feature?: messages.Pickle;
  context?: BrowserContext;
  page?: Page;
  testName?: string;
  api?: {
    context?: APIRequestContext;
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  parameters: { [key: string]: any };
}

export class CustomWorld extends World implements ICustomWorld {
  constructor(options: IWorldOptions) {
    super(options);
  }
  debug = false;
}

setWorldConstructor(CustomWorld);

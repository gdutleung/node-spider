import { PlaywrightCrawler } from 'crawlee';
import { Service } from 'egg';

export enum SpiderType {
  cheerio = 1,
  playwright = 2,
  puppeteer = 3,
}

export interface GetSourceCodeParams {
  target: string;
  header?: Record<string, any>;
  enable_proxy?: boolean;
  extract_rule?: string;
  enable_js_render?: boolean;
  type?: SpiderType;
}

const createCrawler = (config: GetSourceCodeParams) => {
  const { target } = config;
  return new Promise<string>(resolve => {
    const crawler = new PlaywrightCrawler({
      launchContext: {
        launchOptions: {
          headless: false,
        },
      },

      async requestHandler({
        page,
      }) {
        await page.waitForSelector('span', {
          state: 'attached',
        });
        const html = await page.innerHTML('html');

        resolve(html);
      },
    });

    crawler.run([ target ]);
  });
};

/**
 * SourceCode Service
 */
export default class SourceCode extends Service {
  /**
   *
   * @param params GetSourceCodeParams
   * @return
   */
  public async getSourceCode(config: GetSourceCodeParams): Promise<string> {
    const result = await createCrawler(config);

    return result;
  }
}

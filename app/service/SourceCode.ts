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
    const {
      target,
      header,
      enable_js_render,
      enable_proxy,
      extract_rule,
      type,
    } = config;
    // 在这里加爬虫的逻辑
    return `request params, ${JSON.stringify({
      target,
      header,
      enable_js_render,
      enable_proxy,
      extract_rule,
      type,
    })}`;
  }
}

import { Service } from 'egg';

export interface GetRewriteParams {
  firebase_token: string;
  payload: Record<string, string | number>;
  overwrite_header?: Record<string, string | number>;
}

const API_REWRITE = 'https://api.wordtune.com/rewrite';

/**
 * Wordtune Service
 */
export default class Wordtune extends Service {
  /**
   *
   * @param params GetRewriteParams
   * @return
   */
  public async getRewrite(params: GetRewriteParams): Promise<any> {
    try {
      const { firebase_token: firebaseToken, payload, overwrite_header: overwriteHeader = {} } = params;
      const headers = {
        accept: 'application/json, text/plain, */*',
        'accept-language': 'zh-CN,zh;q=0.9',
        'cache-control': 'no-cache',
        'content-type': 'application/json',
        'firebase-auth': 'true',
        'firebase-token': firebaseToken,
        pragma: 'no-cache',
        'sec-ch-ua':
            '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        ...overwriteHeader,
      };
      const res = await fetch(API_REWRITE, {
        headers,
        referrer: 'https://app.wordtune.com/',
        referrerPolicy: 'strict-origin-when-cross-origin',
        body: JSON.stringify(payload),
        method: 'POST',
        mode: 'cors',
        credentials: 'omit',
      });
      return res.json();
    } catch (error) {
      console.log(error);
      return 'error';
    }
  }
}

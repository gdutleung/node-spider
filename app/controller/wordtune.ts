import { Controller } from 'egg';

export default class WordtuneController extends Controller {
  public async rewrite() {
    const { body } = this.ctx.request;
    const result = await this.ctx.service.wordtune.getRewrite(body);

    if (result) {
      this.ctx.body = {
        status: 0,
        data: result,
      };
    } else {
      this.ctx.body = {
        status: -1,
        data: result,
      };
    }
    this.ctx.set('content-type', 'application/json');
  }
}

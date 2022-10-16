import { Controller } from 'egg';

export default class SpiderController extends Controller {
  public async getSourceCode() {
    const { ctx } = this;
    const { query } = ctx;
    const result = await ctx.service.sourceCode.getSourceCode(query as any);

    ctx.body = {
      status: 0,
      result,
    };
    ctx.set('content-type', 'application/json');
  }
}

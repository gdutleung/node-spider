import { Controller } from 'egg';

export default class SpiderController extends Controller {
  public async getSourceCode() {
    const { ctx } = this;
    const { query } = ctx;
    ctx.body = await ctx.service.sourceCode.getSourceCode(query as any);
  }
}

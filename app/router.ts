import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/spider/get-source-code', controller.spider.getSourceCode);
  router.post('/wordtune/rewrite', controller.wordtune.rewrite);
};

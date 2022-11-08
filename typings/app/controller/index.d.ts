// This file is created by egg-ts-helper@1.33.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportSpider from '../../../app/controller/spider';
import ExportWordtune from '../../../app/controller/wordtune';

declare module 'egg' {
  interface IController {
    spider: ExportSpider;
    wordtune: ExportWordtune;
  }
}

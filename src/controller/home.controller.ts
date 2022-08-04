import { Controller, Get } from '@midwayjs/decorator';
import * as cheerio from 'cheerio';
import axios from 'axios';

@Controller('/')
export class HomeController {
  @Get('/')
  async home(): Promise<string> {
    const result = await axios.get('http://www.baidu.com/');
    const $ = cheerio.load(result.data);
    const src = $('div#lg').find('img').attr('src');
    return src;
    // return new Promise(reslove => {
    //   setTimeout(() => {
    //     reslove(src);
    //   }, 1500);
    // });
  }
}

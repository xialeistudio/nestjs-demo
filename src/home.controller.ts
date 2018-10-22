import { Controller, Get, Query, Body, Post } from '@nestjs/common';

@Controller()
export class HomeController {
  @Get('/time')
  time() {
    return {
      time: new Date().toString(),
    };
  }

  @Get('/query')
  queryDemo(@Query('name') name: string) {
    return {
      msg: '您的名字是:' + name,
    };
  }

  @Post('/post')
  bodyDemo(@Body() body: any) {
    return {
      data: body,
    };
  }
}

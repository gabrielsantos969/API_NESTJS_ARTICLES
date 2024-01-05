import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('Start')
export class StartController {
  @Get()
  getHello(): string {
    return String(process.env.NODE_ENV);
  }
}

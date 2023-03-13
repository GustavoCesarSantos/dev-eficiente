import { Controller, Get } from '@nestjs/common';

@Controller('autores')
export class AutoresController {
  @Get()
  teste(): string {
    return 'teste';
  }
}

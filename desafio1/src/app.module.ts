import { Module } from '@nestjs/common';

import { AutoresController } from './autores/autores.controller';

@Module({
  imports: [],
  controllers: [AutoresController],
  providers: [],
})
export class AppModule {}

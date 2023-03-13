import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AutoresController } from './autores/autores.controller';

@Module({
  imports: [],
  controllers: [AppController, AutoresController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';

import { AutoresModule } from './autores/autores.module';
import { CategoriasModule } from './categorias/categorias.module';
import { IsUniqueRule } from './customValidations/rules/is-unique.rule';

@Module({
  imports: [AutoresModule, CategoriasModule],
  controllers: [],
  providers: [IsUniqueRule],
})
export class AppModule {}

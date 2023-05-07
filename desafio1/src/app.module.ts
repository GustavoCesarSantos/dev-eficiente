import { Module } from '@nestjs/common';

import { AutoresModule } from './autores/autores.module';
import { CategoriasModule } from './categorias/categorias.module';
import { LivrosModule } from './livros/livros.module';
import { IsUniqueRule } from './customValidations/rules/is-unique.rule';
import { IsFutureRule } from './customValidations/rules/is-future.rule';

@Module({
  imports: [AutoresModule, CategoriasModule, LivrosModule],
  controllers: [],
  providers: [IsUniqueRule, IsFutureRule],
})
export class AppModule {}

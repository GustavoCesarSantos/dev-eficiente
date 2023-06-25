import { Module } from '@nestjs/common';

import { AutoresModule } from './autores/autores.module';
import { CategoriasModule } from './categorias/categorias.module';
import { LivrosModule } from './livros/livros.module';
import { IsUniqueRule } from './customValidations/rules/is-unique.rule';
import { IsFutureRule } from './customValidations/rules/is-future.rule';
import { PaisesModule } from './paises/paises.module';
import { ComprasModule } from './compras/compras.module';

@Module({
  imports: [
    AutoresModule,
    CategoriasModule,
    LivrosModule,
    PaisesModule,
    ComprasModule,
  ],
  controllers: [],
  providers: [IsUniqueRule, IsFutureRule],
})
export class AppModule {}

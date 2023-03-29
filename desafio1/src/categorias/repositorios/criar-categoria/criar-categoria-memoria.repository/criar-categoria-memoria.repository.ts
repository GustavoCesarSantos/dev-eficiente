import { Injectable } from '@nestjs/common';

import { Categoria } from '../../../categoria.entity';

@Injectable()
export class CriarCategoriaMemoriaRepository {
  private db: Categoria[] = [];

  public criar(categoria: Categoria): Categoria {
    this.db.push(categoria);
    return categoria;
  }
}

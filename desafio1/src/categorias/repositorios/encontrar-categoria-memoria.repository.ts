import { Injectable } from '@nestjs/common';

import { Categoria } from '../categoria.entity';

@Injectable()
export class EncontrarCategoriaMemoriaRepository {
  private db: Categoria[] = [];

  public encontrar(id: string): Categoria | undefined {
    return this.db.find((categoria) => categoria.getId() === id);
  }
}

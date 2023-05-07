import { Injectable } from '@nestjs/common';

import { Livro } from '../../../livro.entity';

@Injectable()
export class EncontrarLivroMemoriaRepository {
  private readonly db: Livro[] = [];

  public encontrar(id: string): Livro | undefined {
    return this.db.find((livro) => {
      return livro.getId() === id;
    });
  }
}

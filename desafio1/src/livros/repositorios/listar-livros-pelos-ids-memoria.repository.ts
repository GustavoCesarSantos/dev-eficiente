import { Injectable } from '@nestjs/common';

import { Livro } from '../livro.entity';

@Injectable()
export class ListarLivrosPelosIdsMemoriaRepository {
  private readonly db: Livro[] = [];

  public listar(ids: string[]): Livro[] {
    return this.db.filter((livro) => {
      return ids.includes(livro.getId());
    });
  }
}

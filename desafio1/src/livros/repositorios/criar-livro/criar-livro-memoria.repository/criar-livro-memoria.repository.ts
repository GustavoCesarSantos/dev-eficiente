import { Injectable } from '@nestjs/common';

import { Livro } from '../../../livro.entity';

@Injectable()
export class CriarLivroMemoriaRepository {
  private db: Livro[] = [];

  public criar(livro: Livro): Livro {
    this.db.push(livro);
    return livro;
  }
}

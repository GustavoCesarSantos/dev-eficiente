import { Injectable } from '@nestjs/common';
import { Livro } from '../../../livro.entity';

@Injectable()
export class ListarLivrosMemoriaRepository {
  private db: Livro[] = [];

  listar(): Livro[] {
    return this.db;
  }
}

import { Injectable } from '@nestjs/common';
import { Livro } from '../../../livro.entity';

type Livros = {
  id: string;
  titulo: string;
}[];

@Injectable()
export class ListarLivrosMemoriaRepository {
  private db: Livro[] = [];

  listar(): Livros {
    return this.db.map((livro) => {
      return { id: livro.getId(), titulo: livro.getTitulo() };
    });
  }
}

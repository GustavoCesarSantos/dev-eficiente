import { Injectable } from '@nestjs/common';
import { Livro } from '../livro.entity';

@Injectable()
export class EncontrarLivroPeloTituloMemoriaRepository {
  private readonly db: Livro[] = [];

  public encontrar(titulo: string): Livro | undefined {
    return this.db.find((livro) => {
      return livro.getTitulo() === titulo;
    });
  }
}

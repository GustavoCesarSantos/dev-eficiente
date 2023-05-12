import { Injectable } from '@nestjs/common';
import { Livro } from '../livro.entity';

@Injectable()
export class EncontrarLivroPeloIsbnMemoriaRepository {
  private readonly db: Livro[] = [];

  public encontrar(isbn: string): Livro | undefined {
    return this.db.find((livro) => {
      return livro.getIsbn() === isbn;
    });
  }
}

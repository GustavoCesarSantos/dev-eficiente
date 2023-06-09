import { Injectable } from '@nestjs/common';

import { Autor } from '../../../autor.entity';

@Injectable()
export class CriarAutorMemoriaRepository {
  private db: Autor[] = [];

  public criar(autor: Autor): Autor {
    this.db.push(autor);
    return autor;
  }
}

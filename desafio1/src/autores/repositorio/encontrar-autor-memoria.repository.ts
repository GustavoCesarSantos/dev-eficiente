import { Injectable } from '@nestjs/common';

import { Autor } from '../autor.entity';

@Injectable()
export class EncontrarAutorMemoriaRepository {
  private db: Autor[] = [];

  public encontrar(id: string): Autor | undefined {
    return this.db.find((autor) => autor.getId() === id);
  }
}

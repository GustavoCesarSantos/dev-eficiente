import { Injectable } from '@nestjs/common';

import { Pais } from '../pais.entity';

@Injectable()
export class EncontrarPaisPeloIdMemoriaRepository {
  private db: Pais[] = [];

  public async encontrar(id: string): Promise<Pais | undefined> {
    return this.db.find((pais) => pais.getId() === id);
  }
}
